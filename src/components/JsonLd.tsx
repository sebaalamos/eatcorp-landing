import { organizationSchema, softwareApplicationSchema } from '@/lib/jsonld'

export function JsonLd() {
  const payload = [organizationSchema(), softwareApplicationSchema()]
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  )
}
