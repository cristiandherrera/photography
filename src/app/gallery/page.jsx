// File: src/app/gallery/page.jsx
"use client";

import Gallery from '../../components/gallery';
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import Link from 'next/link';

export default function GalleryPage() {
  // Sample image data
  const sampleImages = [
    {
      url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      alt: 'Landscape with mountains and lake',
      title: 'Mountain Landscape',
      description: 'A beautiful mountain landscape with a clear blue lake at sunset.'
    },
    {
      url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
      alt: 'Forest scene with sunlight',
      title: 'Morning Forest',
      description: 'Sunlight streaming through trees in a misty morning forest.'
    },
    {
      url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d',
      alt: 'Lake with pine trees',
      title: 'Pine Lake',
      description: 'Pine trees surrounding a serene mountain lake.'
    },
    {
      url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716',
      alt: 'Waterfall in forest',
      title: 'Forest Waterfall',
      description: 'A peaceful waterfall nestled in a lush green forest.'
    },
    {
      url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b',
      alt: 'Mountain landscape',
      title: 'Mountain Range',
      description: 'Majestic mountain range stretching across the horizon.'
    },
    {
      url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
      alt: 'Forest with sunlight',
      title: 'Sunlit Forest',
      description: 'Golden light filtering through a dense forest canopy.'
    }
  ];

  // For a real application, we would have multiple collections
  const collections = [
    { id: 'landscapes', name: 'Landscapes', active: true },
    { id: 'wildlife', name: 'Wildlife', active: false },
    { id: 'urban', name: 'Urban', active: false },
    { id: 'abstract', name: 'Abstract', active: false }
  ];

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navigation name="Your Brother's Name" />
      
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <header className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Photography</h1>
            <p className="font-serif text-gray-700 max-w-2xl mx-auto">
              A collection of beautiful landscape photographs showcasing nature's beauty in its purest form.
            </p>
          </header>

          {/* Collection Navigation */}
          <nav className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 md:gap-8 font-serif text-sm">
              {collections.map((collection) => (
                <Link 
                  key={collection.id}
                  href={`/gallery?collection=${collection.id}`}
                  className={`px-3 py-2 border-b-2 ${
                    collection.active 
                      ? 'border-black' 
                      : 'border-transparent hover:border-gray-200'
                  } transition-colors`}
                >
                  {collection.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Gallery Component */}
          <Gallery images={sampleImages} />
        </div>
      </div>
      
      <Footer />
    </main>
  );
}