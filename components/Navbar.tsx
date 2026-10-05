"use client"
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import gsap from 'gsap'
import { IoPersonCircleOutline } from 'react-icons/io5'

const navLink = [
    {
        path: "/",
        name: "Home"
    },
    {
        path: "/about",
        name: "About"
    },
    {
        path: "/service",
        name: "Service"
    },
    {
        path: "/work-exprience",
        name: "Experience"
    },
    {
        path: "/contact",
        name: "Contact"
    },
]

export default function Navbar() {
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false)
    const headerRef = useRef<HTMLElement>(null)
    const mobileMenuRef = useRef<HTMLDivElement>(null)

    const { data } = useSession()

    useEffect(() => {
        const context = gsap.context(() => {
            gsap.from('.nav-item', {
                y: -10,
                opacity: 0,
                duration: 0.5,
                stagger: 0.08,
                ease: 'power3.out',
            })
        }, headerRef)

        return () => context.revert()
    }, [])

    useEffect(() => {
        const menu = mobileMenuRef.current
        if (!menu) return

        if (menuOpen) {
            gsap.set(menu, { visibility: 'visible' })
            gsap.to(menu, { height: 'auto', opacity: 1, duration: 0.3, ease: 'power2.out' })
        } else {
            gsap.to(menu, {
                height: 0,
                opacity: 0,
                duration: 0.2,
                ease: 'power2.inOut',
                onComplete: () => gsap.set(menu, { visibility: 'hidden' }),
            })
        }
    }, [menuOpen])

    const linkIsActive = (path: string) =>
        path === '/' ? pathname === '/' : pathname === path || pathname.startsWith(`${path}/`);



    return (
        <header ref={headerRef} className="sticky top-0 z-50 border-b border-white/10 bg-pink-500/80 text-white shadow-lg shadow-black/10 backdrop-blur-xl">
            <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
                <Link href="/" className="nav-item text-xl font-bold tracking-tight" onClick={() => setMenuOpen(false)}>
                    <span className="text-cyan-300">J</span>iframe
                </Link>

                <div className="hidden items-center gap-1 md:flex">
                    {navLink.map(({ path, name }) => (
                        <Link
                            key={path}
                            href={path}
                            aria-current={linkIsActive(path) ? 'page' : undefined}
                            className={`nav-item rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 hover:bg-white/10 hover:backdrop-blur-md ${linkIsActive(path) ? 'bg-white/10 text-cyan-300' : 'text-slate-300 hover:text-white'
                                }`}
                        >
                            {name}
                        </Link>
                    ))}
                </div>

                <button
                    type="button"
                    aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                    aria-expanded={menuOpen}
                    className="nav-item flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-200 transition hover:bg-white/10 md:hidden"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="flex w-5 flex-col gap-1.5">
                        <span className={`h-0.5 w-full bg-current transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
                        <span className={`h-0.5 w-full bg-current transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
                        <span className={`h-0.5 w-full bg-current transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
                    </span>
                </button>
                <Link
                    href="/profile"
                    aria-label="Profile"
                    className="nav-item flex h-10 w-10 items-center justify-center overflow-hidden rounded-full text-2xl text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                    {data?.user?.image ? (
                        <img src={data.user.image} alt="Profile" className="h-full w-full object-cover" />
                    ) : (
                        <IoPersonCircleOutline />
                    )}
                </Link>
            </nav>

            <div
                ref={mobileMenuRef}
                aria-hidden={!menuOpen}
                className="invisible h-0 overflow-hidden border-t border-white/10 bg-slate-950/90 px-5 backdrop-blur-xl md:hidden"
            >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-3">
                    {navLink.map(({ path, name }) => (
                        <Link
                            key={path}
                            href={path}
                            aria-current={linkIsActive(path) ? 'page' : undefined}
                            tabIndex={menuOpen ? 0 : -1}
                            onClick={() => setMenuOpen(false)}
                            className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-white/10 hover:backdrop-blur-md ${linkIsActive(path) ? 'bg-white/10 text-cyan-300' : 'text-slate-300 hover:text-white'
                                }`}
                        >
                            {name}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    )
}
