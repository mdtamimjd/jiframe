'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const faqs = [
  {
    question: 'What is Jiframe?',
    answer:
      'Jiframe is a platform designed to help people organize, share, and manage their digital work in a simple and efficient way.',
  },
  {
    question: 'How does it work?',
    answer:
      'You can create, edit, and track content or workflow items from one centralized place, making collaboration and updates much easier.',
  },
  {
    question: 'Is it suitable for teams?',
    answer:
      'Yes. Jiframe is built to support team collaboration, structured communication, and cleaner workflows across projects and tasks.',
  },
  {
    question: 'Can I use it for personal projects?',
    answer:
      'Absolutely. It works well for both individual productivity and team-based project management, depending on your needs.',
  },
  {
    question: 'Do I need technical skills to get started?',
    answer:
      'No. The interface is designed to be straightforward and user-friendly, so you can start quickly without a technical background.',
  },
]

export default function FAQSection() {
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const animation = gsap.to(headingRef.current, {
      backgroundPosition: '200% 50%',
      duration: 4,
      ease: 'none',
      repeat: -1,
      yoyo: true,
      
    })

    return () => {
      animation.kill()
    }
  }, [])

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-10 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
          FAQ
        </p>
        <h2
          ref={headingRef}
          className="bg-linear-to-r from-sky-500 via-violet-500 to-pink-500 bg-size-[200%_100%] bg-clip-text text-3xl font-bold text-transparent"
        >
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-800">{faq.question}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
