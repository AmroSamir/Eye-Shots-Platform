import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { api } from "./_generated/api";
import { WebhookEvent } from "@clerk/nextjs/server";
import { Webhook } from "svix";

const http = httpRouter();

// Clerk webhook handler for user synchronization
http.route({
  path: "/clerk-webhook",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;
    if (!WEBHOOK_SECRET) {
      throw new Error("CLERK_WEBHOOK_SECRET is not set");
    }

    const svixId = request.headers.get("svix-id");
    const svixTimestamp = request.headers.get("svix-timestamp");
    const svixSignature = request.headers.get("svix-signature");

    if (!svixId || !svixTimestamp || !svixSignature) {
      return new Response("Missing svix headers", { status: 400 });
    }

    const payload = await request.text();
    const body = JSON.parse(payload);

    const webhook = new Webhook(WEBHOOK_SECRET);
    let event: WebhookEvent;

    try {
      event = webhook.verify(payload, {
        "svix-id": svixId,
        "svix-timestamp": svixTimestamp,
        "svix-signature": svixSignature,
      }) as WebhookEvent;
    } catch (err) {
      console.error("Webhook verification failed:", err);
      return new Response("Webhook verification failed", { status: 400 });
    }

    // Handle different webhook events
    switch (event.type) {
      case "user.created":
        await ctx.runMutation(api.users.createUser, {
          clerkId: event.data.id,
          email: event.data.email_addresses[0]?.email_address || "",
          displayName: `${event.data.first_name || ""} ${event.data.last_name || ""}`.trim() || "Unknown User",
          type: "Client", // Default type
          role: "Client", // Default role
        });
        break;

      case "user.updated":
        await ctx.runMutation(api.users.createUser, {
          clerkId: event.data.id,
          email: event.data.email_addresses[0]?.email_address || "",
          displayName: `${event.data.first_name || ""} ${event.data.last_name || ""}`.trim() || "Unknown User",
        });
        break;

      case "user.deleted":
        await ctx.runMutation(api.users.deleteUser, {
          clerkId: event.data.id || "",
        });
        break;

      default:
        console.log(`Unhandled webhook event: ${event.type}`);
    }

    return new Response("OK", { status: 200 });
  }),
});

export default http;