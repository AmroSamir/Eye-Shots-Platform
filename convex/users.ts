import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Create or update user from Clerk webhook
export const createUser = mutation({
  args: {
    clerkId: v.string(),
    email: v.string(),
    displayName: v.string(),
    type: v.optional(v.union(v.literal("Internal"), v.literal("Client"))),
    role: v.optional(v.union(v.literal("Admin"), v.literal("Project Manager"), v.literal("Creative"), v.literal("Client"))),
  },
  handler: async (ctx, args) => {
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .first();

    if (existingUser) {
      // Update existing user
      await ctx.db.patch(existingUser._id, {
        email: args.email,
        displayName: args.displayName,
        type: args.type || existingUser.type,
        role: args.role || existingUser.role,
        updatedAt: Date.now(),
      });
      return existingUser._id;
    } else {
      // Create new user with default type and role
      const userId = await ctx.db.insert("users", {
        clerkId: args.clerkId,
        email: args.email,
        displayName: args.displayName,
        type: args.type || "Client", // Default to Client
        role: args.role || "Client", // Default to Client role
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });
      return userId;
    }
  },
});

// Get user by Clerk ID
export const getUserByClerkId = query({
  args: { clerkId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .first();
  },
});

// Get all users (for admin use)
export const getAllUsers = query({
  handler: async (ctx) => {
    return await ctx.db.query("users").collect();
  },
});

// Update user type and role (admin function)
export const updateUserTypeAndRole = mutation({
  args: {
    clerkId: v.string(),
    type: v.union(v.literal("Internal"), v.literal("Client")),
    role: v.union(v.literal("Admin"), v.literal("Project Manager"), v.literal("Creative"), v.literal("Client")),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .first();

    if (!user) {
      throw new Error("User not found");
    }

    await ctx.db.patch(user._id, {
      type: args.type,
      role: args.role,
      updatedAt: Date.now(),
    });

    return user._id;
  },
});

// Delete user
export const deleteUser = mutation({
  args: { clerkId: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .first();

    if (user) {
      await ctx.db.delete(user._id);
    }
  },
});