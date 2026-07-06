import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Default OpenNext → Cloudflare Workers config. Caching/queue overrides
// (KV/D1/R2) can be added here when Phase 2 introduces durable state.
export default defineCloudflareConfig();
