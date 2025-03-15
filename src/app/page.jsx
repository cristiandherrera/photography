// File: src/app/page.jsx
"use client";

import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navigation name="Your Brother's Name" />
      
      <div className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center my-16">
            <h1 className="text-5xl md:text-6xl font-serif mb-6">Capturing Life's Moments</h1>
            <p className="font-serif text-gray-700 max-w-3xl mx-auto text-lg mb-8">
              A journey through landscapes, nature, and beautiful scenes through photography.
            </p>
            <Link 
              href="/gallery" 
              className="inline-block px-8 py-3 border border-black font-serif hover:bg-black hover:text-white transition-colors"
            >
              View Gallery
            </Link>
          </div>
          
          {/* Featured images section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            <div className="aspect-[4/3] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                alt="Featured landscape" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-serif mb-4">Latest Work</h2>
              <p className="font-serif text-gray-700 mb-6">
                Exploring the beauty of natural landscapes and capturing the essence of our world through a minimalist lens.
              </p>
              <Link 
                href="/gallery" 
                className="font-serif hover:underline"
              >
                Explore all galleries →
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}