import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

const BASE_URL = 'https://therazo.co'

const STATIC_PATHS = [
  '',
  '/customers',
  '/products',
  '/products/daily-shield',
  '/products/gentle-cleanser',
  '/products/age-renewal',
  '/products/barrier-repair',
  '/products/clarity-serum',
  '/science',
  '/about',
  '/routine',
  '/dose-guide',
  '/for-doctors',
  '/contact',
  '/blogs',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts()

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }))

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blogs/${post.slug}`,
    lastModified: new Date(post.date),
  }))

  return [...staticEntries, ...postEntries]
}
