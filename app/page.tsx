'use client';
import Image from 'next/image'
// import Link from 'next/link'

const DotBackground = () => (
  <div className="fixed inset-0 -z-10">
    <svg className="w-full h-full opacity-5" width="100%" height="100%">
      <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1" fill="currentColor" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 max-w-2xl mx-auto space-y-8">
      <DotBackground />
      
      <div className="w-48 h-48 relative">
        <Image
          src="/logo.svg"
          alt="CatenaryLabs Logo"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="space-y-6 w-96">
        <p className="text-xs">
          Catenary Industries is building applied intelligence for critical industries like mining, energy, agriculture, manufacturing e.t.c.
        </p>
        <p className="text-xs">Our mission is to increase productivity of critical industries in the global south.</p>
        <p className="text-x">We have deep experience in AI, financial services and robotics.</p>
        <div className="mt-8">
          <p className="font-mono">Reach Out: contact@catenarylabs.com</p>
        </div>
      </div>
    </main>
  )
}