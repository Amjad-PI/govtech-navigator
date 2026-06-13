// src/lib/cloudflare.ts
export function getEnv(request: Request): CloudflareEnv {
  // Cloudflare Workers inject env into the execution context
  return (request as any).__env__ ?? (globalThis as any).__env__ ?? {}
}

interface CloudflareEnv {
  sled_documents: R2Bucket
}