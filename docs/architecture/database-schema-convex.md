# **Database Schema (Convex)**

Schemas will be defined in the /convex/schema.ts file, which will be added to the root of the Ecme project structure.  
// /convex/schema.ts  
import { defineSchema, defineTable } from "convex/server";  
import { v } from "convex/values";

export default defineSchema({  
  users: defineTable({  
    clerkId: v.string(),  
    email: v.string(),  
    displayName: v.string(),  
    type: v.union(v.literal("Internal"), v.literal("Client")),  
    role: v.union(v.literal("Admin"), v.literal("Project Manager"), v.literal("Creative"), v.literal("Client")),  
  }).index("by\_clerk\_id", \["clerkId"\]),

  projects: defineTable({  
    name: v.string(),  
    // ... other project fields  
  }),

  files: defineTable({  
    projectId: v.id("projects"),  
    storagePath: v.string(), // Path on the Contabo VPS  
    // ... other file fields  
  }),  
    
  // ... other tables for versions, reviews, invoices etc.  
});
