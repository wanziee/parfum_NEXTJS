import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://chelsea-dewa-perfume.com'
  
  const products = [
    'chelsea-dewa-premium',
    'elegant-floral',
    'woody-masculine',
    'fresh-citrus',
    'oriental-spice',
    'sweet-vanilla',
    'ocean-breeze',
    'midnight-rose'
  ]

  const productUrls = products.map((product) => ({
    url: `${baseUrl}/products/${product}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...productUrls,
  ]
}
