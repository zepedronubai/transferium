import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.transferium.online',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          en: 'https://www.transferium.online/?lng=en',
          pt: 'https://www.transferium.online/?lng=pt',
          es: 'https://www.transferium.online/?lng=es',
        },
      },
    },
  ];
}
