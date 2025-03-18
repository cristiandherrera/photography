// File: src/app/gallery/page.jsx
"use client";

import { useState, useEffect } from 'react';
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import Link from 'next/link';
import ImageModal from '../../components/ImageModal';

export default function GalleryPage() {
  const [activeCollection, setActiveCollection] = useState('landscapes');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [layout, setLayout] = useState('grid'); // 'grid' or 'masonry'

  // Image transition effect on load
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Collections data
  const collections = [
    { id: 'landscapes', name: 'Landscapes', active: activeCollection === 'landscapes' },
    { id: 'portrait', name: 'Portrait', active: activeCollection === 'portrait' },
    { id: 'street', name: 'Street', active: activeCollection === 'street' },
    { id: 'abstract', name: 'Abstract', active: activeCollection === 'abstract' }
  ];

  // Gallery images data
  const galleryImages = {
    landscapes: [
      {
        url: '/images/images_3_2/public-center-market.jpg',
        alt: 'Public Center Market',
        title: 'Public Center Market',
        description: 'A vibrant scene from a busy public market.',
        aspectRatio: '3/2'
      },
      {
        url: '/images/images_3_2/two-cows.jpg',
        alt: 'Two Cows',
        title: 'Two Cows',
        description: 'A peaceful scene with two cows grazing in a field.',
        aspectRatio: '3/2'
      },
      {
        url: '/images/images_3_2/ampilifier.jpg',
        alt: 'Amplifier',
        title: 'Amplifier',
        description: 'Close-up shot of a vintage amplifier.',
        aspectRatio: '3/2'
      },
      {
        url: '/images/images_3_2/stever.jpg',
        alt: 'Stever',
        title: 'Stever',
        description: 'Portrait of Stever in natural lighting.',
        aspectRatio: '3/2'
      },
      {
        url: '/images/images_3_2/burger.jpg',
        alt: 'Burger',
        title: 'Gourmet Burger',
        description: 'A delicious gourmet burger with all the fixings.',
        aspectRatio: '3/2'
      },
      {
        url: '/images/images_3_2/icemountain.jpg',
        alt: 'Ice Mountain',
        title: 'Ice Mountain',
        description: 'Majestic ice mountain reflecting in still waters.',
        aspectRatio: '3/2'
      },
      {
        url: '/images/images_3_2/pianoman.jpg',
        alt: 'Piano Man',
        title: 'The Piano Man',
        description: 'A musician lost in the moment while playing piano.',
        aspectRatio: '3/2'
      },
      {
        url: '/images/images_3_2/Snapinst.app_426156712_1325117204852802_6119519004358542939_n_1080.jpg',
        alt: 'Landscape Photography',
        title: 'Urban Landscape',
        description: 'A striking urban landscape with dramatic lighting.',
        aspectRatio: '3/2'
      },
      {
        url: '/images/images_3_2/Snapinst.app_428151769_272575689069123_6110790316029107030_n_1080.jpg',
        alt: 'Landscape Photography',
        title: 'Natural Wonder',
        description: 'A breathtaking natural landscape showcasing Earth\'s beauty.',
        aspectRatio: '3/2'
      },
      {
        url: '/images/images_3_2/Snapinst.app_432365210_7509571955764500_1768851970249358687_n_1080.jpg',
        alt: 'Landscape Photography',
        title: 'Serene Waters',
        description: 'Calm waters reflecting the beauty of the surroundings.',
        aspectRatio: '3/2'
      },
      {
        url: '/images/images_3_2/Snapinst.app_448889304_991019372608541_6379230077003844443_n_1080.jpg',
        alt: 'Landscape Photography',
        title: 'Mountain Vista',
        description: 'A panoramic view of mountain ranges at sunset.',
        aspectRatio: '3/2'
      },
      {
        url: '/images/images_3_2/Snapinst.app_450804851_775825777784496_5766909441269219415_n_1080.jpg',
        alt: 'Landscape Photography',
        title: 'Urban Exploration',
        description: 'Discovering hidden gems in the urban landscape.',
        aspectRatio: '3/2'
      }
    ],
    portrait: [
      {
        url: '/images/images_4_5/cowboy.jpg',
        alt: 'Cowboy Portrait',
        title: 'The Cowboy',
        description: 'Portrait of a cowboy with authentic western attire.',
        aspectRatio: '4/5'
      },
      {
        url: '/images/images_4_5/frootloops.jpg',
        alt: 'Froot Loops',
        title: 'Breakfast Colors',
        description: 'Vibrant colors of Froot Loops cereal in a bowl.',
        aspectRatio: '4/5'
      },
      {
        url: '/images/images_4_5/scary-building.jpg',
        alt: 'Scary Building',
        title: 'Abandoned Structure',
        description: 'An eerie abandoned building with a haunting presence.',
        aspectRatio: '4/5'
      },
      {
        url: '/images/images_4_5/orange-bug.jpg',
        alt: 'Orange Bug',
        title: 'Vintage Volkswagen',
        description: 'A classic orange Volkswagen Beetle parked on a street.',
        aspectRatio: '4/5'
      },
      {
        url: '/images/images_4_5/elvis.jpg',
        alt: 'Elvis',
        title: 'Elvis Tribute',
        description: 'A tribute to the King of Rock and Roll.',
        aspectRatio: '4/5'
      },
      {
        url: '/images/images_4_5/offset-starlounge.jpg',
        alt: 'Star Lounge',
        title: 'Star Lounge',
        description: 'The vibrant atmosphere of the Star Lounge at night.',
        aspectRatio: '4/5'
      },
      {
        url: '/images/images_4_5/gir-close-up.jpg',
        alt: 'Close-up Portrait',
        title: 'Intimate Portrait',
        description: 'An intimate close-up portrait capturing raw emotion.',
        aspectRatio: '4/5'
      },
      {
        url: '/images/images_4_5/Snapinst.app_431898761_2202407330107961_3446838607723948196_n_1080.jpg',
        alt: 'Portrait Photography',
        title: 'Character Study',
        description: 'A character study showcasing personality and depth.',
        aspectRatio: '4/5'
      }
    ],
    street: [
      {
        url: '/images/images_4_5/bird-bug.jpg',
        alt: 'Bird Bug',
        title: 'Street Scene',
        description: 'A candid moment captured on a busy street.',
        aspectRatio: '4/5'
      },
      {
        url: '/images/images_4_5/black-comic.jpg',
        alt: 'Black Comic',
        title: 'Urban Expression',
        description: 'Street art expressing urban culture and identity.',
        aspectRatio: '4/5'
      },
      {
        url: '/images/images_3_2/skateboard.jpg',
        alt: 'Skateboard',
        title: 'Skate Culture',
        description: 'A moment frozen in time from skateboarding culture.',
        aspectRatio: '3/2'
      },
      {
        url: '/images/images_3_2/mustache-band.jpg',
        alt: 'Mustache Band',
        title: 'Street Performers',
        description: 'A lively band performing on the streets.',
        aspectRatio: '3/2'
      }
    ],
    abstract: [
      {
        url: '/images/images_4_5/waldo-guy.jpg',
        alt: 'Waldo Guy',
        title: 'Hidden in Plain Sight',
        description: 'An abstract interpretation of the familiar search game.',
        aspectRatio: '4/5'
      },
      {
        url: '/images/images_4_5/blue-bird.jpg',
        alt: 'Blue Bird',
        title: 'Blue Abstraction',
        description: 'Abstract composition featuring shades of blue.',
        aspectRatio: '4/5'
      },
      {
        url: '/images/cave.jpg',
        alt: 'Cave',
        title: 'Cavern Depths',
        description: 'Abstract patterns formed by natural cave formations.',
        aspectRatio: '1/1'
      }
    ]
  };

  // Get current images based on active collection
  const currentImages = galleryImages[activeCollection] || [];

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navigation name="JONATHAN SMITH" />
      
      <div className="flex-grow">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <header className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Photography Gallery</h1>
            <p className="font-serif text-gray-700 max-w-2xl mx-auto">
              Explore my complete collection of photographs across various themes and styles.
            </p>
          </header>

          {/* Layout Toggle and Collection Navigation */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          {/* Collection Navigation */}
            <nav className="mb-6 md:mb-0 w-full md:w-auto">
              <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-8 font-serif text-sm">
              {collections.map((collection) => (
                  <button 
                  key={collection.id}
                    onClick={() => setActiveCollection(collection.id)}
                  className={`px-3 py-2 border-b-2 ${
                    collection.active 
                      ? 'border-black' 
                      : 'border-transparent hover:border-gray-200'
                  } transition-colors`}
                >
                  {collection.name}
                  </button>
              ))}
            </div>
          </nav>
            
            {/* Layout Toggle */}
            <div className="flex items-center space-x-4">
              <span className="font-serif text-sm text-gray-500">View:</span>
              <button 
                onClick={() => setLayout('grid')}
                className={`p-2 ${layout === 'grid' ? 'bg-gray-100' : 'hover:bg-gray-50'} rounded transition-colors`}
                aria-label="Grid view"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </button>
              <button 
                onClick={() => setLayout('masonry')}
                className={`p-2 ${layout === 'masonry' ? 'bg-gray-100' : 'hover:bg-gray-50'} rounded transition-colors`}
                aria-label="Masonry view"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="9"></rect>
                  <rect x="14" y="3" width="7" height="5"></rect>
                  <rect x="14" y="12" width="7" height="9"></rect>
                  <rect x="3" y="16" width="7" height="5"></rect>
                </svg>
              </button>
            </div>
          </div>

          {/* Gallery Component */}
          {layout === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {currentImages.map((image, index) => (
                <div 
                  key={index} 
                  className={`overflow-hidden ${
                    image.aspectRatio === '3/2' ? 'aspect-[3/2]' : 
                    image.aspectRatio === '4/5' ? 'aspect-[4/5]' : 'aspect-square'
                  } group relative cursor-pointer`}
                  onClick={() => openModal(image)}
                >
                  <img 
                    src={image.url} 
                    alt={image.alt} 
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                      isLoaded ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-500`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end justify-start p-4 opacity-0 group-hover:opacity-100">
                    <div className="text-white">
                      <h3 className="font-serif text-lg">{image.title}</h3>
                      <p className="font-serif text-sm">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {currentImages.map((image, index) => (
                <div 
                  key={index} 
                  className="break-inside-avoid overflow-hidden group relative cursor-pointer"
                  onClick={() => openModal(image)}
                >
                  <img 
                    src={image.url} 
                    alt={image.alt} 
                    className={`w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 ${
                      isLoaded ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-500`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end justify-start p-4 opacity-0 group-hover:opacity-100">
                    <div className="text-white">
                      <h3 className="font-serif text-lg">{image.title}</h3>
                      <p className="font-serif text-sm">{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Empty state */}
          {currentImages.length === 0 && (
            <div className="text-center py-20">
              <p className="font-serif text-gray-500 text-lg">No images found in this collection.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage.url}
          title={selectedImage.title}
          description={selectedImage.description}
          onClose={closeModal}
        />
      )}
      
      <Footer />
    </main>
  );
}