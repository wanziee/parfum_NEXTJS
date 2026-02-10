import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://chelsea-dewa-perfume.com'
  
  const products = [
    'ysl-libre',
    'baccarat-rouge-540',
    'black-opium',
    'dior-sauvage',
    '212-vip',
    'aigner-black',
    'bulgari-extreme',
    'giorgio-armani-acqua-di-gio',
    'omnia-amethyste',
    'coco-chanel'
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
