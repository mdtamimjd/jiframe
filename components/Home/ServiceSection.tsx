"use client"
import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ServiceData = [
  {
    "id": 1,
    "title": "Social Media Reels & Content Creator Package",
    "description": "On-site vertical video recording in 4K, trend-focused content direction, rapid editing, dynamic text animation, trending music overlays, and color grading. Delivery within 24–48 hours.",
    "image": "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d",
    "category": "Video Production",
    "subcategory": "Short-Form Video",
    "childcategory": "Instagram Reels & TikTok",
    "budget": {
      "min": 8000,
      "max": 25000,
      "currency": "BDT",
      "billing_type": "Per Event / Project"
    }
  },
  {
    "id": 2,
    "title": "Standard Wedding Combo Package",
    "description": "Single event coverage (5–6 hours) featuring 1 Senior Photographer & 1 Cinematographer. Includes 100+ specially retouched photos, 3-5 minute trailer, full event video, and 1 Instagram reel.",
    "image": "https://images.unsplash.com/photo-1519741497674-611481863552",
    "category": "Wedding Services",
    "subcategory": "Single Event Coverage",
    "childcategory": "Photo & Cinematography Combo",
    "budget": {
      "min": 18000,
      "max": 45000,
      "currency": "BDT",
      "billing_type": "Fixed Event Package"
    }
  },
  {
    "id": 3,
    "title": "Signature Multi-Day Wedding & Drone Production",
    "description": "Complete multi-event coverage (Holud, Wedding & Reception). Core/Chief photographer, multiple associate teams, aerial drone coverage, premium photobook album, full films, and 3 custom reels.",
    "image": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
    "category": "Wedding Services",
    "subcategory": "Full Wedding Production",
    "childcategory": "Multi-Day & Drone Coverage",
    "budget": {
      "min": 80000,
      "max": 250000,
      "currency": "BDT",
      "billing_type": "Fixed Event Package"
    }
  },
  {
    "id": 4,
    "title": "Corporate Event & Conference Coverage",
    "description": "Professional team setup for corporate summits, product launches, or annual galas. Includes candid attendee shots, executive stage highlights, and a polished 2-3 minute event highlight video.",
    "image": "https://images.unsplash.com/photo-1511578314322-379afb476865",
    "category": "Event Coverage",
    "subcategory": "Corporate Events",
    "childcategory": "Conferences & Launches",
    "budget": {
      "min": 25000,
      "max": 75000,
      "currency": "BDT",
      "billing_type": "Per Day"
    }
  },
  {
    "id": 5,
    "title": "Birthday, Anniversary & Private Party Shoot",
    "description": "4 to 5 hours of candid photography and highlight videography for birthday celebrations, anniversaries, or private family gatherings. All processed high-res soft copies delivered digitally.",
    "image": "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
    "category": "Event Coverage",
    "subcategory": "Private Celebrations",
    "childcategory": "Birthdays & Parties",
    "budget": {
      "min": 10000,
      "max": 30000,
      "currency": "BDT",
      "billing_type": "Per Event"
    }
  },
  {
    "id": 6,
    "title": "Pre/Post-Wedding & Outdoor Couple Session",
    "description": "3-hour exclusive outdoor couple session in scenic locations. Includes art direction, professional lighting setup, 35+ retouched high-res photos, and a 60-second teaser reel.",
    "image": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
    "category": "Portrait & Commercial",
    "subcategory": "Couple Shoots",
    "childcategory": "Pre-Wedding Portraits",
    "budget": {
      "min": 12000,
      "max": 35000,
      "currency": "BDT",
      "billing_type": "Per Session"
    }
  }
]

export default function ServiceSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const context = gsap.context(() => {
      const getTravelDistance = () => Math.max(0, track.scrollWidth - section.clientWidth)

      gsap.to(track, {
        x: () => -getTravelDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getTravelDistance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })
    }, section)

    return () => context.revert()
  }, [])

  return (
    <section ref={sectionRef} className='flex min-h-screen flex-col justify-center overflow-hidden bg-pink-300/60 py-10 text-white'>
      <div className='mb-8 flex items-end justify-between px-6 md:px-12'>
        <div>
          <p className='mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-600'>What we do</p>
          <h2 className='text-3xl font-bold text-blue-500 md:text-5xl'>Our Services</h2>
        </div>
        <p className='hidden text-sm text-slate-400 sm:block'>Scroll to explore →</p>
      </div>

      <div className='overflow-visible'>
        <div ref={trackRef} className='flex w-max'>
          {ServiceData.map((service) => (
            <article key={service.id} className='w-[50vw] min-w-[320px] shrink-0 px-3 md:px-5'>
              <div className='group flex h-[62vh] min-h-[430] flex-col overflow-hidden rounded-2xl border border-white/10 bg-pink-900/60 shadow-xl'>
                <div className='relative h-1/2 shrink-0 overflow-hidden'>
                  <img src={service.image} alt={service.title} className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105' />
                  <span className='absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium backdrop-blur'>
                    {service.category}
                  </span>
                </div>
                <div className='flex min-h-0 flex-1 flex-col p-4 md:p-6'>
                  <p className='mb-2 text-xs uppercase tracking-wider text-amber-400'>{service.subcategory}</p>
                  <h3 className='mb-2 text-lg font-bold md:text-2xl'>{service.title}</h3>
                  <p className='line-clamp-3 text-sm leading-relaxed text-blue-200'>{service.description}</p>
                  <div className='mt-auto flex items-end justify-between gap-3 pt-4'>
                    <span className='text-xs text-blue-300'>{service.budget.billing_type}</span>
                    <span className='whitespace-nowrap text-sm font-semibold md:text-base'>
                      ৳{service.budget.min.toLocaleString()} – ৳{service.budget.max.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
