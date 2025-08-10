import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  messages: defineTable({
    author: v.string(),
    content: v.string(),
    timestamp: v.number(),
  }),
  
  users: defineTable({
    clerkId: v.string(),
    email: v.string(),
    displayName: v.string(),
    type: v.union(v.literal("Internal"), v.literal("Client")),
    role: v.union(v.literal("Admin"), v.literal("Project Manager"), v.literal("Creative"), v.literal("Client")),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_clerk_id", ["clerkId"]),
});

