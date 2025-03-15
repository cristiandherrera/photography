// File: components/Navigation.jsx
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation({ name = "Your Brother's Name" }) {
  const pathname = usePathname();
  
  const isActive = (path) => {
    return pathname === path ? 'opacity-100' : 'opacity-70 hover:opacity-100';
  };

  return (
    <nav className="py-6 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <Link href="/" className="font-serif text-xl">
            {name}
          </Link>
        </div>
        
        <div className="flex space-x-6 sm:space-x-8 font-serif text-sm">
          <Link href="/gallery" className={`transition-opacity ${isActive('/gallery')}`}>
            Gallery
          </Link>
          <Link href="/blog" className={`transition-opacity ${isActive('/blog')}`}>
            Blog
          </Link>
          <Link href="/instagram" className={`transition-opacity ${isActive('/instagram')}`}>
            Instagram
          </Link>
          <Link href="/contact" className={`transition-opacity ${isActive('/contact')}`}>
            Contact
          </Link>
          <Link href="/buy-me-a-coffee" className={`transition-opacity ${isActive('/buy-me-a-coffee')}`}>
            Buy Me a Coffee
          </Link>
        </div>
      </div>
    </nav>
  );
}