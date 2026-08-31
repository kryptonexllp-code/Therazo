import type { Metadata } from 'next'
import Link from 'next/link'
import SectionLabel from '@/components/ui/SectionLabel'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Journal',
  description:
    'The science behind Therazo — ingredient explainers, UV filter science, and clinical education from the Therazo journal.',
}

export default async function BlogsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams
  const posts = await getAllPosts()
  const categories = Array.from(new Set(posts.map((p) => p.category)))
  const active = category && categories.includes(category) ? category : 'All'
  const filtered = active === 'All' ? posts : posts.filter((p) => p.category === active)

  return (
    <>
      <section className="bg-navy px-6 md:px-20 pt-32 pb-16">
        <SectionLabel dark>The Journal</SectionLabel>
        <h1 className="font-extrabold text-white text-[34px] sm:text-[48px] md:text-[56px] leading-[1.05] mb-6">
          The science behind Therazo.
        </h1>
        <p className="text-bluelight text-[16px] max-w-2xl">
          Ingredient explainers, UV filter science, and clinical education — written the way we
          formulate: evidence first.
        </p>
      </section>

      <section className="bg-offwhite px-6 md:px-20 py-16 md:py-20">
        <div className="flex flex-wrap gap-3 mb-12">
          <Link
            href="/blogs"
            className={`text-[11px] font-medium tracking-[0.15em] uppercase px-5 py-2.5 border transition-colors duration-200 ${
              active === 'All'
                ? 'bg-navy text-white border-navy'
                : 'bg-white text-navy border-cardline hover:border-navy'
            }`}
          >
            All
          </Link>
          {categories.map((c) => (
            <Link
              key={c}
              href={`/blogs?category=${encodeURIComponent(c)}`}
              className={`text-[11px] font-medium tracking-[0.15em] uppercase px-5 py-2.5 border transition-colors duration-200 ${
                active === c
                  ? 'bg-navy text-white border-navy'
                  : 'bg-white text-navy border-cardline hover:border-navy'
              }`}
            >
              {c}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="bg-white border border-cardline p-6 flex flex-col transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="inline-block self-start text-navy/70 text-[10px] font-medium tracking-[0.15em] uppercase border border-cardline px-2.5 py-1 mb-4">
                {post.category}
              </span>
              <h2 className="font-bold text-navy text-[17px] leading-[1.35] mb-3">{post.title}</h2>
              <p className="text-dgrey text-[13px] leading-[1.6] mb-5 flex-1">{post.excerpt}</p>
              <p className="text-mgrey text-[11px] uppercase tracking-[0.08em] mt-auto">
                {post.date} · {post.readTime}
              </p>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-mgrey text-[14px] text-center py-10">No posts in this category yet.</p>
        )}
      </section>
    </>
  )
}
