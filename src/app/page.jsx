// File: src/app/page.jsx
"use client";

import { useState, useEffect } from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import Link from 'next/link';
import ImageModal from '../components/ImageModal';

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
      
      {/* Hero Section with Magazine Feature */}
      <div className="min-h-screen flex items-center px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            {/* Large magazine image that takes 3/5 of the width */}
            <div className="order-1 lg:col-span-3 relative">
              <div className="aspect-[3/4] shadow-2xl relative z-10 transform transition-transform duration-500 hover:scale-[1.02] mx-auto">
                <img 
                  src="/singer.jpg" 
                  alt="Singer portrait" 
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-black text-white px-6 py-4 z-20 shadow-xl">
                <p className="font-serif uppercase tracking-widest text-xs mb-1">FEATURED IN</p>
                <p className="font-serif text-xl">National Geographic</p>
              </div>
            </div>
            
            {/* Text on the right side taking 2/5 of width */}
            <div className="order-2 lg:col-span-2">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-serif mb-8 leading-tight">
                Lens & Light
              </h1>
              <p className="font-serif text-xl md:text-2xl mb-10 max-w-lg text-gray-700">
                Award-winning photography that captures the essence of our world
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Portfolio Preview Grid - Large Gallery */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-[90rem] mx-auto px-2">
          <div className="text-center mb-12">
            <span className="text-sm font-serif uppercase tracking-widest mb-4 inline-block">Portfolio Selections</span>
            <h2 className="text-4xl font-serif mb-8">
              Visual Stories
            </h2>
            
            {/* Filter Tabs */}
            <div className="flex justify-center gap-8 mb-12">
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
                src="/images/images_3_2/Snapinst.app_429902249_716149860663856_7262378799388044302_n_1080.jpg" 
                alt="Photography" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_3_2/Snapinst.app_429902249_716149860663856_7262378799388044302_n_1080.jpg')}
                loading="lazy"
              />
            </div>
            
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
            
            <div className="aspect-[3/2] overflow-hidden">
              <img 
                src="/images/images_3_2/Snapinst.app_433435077_927417172203376_6523494147813919139_n_1080.jpg" 
                alt="Photography" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_3_2/Snapinst.app_433435077_927417172203376_6523494147813919139_n_1080.jpg')}
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

            {/* 4:5 Images */}
            {/* 1st row*/}
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
                src="/images/images_4_5/scary-bird.jpg" 
                alt="Scary Bird" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_4_5/scary-bird.jpg')}
                loading="lazy"
              />
            </div>
            
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="/images/images_4_5/piano-layered.jpg" 
                alt="Bird and Bug" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_4_5/piano-layered.jpg')}
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
                src="/images/images_4_5/Snapinst.app_467726408_590988180136321_4562799817050919405_n_1080.jpg" 
                alt="Portrait Photography" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_4_5/Snapinst.app_467726408_590988180136321_4562799817050919405_n_1080.jpg')}
                loading="lazy"
              />
            </div>       
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="/images/images_4_5/mustache-guitar.jpg" 
                alt="Portrait Photography" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_4_5/mustache-guitar.jpg')}
                loading="lazy"
              />
            </div>
            
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="/images/images_4_5/frootloops.jpg" 
                alt="Portrait Photography" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_4_5/frootloops.jpg')}
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
                src="/images/images_4_5/cowboy.jpg" 
                alt="Portrait Photography" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_4_5/cowboy.jpg')}
                loading="lazy"
              />
            </div>
            
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="/images/images_4_5/purple-girl.jpg" 
                alt="Portrait Photography" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_4_5/purple-girl.jpg')}
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
      
      {/* Split Section */}
      <div className="grid grid-cols-1 md:grid-cols-2">
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
      
      {/* Instagram Teaser */}
      <div className="py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-16">
            <span className="text-sm font-serif uppercase tracking-widest mb-4 inline-block">Follow Along</span>
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
                src="/images/Snapinst.app_472895280_1302157310818159_7778809803689353633_n_1080.jpg" 
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
                src="/images/Snapinst.app_475060822_18485238166028778_7056324810208827869_n_1080.jpg" 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img 
                src="/images/Snapinst.app_432333543_785297003443665_4518703344032415053_n_1080.jpg" 
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
              href="/instagram" 
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