'use client';
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 max-w-2xl mx-auto space-y-8">

      <div className="w-48 h-48 relative">
        <Image
          src="/catenary-labs-site/logo.svg"
          alt="CatenaryLabs Logo"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="space-y-6 w-96">
        <p className="text-xs">
          CatenaryLabs is a research-driven company building for the decentralised economy. 
          We build products that enable efficient and transparent management layer for the 
          decentralised economy. We have deep experience building in DeFi, L2 and 
          decentralised infrastructure and services.
        </p>

        {/* Links Section */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold mb-4">Links:</h2>
          <div className="space-y-2">
            <Link href="https://research.catenarylabs.com/" className="block hover:underline">
              [Research]
            </Link>
            <Link href="https://x.com/catenarylabs" className="block hover:underline">
              [Twitter]
            </Link>
            <Link href="https://github.com/catenarylabs/" className="block hover:underline">
              [Github]
            </Link>
            <Link href="https://operatoreconomy.com" className="block hover:underline">
              [Operator Economy]
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <p className="font-mono">contact@catenarylabs.com</p>
        </div>
      </div>
    </main>
  )
}