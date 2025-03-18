// File: src/app/about/page.jsx
"use client";

import { useState } from 'react';
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import Link from 'next/link';
import ImageModal from '../../components/ImageModal';

export default function AboutPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navigation name="JUSTIN HERRERA" />
      
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <img 
          src="/justin.jpg" 
          alt="Justin Herrera - Photographer" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-serif mb-6">About Me</h1>
            <p className="text-xl md:text-2xl font-serif max-w-3xl mx-auto">
              The story behind the lens
            </p>
          </div>
        </div>
      </div>
      
      {/* About Me Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="flex-grow h-px bg-gray-200"></div>
            <div className="mx-6">
              <div className="font-serif text-gray-400 text-sm tracking-widest px-4">ABOUT ME</div>
            </div>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>
          
          <div className="font-serif space-y-6 text-lg text-gray-800">
            <p>
              I'm Justin Herrera, a photographer based in Ventura, California. My journey with photography began over a decade ago when I picked up my first camera – a hand-me-down from my father. What started as a casual hobby quickly evolved into a passionate pursuit of capturing moments that tell compelling stories.
            </p>
            
            <p>
              My work often explores the intersection of human emotion and natural landscapes. I believe that every photograph has the power to evoke feeling, provoke thought, and preserve memories that might otherwise fade with time.
            </p>
            
            <p>
              Over the years, I've had the privilege of working with various publications including The VC Reporter, where my photographs have been featured on covers and inside pages. My work has also been exhibited in local galleries and included in private collections throughout Southern California.
            </p>
            
            <p>
              When I'm not behind the camera, you can find me exploring hiking trails, experimenting with new cooking recipes, or mentoring aspiring photographers in my community. I believe in paying forward the guidance I received early in my career.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-4">
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
                src="/images/images_4_5/offset-starlounge.jpg" 
                alt="Portrait Photography" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 cursor-pointer"
                onClick={() => openModal('/images/images_4_5/offset-starlounge.jpg')}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* My Workspace Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="flex-grow h-px bg-gray-200"></div>
            <div className="mx-6">
              <div className="font-serif text-gray-400 text-sm tracking-widest px-4">MY WORKSPACE</div>
            </div>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="aspect-square overflow-hidden rounded-md shadow-lg">
              <img 
                src="/images/images_3_2/Snapinst.app_432365210_7509571955764500_1768851970249358687_n_1080.jpg" 
                alt="My photography workspace" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            <div className="font-serif space-y-6 text-lg text-gray-800">
              <p>
                My creative space is more than just a studio—it's where ideas come to life. Located in the heart of Ventura, my workspace blends functionality with inspiration.
              </p>
              
              <p>
                I've carefully curated an environment that balances technical equipment with personal touches. Vintage cameras line my shelves alongside books that have shaped my photographic philosophy, while natural light floods through large windows to create the perfect atmosphere for editing.
              </p>
              
              <p>
                This space also serves as a meeting point for collaborations, a classroom for workshops, and occasionally, a gallery for intimate showings of new work. It's constantly evolving, just like my photography.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* My Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="flex-grow h-px bg-gray-200"></div>
            <div className="mx-6">
              <div className="font-serif text-gray-400 text-sm tracking-widest px-4">MY PROCESS</div>
            </div>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-8 shadow-sm">
              <div className="font-serif text-5xl mb-6 text-black">01</div>
              <h3 className="font-serif text-xl mb-4">Vision & Concept</h3>
              <p className="font-serif text-gray-600">
                Every project begins with a vision. I spend time understanding the story I want to tell, researching locations, and planning the technical aspects before I even pick up my camera.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 shadow-sm">
              <div className="font-serif text-5xl mb-6 text-black">02</div>
              <h3 className="font-serif text-xl mb-4">Capture & Connection</h3>
              <p className="font-serif text-gray-600">
                The moment of capture is about connecting with the subject and environment. I focus on authentic moments, natural light, and the emotional essence of the scene.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 shadow-sm">
              <div className="font-serif text-5xl mb-6 text-black">03</div>
              <h3 className="font-serif text-xl mb-4">Refinement & Delivery</h3>
              <p className="font-serif text-gray-600">
                Post-processing is where the image is refined, not reinvented. I enhance what was captured in-camera, focusing on subtle adjustments that honor the original moment.
              </p>
            </div>
          </div>
          
          <div className="font-serif space-y-6 text-lg text-gray-800">
            <p>
              My photographic process is a balance of technical precision and artistic intuition. I believe that great photography happens when preparation meets opportunity. Whether I'm working on a commercial assignment or a personal project, I approach each with the same level of dedication and attention to detail.
            </p>
            
            <p>
              I'm particularly drawn to the golden hours of sunrise and sunset, when light paints the world with warm, dimensional qualities. These moments require patience and planning, but the results are worth the wait.
            </p>
            
            <p>
              While I embrace digital technology for its versatility, I still occasionally work with film to maintain a connection with photography's roots. This dual approach keeps my work grounded while allowing for creative exploration.
            </p>
          </div>
        </div>
      </section>
      
      {/* Special Thanks Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <div className="flex-grow h-px bg-gray-200"></div>
            <div className="mx-6">
              <div className="font-serif text-gray-400 text-sm tracking-widest px-4">SPECIAL THANKS</div>
            </div>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif mb-8">With Gratitude</h2>
            <p className="font-serif text-lg text-gray-800 max-w-2xl mx-auto">
              None of this would be possible without the support of my family, friends, and collaborators who have been there every step of the way.
            </p>
          </div>
          
          {/* Family Collage */}
          <div className="grid grid-cols-3 gap-2 mb-16">
            {/* You can replace these with actual family photos */}
            <div className="aspect-square overflow-hidden">
              <img 
                src="/images/images_3_2/public-center-market.jpg" 
                alt="Family moment" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img 
                src="/images/images_3_2/two-cows.jpg" 
                alt="Family moment" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="aspect-square overflow-hidden">
              <img 
                src="/images/images_3_2/mustache-band.jpg" 
                alt="Family moment" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Brother Credit */}
          <div className="bg-white p-8 shadow-sm text-center">
            <div className="flex justify-center mb-6">
              <div className="h-20 w-20 rounded-full overflow-hidden">
                <img 
                  src="/justin.jpg" 
                  alt="Cristian Herrera" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <h3 className="font-serif text-xl mb-2">Website Design & Development</h3>
            <p className="font-serif text-gray-600 mb-4">
              A special thank you to my brother, Cristian Herrera, for designing and developing this website.
            </p>
            <a 
              href="https://www.cristianherrera.dev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-serif text-black border-b border-black pb-1 hover:border-gray-400 transition-colors"
            >
              Visit His Portfolio
            </a>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-24 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-serif mb-8">Let's Create Together</h2>
          <p className="font-serif text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Whether you're looking for a photographer for your next project or just want to connect, I'd love to hear from you.
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-12 py-4 border-2 border-white font-serif text-lg hover:bg-white hover:text-black transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
      
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