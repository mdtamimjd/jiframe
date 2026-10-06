 'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function WhyUs() {
  const cardsRef = useRef<HTMLElement[]>([])

  useEffect(() => {
    const animation = gsap.fromTo(
      cardsRef.current,
      { y: 20, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 0.50,
        stagger: 0.07,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: 'top 85%',
          once: true,
        },
      },
    )

    return () => {
      animation.kill()
    }
  }, [])

  const items = [
    { title: 'Personalized approach', description: 'Solutions shaped around your goals, your team, and your customers.' ,bg_color:"bg-green-200" },
    { title: 'Fast, focused delivery', description: 'A clear process helps turn good ideas into real results sooner.',bg_color:"bg-blue-200" },
    { title: 'Quality you can trust', description: 'Thoughtful design and dependable technology in every detail.',bg_color:"bg-orange-200" },
    { title: 'Support that lasts', description: 'A reliable partner ready to help as your business grows.',bg_color:"bg-pink-200" },
  ]

  return (
    <section className="bg-white px-6 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600">Why us</p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">A better way to bring your ideas to life.</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <article
              key={item.title}
              ref={(element) => {
                if (element) cardsRef.current[index] = element
              }}
              className={`rounded-2xl border border-slate-200 p-6 ${item.bg_color}`}
            >
              <span className="mb-8 block text-sm font-semibold text-indigo-600">0{index + 1}</span>
              <h3 className="mb-3 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="text-sm leading-6 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
