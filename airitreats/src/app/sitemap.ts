import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://airi-treats.vercel.app/',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://airi-treats.vercel.app/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: "https://airi-treats.vercel.app/contact",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5
        }

    ]
}