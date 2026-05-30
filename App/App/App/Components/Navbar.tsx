'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Chunga Secondary School</h1>
        <div className="space-x-6">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/notes" className="hover:underline">Notes</Link>
          <Link href="/auth/signin" className="hover:underline">Sign In</Link>
        </div>
      </div>
    </nav>
  );
}
