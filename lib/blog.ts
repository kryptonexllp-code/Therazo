import { promises as fs } from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type BlogMeta = {
  title: string
  slug: string
  excerpt: string
  date: string
  category: string
  readTime: string
  coverAlt: string
}

const BLOGS_DIR = path.join(process.cwd(), 'content', 'blogs')

export async function getAllPosts(): Promise<BlogMeta[]> {
  const files = await fs.readdir(BLOGS_DIR)
  const posts = await Promise.all(
    files
      .filter((f) => f.endsWith('.mdx'))
      .map(async (file) => {
        const raw = await fs.readFile(path.join(BLOGS_DIR, file), 'utf-8')
        const { data } = matter(raw)
        return data as BlogMeta
      })
  )
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(BLOGS_DIR, `${slug}.mdx`)
  const raw = await fs.readFile(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { meta: data as BlogMeta, content }
}
