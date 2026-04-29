export const SITE_URL = 'https://eatcorp.cl'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EatCorp',
    url: SITE_URL,
    logo: `${SITE_URL}/apple-touch-icon.png`,
    description:
      'Plataforma todo-en-uno para restoranes en Chile: compras, tareas, redes sociales con IA, reservas y mantención.',
    foundingLocation: 'Chile',
    sameAs: ['https://instagram.com/eatcorp.cl', 'https://www.linkedin.com/company/eatcorp'],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: 'hola@eatcorp.cl',
        contactType: 'customer support',
        areaServed: 'CL',
        availableLanguage: ['es'],
      },
    ],
  } as const
}

export function softwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'EatCorp',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: SITE_URL,
    inLanguage: 'es-CL',
    offers: [
      {
        '@type': 'Offer',
        name: 'Starter',
        priceCurrency: 'CLP',
        price: '38000',
        priceSpecification: { '@type': 'UnitPriceSpecification', referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitText: 'MONTH' } },
      },
      {
        '@type': 'Offer',
        name: 'Pro',
        priceCurrency: 'CLP',
        price: '95000',
        priceSpecification: { '@type': 'UnitPriceSpecification', referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitText: 'MONTH' } },
      },
      {
        '@type': 'Offer',
        name: 'Enterprise',
        priceCurrency: 'CLP',
        priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'CLP' },
        description: 'Plan custom para cadenas y operaciones grandes',
      },
    ],
    featureList: [
      'Compras a proveedores con detección de discrepancias',
      'Tareas y permisos por equipo',
      'Redes sociales con IA y efemérides chilenas',
      'Mantención preventiva de activos',
      'Reservas en línea',
    ],
    publisher: { '@type': 'Organization', name: 'EatCorp', url: SITE_URL },
  } as const
}
