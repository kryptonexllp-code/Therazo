import { SPF_DOCS, SPF_DOCS_COPY } from '@/content/spfDocs'

// "Test documentation" on the Daily Shield page, driven by content/spfDocs.ts.
export default function SpfDocsBlock() {
  return (
    <div id="test-documentation" className="max-w-3xl mx-auto border border-cardline bg-white p-6 scroll-mt-32">
      <h2 className="font-bold text-navy text-[16px] mb-2">{SPF_DOCS_COPY.heading}</h2>
      {SPF_DOCS.status === 'published' ? (
        <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 text-[13px]">
          <dt className="text-mgrey">Document</dt>
          <dd className="text-navy font-medium">{SPF_DOCS.title}</dd>
          <dt className="text-mgrey">Laboratory</dt>
          <dd className="text-dgrey">{SPF_DOCS.laboratory}</dd>
          <dt className="text-mgrey">Test standard</dt>
          <dd className="text-dgrey">{SPF_DOCS.standard}</dd>
          <dt className="text-mgrey">Date</dt>
          <dd className="text-dgrey">{SPF_DOCS.date}</dd>
          <dd className="col-span-2 mt-3">
            <a href={SPF_DOCS.pdf} className="text-navy font-medium underline underline-offset-4">
              Download the report (PDF) →
            </a>
          </dd>
        </dl>
      ) : (
        <p className="text-dgrey text-[14px] leading-[1.6]">{SPF_DOCS_COPY.notPublished}</p>
      )}
    </div>
  )
}
