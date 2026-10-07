'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const navLink = [
    { name: "overview", path: "/admin" },
    { name: "category", path: "/admin/category" },
    { name: "services", path: "/admin/services" },
    { name: "works", path: "/admin/works" },
    { name: "booking", path: "/admin/booking" },
    { name: "social-media", path: "/admin/social-media" },
    { name: "setting", path: "/admin/setting" },
]

export default function AdminNavbar() {
  const pathname = usePathname()

  return (
    <div>
      <div className="text-center mb-5">
        <h2>JIFRAME</h2>
        <h1>Admin Dashboard</h1>
      </div>
      <nav className='flex flex-col gap-5 text-center'>
          {
            navLink.map((e) => {
              const isActive = e.path === '/admin'
                ? pathname === e.path
                : pathname === e.path || pathname.startsWith(`${e.path}/`)

              return (
                <Link
                  href={e.path}
                  key={e.name}
                  className={`border rounded-r-md py-2 px-4 ${isActive ? 'bg-pink-500 text-white' : ''}`}
                >
                  {e.name}
                </Link>
              )
            })
          }
      </nav>
    </div>
  )
}
