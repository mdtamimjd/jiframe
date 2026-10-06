import React from 'react'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950 text-slate-300">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(148,163,184,.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,.25) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'linear-gradient(to bottom, black, transparent 90%)',
        }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="/" className="text-2xl font-semibold tracking-tight text-white">jiframe</a>
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
            Thoughtful digital experiences, built to make the web a little better.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-sm hover:text-white">GitHub</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-sm hover:text-white">LinkedIn</a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-sm hover:text-white">Instagram</a>
          </div>
        </div>

        <nav aria-label="Footer pages">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Pages</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/blog" className="hover:text-white">Blog</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </nav>

        <nav aria-label="Footer resources">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">More</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a href="/faq" className="hover:text-white">FAQs</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy policy</a></li>
            <li><a href="/terms" className="hover:text-white">Terms of service</a></li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a href="mailto:hello@jiframe.com" className="hover:text-white">contact@jiframe.com</a></li>
            <li><a href="tel:+15550102048" className="hover:text-white">01743078670</a></li>
            <li>
              <a href="https://maps.app.goo.gl/ZUvQU4RNLEVMVrSU7" target="_blank" rel="noreferrer" className="hover:text-white">
                Sector 15, Uttara , Dhaka, Bangladesh
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 px-6 py-6 text-xs text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} jiframe. All rights reserved.</p>
        <p>Made with care for the web.</p>
      </div>
    </footer>
  )
}
