// File: components/Navigation.jsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation({ name = "JONATHAN SMITH" }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Detect scroll position to change navigation style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className="fixed top-0 left-0 right-0 z-50 px-5 sm:px-8 py-5 transition-all duration-300 bg-white text-black shadow-md"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link 
            href="/" 
            className="font-serif flex items-baseline"
          >
            <span className="text-xl md:text-2xl tracking-widest">JUSTIN HERRERA</span>
            <span className="ml-2 text-sm tracking-wide"> | Foothill Photography</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2 font-serif text-sm ml-auto mr-0">
            <Link 
              href="/" 
              className={`px-1 py-1 border-b-2 border-black transition-colors`}
            >
              Home
            </Link>
            <Link 
              href="/gallery" 
              className={`px-1 py-1 border-b-2 border-transparent hover:border-gray-200 transition-colors`}
            >
              Gallery
            </Link>
            <Link 
              href="/blog" 
              className={`px-1 py-1 border-b-2 border-transparent hover:border-gray-200 transition-colors`}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className={`px-1 py-1 border-b-2 border-transparent hover:border-gray-200 transition-colors`}
            >
              My Story
            </Link>
            <Link 
              href="https://www.instagram.com/j.herrera_photo/" 
              className={`px-1 py-1 border-b-2 border-transparent hover:border-gray-200 transition-colors`}
            >
              Instagram
            </Link>
            {/* <Link 
              href="https://buymeacoffee.com/" 
              className={`px-1 py-1 border-b-2 border-transparent hover:border-gray-200 transition-colors`}
            >
              Buy me a Coffee
            </Link> */}
            <Link 
              href="/contact" 
              className={`ml-2 px-3 py-1.5 border-2 border-black text-black hover:bg-black hover:text-white rounded-md transition-colors duration-300`}
            >
              Contact
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="relative w-6 h-5">
              <span 
                className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  menuOpen ? 'rotate-45 top-2' : 'top-0'
                }`}
              ></span>
              <span 
                className={`absolute h-0.5 w-6 bg-current top-2 transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span 
                className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${
                  menuOpen ? '-rotate-45 top-2' : 'top-4'
                }`}
              ></span>
            </div>
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-95 z-40 flex items-center justify-center transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col space-y-8 items-center font-serif text-2xl text-white">
          <Link 
            href="/" 
            className="border-b-2 border-white px-3 py-2"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          
          <Link 
            href="/gallery" 
            className="hover:border-b-2 border-transparent hover:border-gray-400 px-3 py-2"
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link 
            href="/blog" 
            className="hover:border-b-2 border-transparent hover:border-gray-400 px-3 py-2"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link 
            href="/contact" 
            className="hover:border-b-2 border-transparent hover:border-gray-400 px-3 py-2"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* This spacer ensures content starts below the fixed navbar */}
      <div className="h-16"></div>
    </>
  );
}