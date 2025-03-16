// File: src/app/page.jsx
"use client";

import { useState, useEffect } from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import Link from 'next/link';
import ImageModal from '../components/ImageModal';
import MagazineSpread from '../components/MagazineSpread';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('landscape');
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Image transition effect on load
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navigation name="JONATHAN SMITH" />
      
      {/* Magazine Spread Component */}
      <MagazineSpread />
      
      {/* Portfolio Preview Grid - Large Gallery */}
      <div className="py-8 bg-gray-50">
        <div className="max-w-[90rem] mx-auto px-2">
          <div className="text-center mb-8">
          <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-4">
            <div className="flex-grow h-px bg-gray-200"></div>
            <div className="mx-6">
              <div className="font-serif text-gray-400 text-sm tracking-widest px-4">PORTFOLIO SELECTIONS</div>
            </div>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>
        </div>
            <h2 className="text-4xl font-serif mb-6">
              Visual Stories
            </h2>
            
            {/* Filter Tabs */}
            <div className="flex justify-center gap-8 mb-8">
              <button 
                onClick={() => setActiveTab('landscape')}
                className={`font-serif text-lg pb-2 border-b-2 transition-colors duration-300 ${
                  activeTab === 'landscape' 
                    ? 'border-black text-black' 
                    : 'border-transparent text-gray-500 hover:text-black'
                }`}
              >
                Landscape (3:2)
              </button>
              <button 
                onClick={() => setActiveTab('portrait')}
                className={`font-serif text-lg pb-2 border-b-2 transition-colors duration-300 ${
                  activeTab === 'portrait' 
                    ? 'border-black text-black' 
                    : 'border-transparent text-gray-500 hover:text-black'
                }`}
              >
                Portrait (4:5)
              </button>
            </div>
          </div>
          
          {/* Gallery grid with dynamic aspect ratio based on active tab */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ${
            activeTab === 'portrait' ? 'hidden' : 'block'
          }`}>
            {/* 3:2 Images */}
            {/* 1st row*/}
            <div className="aspect-[3/2] overflow-hidden">
              <img 
                src="/images/images_3_2/public-center-market.jpg" 
                alt="Public Center Market" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_3_2/public-center-market.jpg')}
                loading="lazy"
              />
            </div>
            
            <div className="aspect-[3/2] overflow-hidden">
              <img 
                src="/images/images_3_2/two-cows.jpg" 
                alt="Two Cows" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_3_2/two-cows.jpg')}
                loading="lazy"
              />
            </div>
            
            <div className="aspect-[3/2] overflow-hidden">
              <img 
                src="/images/images_3_2/ampilifier.jpg" 
                alt="Amplifier" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_3_2/ampilifier.jpg')}
                loading="lazy"
              />
            </div>
            
            {/* 2nd row*/}
            <div className="aspect-[3/2] overflow-hidden">
              <img 
                src="/images/images_3_2/stever.jpg" 
                alt="Stever" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_3_2/stever.jpg')}
                loading="lazy"
              />
            </div>
            
            <div className="aspect-[3/2] overflow-hidden">
              <img 
                src="/images/images_3_2/burger.jpg" 
                alt="Burger" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_3_2/burger.jpg')}
                loading="lazy"
              />
            </div>
            
            <div className="aspect-[3/2] overflow-hidden">
              <img 
                src="/images/images_3_2/icemountain.jpg" 
                alt="Photography" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_3_2/icemountain.jpg')}
                loading="lazy"
              />
            </div>
            
            {/* 3rd row*/}
            <div className="aspect-[3/2] overflow-hidden">
              <img 
                src="/images/images_3_2/Snapinst.app_426156712_1325117204852802_6119519004358542939_n_1080.jpg" 
                alt="Photography" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_3_2/Snapinst.app_426156712_1325117204852802_6119519004358542939_n_1080.jpg')}
                loading="lazy"
              />
            </div>
            
            <div className="aspect-[3/2] overflow-hidden">
              <img 
                src="/images/images_3_2/Snapinst.app_428151769_272575689069123_6110790316029107030_n_1080.jpg" 
                alt="Photography" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_3_2/Snapinst.app_428151769_272575689069123_6110790316029107030_n_1080.jpg')}
                loading="lazy"
              />
            </div>
            
            <div className="aspect-[3/2] overflow-hidden">
              <img 
                src="/images/images_3_2/Snapinst.app_432365210_7509571955764500_1768851970249358687_n_1080.jpg" 
                alt="Photography" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_3_2/Snapinst.app_432365210_7509571955764500_1768851970249358687_n_1080.jpg')}
                loading="lazy"
              />
            </div>
            
            {/* 4th row*/}
            <div className="aspect-[3/2] overflow-hidden">
              <img 
                src="/images/images_3_2/pianoman.jpg" 
                alt="Photography" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_3_2/pianoman.jpg')}
                loading="lazy"
              />
            </div>
            
            <div className="aspect-[3/2] overflow-hidden">
              <img 
                src="/images/images_3_2/Snapinst.app_448889304_991019372608541_6379230077003844443_n_1080.jpg" 
                alt="Photography" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_3_2/Snapinst.app_448889304_991019372608541_6379230077003844443_n_1080.jpg')}
                loading="lazy"
              />
            </div>
            
            <div className="aspect-[3/2] overflow-hidden">
              <img 
                src="/images/images_3_2/Snapinst.app_450804851_775825777784496_5766909441269219415_n_1080.jpg" 
                alt="Photography" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_3_2/Snapinst.app_450804851_775825777784496_5766909441269219415_n_1080.jpg')}
                loading="lazy"
              />
            </div>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ${
            activeTab === 'landscape' ? 'hidden' : 'block'
          }`}>

            {/* 4:5 Images -----------------------------------------------------------------------------------*/}
            {/* 1st row*/}
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="/images/images_4_5/cowboy.jpg" 
                alt="Scary Bird" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_4_5/cowboy.jpg')}
                loading="lazy"
              />
            </div>

            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="/images/images_4_5/frootloops.jpg" 
                alt="Scary Bird" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_4_5/frootloops.jpg')}
                loading="lazy"
              />
            </div>
            
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="/images/images_4_5/scary-building.jpg" 
                alt="Scary Building" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_4_5/scary-building.jpg')}
                loading="lazy"
              />
            </div>
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="/images/images_4_5/orange-bug.jpg" 
                alt="Portrait Photography" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_4_5/orange-bug.jpg')}
                loading="lazy"
              />
            </div>
            
            {/* 2nd row*/}     
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="/images/images_4_5/elvis.jpg" 
                alt="Portrait Photography" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_4_5/elvis.jpg')}
                loading="lazy"
              />
            </div>       
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="/images/images_4_5/offset-starlounge.jpg" 
                alt="Portrait Photography" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_4_5/offset-starlounge.jpg')}
                loading="lazy"
              />
            </div>
            
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="/images/images_4_5/gir-close-up.jpg" 
                alt="Portrait Photography" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_4_5/gir-close-up.jpg')}
                loading="lazy"
              />
            </div>
          
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="/images/images_4_5/Snapinst.app_431898761_2202407330107961_3446838607723948196_n_1080.jpg" 
                alt="Portrait Photography" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_4_5/Snapinst.app_431898761_2202407330107961_3446838607723948196_n_1080.jpg')}
                loading="lazy"
              />
            </div>

            {/* 3rd row*/}
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="/images/images_4_5/bird-bug.jpg" 
                alt="Portrait Photography" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_4_5/bird-bug.jpg')}
                loading="lazy"
              />
            </div>
            
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="/images/images_4_5/black-comic.jpg" 
                alt="Portrait Photography" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_4_5/black-comic.jpg')}
                loading="lazy"
              />
            </div>
            
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="/images/images_4_5/waldo-guy.jpg" 
                alt="Portrait Photography" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_4_5/waldo-guy.jpg')}
                loading="lazy"
              />
            </div>
            
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="/images/images_4_5/blue-bird.jpg" 
                alt="Portrait Photography" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_4_5/blue-bird.jpg')}
                loading="lazy"
              />
            </div>
          </div>
          
          
          <div className="text-center mt-12">
            <Link 
              href="/gallery" 
              className="inline-block px-10 py-3 border border-black font-serif text-lg hover:bg-black hover:text-white transition-colors duration-300"
            >
              Explore Full Gallery
            </Link>
          </div>
        </div>
      </div>
      
      {/* Visual separator between gallery and blog section */}
      <div className="py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="flex-grow h-px bg-gray-200"></div>
            <div className="mx-6">
              <div className="font-serif text-gray-400 text-sm tracking-widest px-4">STORIES</div>
            </div>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>
        </div>
        
        {/* Centered Latest Blog heading */}
        <div className="text-center mt-2">
          <h2 className="text-4xl font-serif">
            Latest Blog
          </h2>
        </div>
      </div>
      
      {/* Split Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100">
        <div className="bg-black text-white p-16 md:p-24 flex flex-col justify-center">
          <span className="text-sm font-serif uppercase tracking-widest mb-6">Latest Post</span>
          <h2 className="text-3xl md:text-4xl font-serif mb-8">
            Behind the Lens: Capturing the Perfect Moment
          </h2>
          <p className="font-serif mb-8">
            An in-depth look at the art of patience and preparation in landscape photography. Learn about my process and philosophy in the latest blog post.
          </p>
          <Link 
            href="/blog" 
            className="self-start font-serif border-b-2 border-white pb-1 text-lg hover:border-gray-400 transition-colors duration-300"
          >
            Read on the Blog
          </Link>
        </div>
        
        <div className="relative">
          <img 
            src="/images/images_3_2/Snapinst.app_429902249_716149860663856_7262378799388044302_n_1080.jpg" 
            alt="Photography equipment" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      
      {/* About Me Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
          <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-4">
            <div className="flex-grow h-px bg-gray-200"></div>
            <div className="mx-6">
              <div className="font-serif text-gray-400 text-sm tracking-widest px-4">ABOUT ME</div>
            </div>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>
        </div>
            <h2 className="text-4xl font-serif mb-8">
              The Person Behind the Lens
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square md:aspect-auto overflow-hidden">
              <img 
                src="/justin.jpg" 
                alt="Jonathan Smith - Photographer" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <p className="font-serif text-lg mb-6 text-gray-700">
                I'm Justin Herrera, a photographer with a passion for capturing the extraordinary in everyday moments. With over a decade of experience behind the lens, I've developed a style that blends technical precision with artistic vision.
              </p>
              <p className="font-serif text-lg mb-8 text-gray-700">
                Whether I'm shooting landscapes, portraits, or street photography, I strive to tell authentic stories through my images. My work has been featured in various publications and exhibitions across the country.
              </p>
              <Link 
                href="/about" 
                className="self-start inline-block px-10 py-3 border border-black font-serif text-lg hover:bg-black hover:text-white transition-colors duration-300"
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Instagram Teaser */}
      <div className="pb-24 pt-12 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-16">
          <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-4">
            <div className="flex-grow h-px bg-gray-200"></div>
            <div className="mx-6">
              <div className="font-serif text-gray-400 text-sm tracking-widest px-4">FOLLOW ALONG</div>
            </div>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>
        </div>
            <h2 className="text-4xl font-serif mb-6">
              Join the Journey
            </h2>
            <p className="font-serif text-gray-700 max-w-xl mx-auto">
              Follow my day-to-day adventures and behind-the-scenes moments on Instagram
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-1">
            <div className="aspect-square overflow-hidden">
              <img 
                src="/images/images_3_2/mustache-band.jpg" 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img 
                src="/images/Snapinst.app_467524756_413022545081645_6074294499607920813_n_1080.jpg" 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img 
                src="/images/cave.jpg" 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img 
                src="/images/images_3_2/skateboard.jpg" 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img 
                src="/images/Snapinst.app_429100675_774643520694229_2004101476639556110_n_1080.jpg" 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img 
                src="/images/Snapinst.app_428717247_794583702566290_8075941958677745671_n_1080.jpg" 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </div>
          </div>
          
          <div className="mt-12">
            <Link 
              href="https://www.instagram.com/j.herrera_photo/" 
              className="inline-flex items-center font-serif text-lg border-b-2 border-black pb-1 hover:border-gray-400 transition-colors duration-300"
            >
              <span>Follow on Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <path d="M7 17l9.2-9.2M17 17V7H7"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Support My Work Section */}
      <div className=" pb-24 pt-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-4">
            <div className="flex-grow h-px bg-gray-200"></div>
            <div className="mx-6">
              <div className="font-serif text-gray-400 text-sm tracking-widest px-4">SUPPORT MY WORK</div>
            </div>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>
        </div>
          <h2 className="text-4xl font-serif mb-8">
            Appreciate What You See?
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="font-serif text-lg mb-10 text-gray-700">
              If my photography has inspired you or brought you joy, consider supporting my creative journey. Your contribution helps fund new equipment, travel to capture unique moments, and time to create more of the work you enjoy.
            </p>
            
            <a 
              href="https://www.buymeacoffee.com/jonathansmith" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center px-10 py-3 border-2 border-black bg-white font-serif text-lg hover:bg-black hover:text-white transition-colors duration-300 group"
            >
              <span className="mr-3 bg-yellow-400 p-1 rounded-full group-hover:bg-yellow-300 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
              </span>
              Buy Me a Coffee
            </a>
          </div>
        </div>
      </div>
      
      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={closeModal}
        />
      )}
      
      <Footer />
    </main>
  );
}