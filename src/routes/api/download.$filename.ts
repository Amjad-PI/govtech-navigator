import { createFileRoute } from '@tanstack/react-router'
import { env } from 'cloudflare:workers'

export const Route = createFileRoute('/api/download/$filename')({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const bucket = (env as unknown as CloudflareEnv).sled_documents

        if (!bucket) {
          return new Response('Storage not configured', { status: 500 })
        }

        const object = await bucket.get(params.filename)

        if (!object) {
          return new Response('File not found', { status: 404 })
        }

        return new Response(object.body as ReadableStream, {
          headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': `attachment; filename="${params.filename}"`,
            'Cache-Control': 'public, max-age=86400',
          },
        })
      },
    },
  },
})