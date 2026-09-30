import { useState } from 'react'
import { DownloadIcon } from '../../components/ui/DownloadIcon'
import { Label } from '../../components/ui/Label'
import { buttonClass } from '../../components/ui/buttonStyles'
import { profile } from '../../content/profile'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { formatMonthYear } from '../../lib/format'

/** Résumé preview that only fetches the file once it has been opened: an embedded PDF on
 *  wide screens, the page-1 image on phones. The download button is always visible. */
export function ResumePanel() {
  const { resume } = profile
  const [opened, setOpened] = useState(false)
  const wide = useMediaQuery('(min-width: 768px)')
  return (
    <section aria-labelledby="resume-title" className="mt-16 md:mt-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Label className="text-[11px]">PDF · Updated {formatMonthYear(resume.updated)}</Label>
          <h2
            id="resume-title"
            className="mt-3 text-[32px] leading-tight font-semibold tracking-[-0.03em] md:text-[40px]"
          >
            Résumé
          </h2>
        </div>
        <a href={resume.pdf} download className={buttonClass('primary')}>
          Download PDF <DownloadIcon />
        </a>
      </div>
      <details
        id="resume"
        className="group mt-6 rounded-[20px] border bg-surface"
        onToggle={(e) => {
          if (e.currentTarget.open) setOpened(true)
        }}
      >
        <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-[20px] px-5 py-3 text-[15px] font-medium marker:hidden md:px-6 [&::-webkit-details-marker]:hidden">
          Preview
          <svg
            viewBox="0 0 12 12"
            aria-hidden="true"
            className="size-3 shrink-0 text-text-3 transition-transform group-open:rotate-180"
          >
            <path
              d="M2.5 4.5 6 8l3.5-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </summary>
        {opened && (
          <div className="border-t p-3 md:p-4">
            {wide ? (
              <object
                data={resume.pdf}
                type="application/pdf"
                aria-label="Résumé PDF"
                className="h-[80vh] w-full rounded-xl"
              >
                <p className="p-4 text-sm text-text-2">
                  This browser can't show the PDF here.{' '}
                  <a href={resume.pdf} download className="underline underline-offset-4">
                    Download it instead
                  </a>
                  .
                </p>
              </object>
            ) : (
              <img
                src={resume.preview}
                alt="First page of the résumé"
                loading="lazy"
                className="w-full rounded-xl"
              />
            )}
          </div>
        )}
      </details>
    </section>
  )
}
