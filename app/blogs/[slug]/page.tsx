import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import { getAllPosts, getPostBySlug } from '@/lib/blog'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  try {
    const { meta } = await getPostBySlug(slug)
    return {
      title: meta.title,
      description: meta.excerpt,
    }
  } catch {
    return { title: 'Journal' }
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  let meta, content
  try {
    ;({ meta, content } = await getPostBySlug(slug))
  } catch {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: meta.title,
    description: meta.excerpt,
    datePublished: meta.date,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="bg-offwhite px-6 md:px-20 pt-32 pb-20">
        <div className="max-w-[680px] mx-auto">
          <p className="text-mgrey text-[12px] mb-6">
            <Link href="/blogs">Journal</Link> › {meta.title}
          </p>
          <span className="inline-block text-navy/70 text-[10px] font-medium tracking-[0.15em] uppercase border border-cardline px-2.5 py-1 mb-5">
            {meta.category}
          </span>
          <h1 className="font-extrabold text-navy text-[30px] sm:text-[38px] leading-[1.2] mb-4">
            {meta.title}
          </h1>
          <p className="text-mgrey text-[12px] uppercase tracking-[0.08em] mb-8">
            {meta.date} · {meta.readTime}
          </p>
          <ImagePlaceholder label={meta.coverAlt} className="h-[260px] w-full mb-10" />
          <div
            className="[&_h2]:font-bold [&_h2]:text-navy [&_h2]:text-[24px] [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:leading-[1.3]
            [&_p]:text-dgrey [&_p]:text-[15px] [&_p]:leading-[1.8] [&_p]:mb-5
            [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-5 [&_li]:text-dgrey [&_li]:text-[15px] [&_li]:leading-[1.8] [&_li]:mb-2
            [&_table]:w-full [&_table]:my-6 [&_table]:border [&_table]:border-cardline
            [&_th]:bg-navy [&_th]:text-white [&_th]:p-3 [&_th]:text-[13px] [&_th]:text-left
            [&_td]:border [&_td]:border-cardline [&_td]:p-3 [&_td]:text-[13px] [&_td]:text-dgrey
            [&_strong]:text-navy [&_strong]:font-bold
            [&_a]:text-navy [&_a]:underline [&_a]:underline-offset-4"
          >
            <MDXRemote source={content} />
          </div>
        </div>
      </article>
    </>
  )
}
