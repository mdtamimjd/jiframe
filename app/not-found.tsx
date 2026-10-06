'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function NotFound() {
  const rootRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLParagraphElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const actionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        badgeRef.current,
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power3.out' }
      )

      gsap.fromTo(
        headingRef.current,
        { autoAlpha: 0, y: 32, skewY: 2 },
        { autoAlpha: 1, y: 0, skewY: 0, duration: 0.9, delay: 0.15, ease: 'power3.out' }
      )

      gsap.fromTo(
        textRef.current,
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, y: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' }
      )

      const actionItems = Array.from(actionsRef.current?.children ?? [])
      gsap.fromTo(
        actionItems,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.8, delay: 0.45, stagger: 0.12, ease: 'back.out(1.7)' }
      )
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <main className='flex min-h-screen items-center justify-center bg-linear-to-br from-pink-50 via-white to-rose-100 px-6 py-12 text-slate-900'>
      <div
        ref={rootRef}
        className='relative w-full max-w-xl overflow-hidden rounded-2xl border border-pink-200 bg-white/90 p-8 shadow-2xl shadow-pink-200/60 backdrop-blur-sm sm:p-12'
      >
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,113,133,0.14),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.16),transparent_42%)]' />

        <div className='relative z-10 text-center'>
          <p ref={badgeRef} className='text-sm font-semibold uppercase tracking-[0.35em] text-pink-500'>404 Error</p>
          <h1 ref={headingRef} className='mt-6 text-5xl font-black tracking-tight text-slate-900 sm:text-6xl'>
            Page not found
          </h1>
          <p ref={textRef} className='mt-4 text-base text-slate-600 sm:text-lg'>
            The page you were looking for doesn&apos;t exist or may have been moved.
          </p>

          <div ref={actionsRef} className='mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <Link
              href='/'
              className='inline-flex items-center justify-center rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-pink-400'
            >
              Go home
            </Link>

            <button
              type='button'
              onClick={() => window.history.back()}
              className='inline-flex items-center justify-center rounded-full border border-pink-200 bg-white px-6 py-3 text-sm font-semibold text-pink-600 transition hover:border-pink-300 hover:bg-pink-50'
            >
              Go back
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}