import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Yahan apni actual domain daal dena agar custom domain liya hai
  const baseUrl = 'https://shakir.dev' 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}