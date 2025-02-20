'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="block hover:underline" href="/">[Return Home]</Link>
    </div>
  );
} 