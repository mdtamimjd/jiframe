"use client"

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const workData = [
  {
    "id": 1,
    "title": "Cinematic Royal Wedding Highlight Film",
    "description": "Full multi-day wedding film covering Holud, Wedding, and Reception with cinematic color grading and drone aerials.",
    "category": "Wedding",
    "image": "https://images.unsplash.com/photo-1519741497674-611481863552",
    "video": "https://www.youtube.com/watch?v=sample1"
  },
  {
    "id": 2,
    "title": "Trendy Instagram Reel for Urban Fashion Brand",
    "description": "Fast-paced 30-second vertical video shoot focused on street style aesthetics in Banani, optimized for social media engagement.",
    "category": "Reels & Shorts",
    "image": "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d",
    "video": "https://www.youtube.com/watch?v=sample2"
  },
  {
    "id": 3,
    "title": "Sunset Pre-Wedding Couple Portraits",
    "description": "Romantic outdoor shoot captured during golden hour around Dhanmondi Lake and Purbachal expressways.",
    "category": "Pre-Wedding",
    "image": "https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
    "video": "https://www.youtube.com/watch?v=sample3"
  },
  {
    "id": 4,
    "title": "Corporate Annual Gala & Awards Night",
    "description": "High-profile corporate event coverage including stage photography, executive speeches, and a 3-minute recap film.",
    "category": "Corporate Event",
    "image": "https://images.unsplash.com/photo-1511578314322-379afb476865",
    "video": "https://www.youtube.com/watch?v=sample4"
  },
  {
    "id": 5,
    "title": "Outdoor Birthday Party & Candid Moments",
    "description": "Vibrant candid photography and highlight teaser reel for a luxury birthday celebration in Gulshan.",
    "category": "Private Events",
    "image": "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
    "video": "https://www.youtube.com/watch?v=sample5"
  },
  {
    "id": 6,
    "title": "Heritage Architectural Travel Vlog",
    "description": "4K 60fps cinematic video showcasing Mughal architecture at Lalbagh Fort and Ahsan Manzil in Old Dhaka.",
    "category": "Commercial & Travel",
    "image": "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
    "video": "https://www.youtube.com/watch?v=sample6"
  }
]

export default function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    if (!section) return

    const cards = gsap.utils.toArray<HTMLElement>(
      section.querySelectorAll('.work-card'),
    )
    const context = gsap.context(() => {
      gsap.set(cards.slice(1), { yPercent: 110, autoAlpha: 0 })

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${window.innerHeight * (cards.length - 1)}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })

      cards.slice(1).forEach((card, index) => {
        const position = index
        timeline.to(
          cards[index],
          { yPercent: -12, scale: 0.96, autoAlpha: 0.45, duration: 1 },
          position,
        )
        timeline.fromTo(
          card,
          { yPercent: 110, autoAlpha: 0 },
          { yPercent: 0, autoAlpha: 1, duration: 1 },
          position,
        )
      })
    }, section)

    return () => context.revert()
  }, [])

  return (
    <section className="work-section" ref={sectionRef} aria-labelledby="work-title">
      <style>{`
        .work-section {
          box-sizing: border-box;
          min-height: 100vh;
          overflow: hidden;
          padding: clamp(2rem, 6vw, 5.5rem) clamp(1.25rem, 7vw, 7rem);
          color: #f7f4ef;
          background: #11110f;
          font-family: inherit;
        }
        .work-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 1rem;
          margin: 0 auto 2rem;
          max-width: 1200px;
        }
        .work-eyebrow {
          margin: 0 0 .65rem;
          color: #c9a879;
          font-size: .75rem;
          font-weight: 700;
          letter-spacing: .2em;
          text-transform: uppercase;
        }
        .work-heading h2 {
          margin: 0;
          font-size: clamp(2.4rem, 6vw, 5rem);
          letter-spacing: -.06em;
          line-height: .95;
        }
        .work-hint {
          margin: 0 0 .25rem;
          color: #aaa7a0;
          font-size: .85rem;
        }
        .work-stage {
          position: relative;
          width: min(100%, 1200px);
          height: min(62vh, 620px);
          min-height: 390px;
          margin: 0 auto;
          overflow: hidden;
          border-radius: 18px;
          background: #25231f;
        }
        .work-card {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: end;
          padding: clamp(1.5rem, 5vw, 4rem);
          background-position: center;
          background-size: cover;
          will-change: transform, opacity;
        }
        .work-card::before {
          position: absolute;
          inset: 0;
          content: '';
          background: linear-gradient(90deg, rgba(0,0,0,.74), rgba(0,0,0,.08)),
            linear-gradient(0deg, rgba(0,0,0,.65), transparent 70%);
        }
        .work-card-content {
          position: relative;
          z-index: 1;
          max-width: 650px;
        }
        .work-card-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
          color: #e1c69f;
          font-size: .75rem;
          font-weight: 700;
          letter-spacing: .15em;
          text-transform: uppercase;
        }
        .work-card h3 {
          margin: 0 0 .8rem;
          font-size: clamp(1.8rem, 4.3vw, 3.8rem);
          letter-spacing: -.045em;
          line-height: 1.02;
        }
        .work-card p {
          max-width: 560px;
          margin: 0;
          color: rgba(255,255,255,.82);
          font-size: clamp(.9rem, 1.4vw, 1.05rem);
          line-height: 1.6;
        }
        @media (max-width: 600px) {
          .work-section { padding-top: 3rem; }
          .work-heading { align-items: start; flex-direction: column; }
          .work-stage { height: 62vh; min-height: 360px; }
          .work-card { padding: 1.4rem; }
        }
        @media (prefers-reduced-motion: reduce) {
          .work-card { will-change: auto; }
        }
      `}</style>

      <div className="work-heading">
        <div>
          <p className="work-eyebrow">Selected projects</p>
          <h2 id="work-title">Stories in motion.</h2>
        </div>
        <p className="work-hint">Scroll to explore ↓</p>
      </div>

      <div className="work-stage">
        {workData.map((work, index) => (
          <article
            className="work-card"
            key={work.id}
            style={{ backgroundImage: `url('${work.image}?auto=format&fit=crop&w=1800&q=85')` }}
            aria-label={`${work.title}, ${work.category}`}
          >
            <div className="work-card-content">
              <div className="work-card-meta">
                <span>{String(index + 1).padStart(2, '0')} / {String(workData.length).padStart(2, '0')}</span>
                <span>{work.category}</span>
              </div>
              <h3>{work.title}</h3>
              <p>{work.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
