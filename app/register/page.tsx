import { Metadata } from 'next'
import React from 'react'
import RegisterForm from './RegisterForm'


export const metadata: Metadata = {
  title: 'Register',
  description: 'Register page',
}

export default function page() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg-2.jpg')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative z-10 h-screen flex items-center justify-center">
        <RegisterForm/>
      </div>
    </div>
  )
}
