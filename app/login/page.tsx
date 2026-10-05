import { Metadata } from 'next'
import React from 'react'
import LoginForm from './LoginForm'


export const metadata: Metadata = {
  title: 'Login',
  description: 'Login page',
}

export default function page() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg-1.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative z-10 h-screen flex items-center justify-center">
        <LoginForm />
      </div>
    </div>
  )
}
