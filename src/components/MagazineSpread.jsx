// File: components/MagazineSpread.jsx
import React, { useEffect, useState } from 'react';

const MagazineSpread = () => {
  // Add state to control when 3D effects are applied
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // Use Intersection Observer to only apply effects when in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const magazineElement = document.getElementById('magazine-spread');
    if (magazineElement) {
      observer.observe(magazineElement);
    }

    return () => {
      if (magazineElement) {
        observer.unobserve(magazineElement);
      }
    };
  }, []);

  return (
    <div className="h-auto flex items-start px-4 md:px-8 pt-12 py-12">
      <div className="max-w-screen-2xl mx-auto w-full">
        {/* Magazine Container with optimized 3D perspective */}
        <div className="relative" id="magazine-spread">
          {/* Magazine Outer Container with 3D effects */}
          <div className="flex justify-center items-center w-full">
            {/* Magazine with shadow and border effects */}
            <div 
              className="relative inline-flex w-full max-w-6xl"
              style={{
                perspective: isInView ? '2000px' : 'none',
                transformStyle: isInView ? 'preserve-3d' : 'flat',
                boxShadow: '0 15px 30px -10px rgba(0,0,0,0.2)'
              }}
            >
              {/* Left Page */}
              <div 
                className="w-1/2 relative z-10 bg-white"
                style={{
                  transformOrigin: 'right center',
                  transform: isInView ? 'rotateY(3deg)' : 'none',
                  boxShadow: isInView ? '5px 0 10px rgba(0,0,0,0.1) inset' : 'none',
                  transition: 'transform 0.5s ease-out'
                }}
              >
                <div className="relative">
                  {/* Simplified gradient on spine edge */}
                  {isInView && (
                    <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/10 to-transparent z-10"></div>
                  )}
                  
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src="/purple-girl.jpg" 
                      alt="Singer portrait with purple lighting" 
                      className="w-full h-full object-cover"
                      loading="eager"
                      width="600"
                      height="800"
                    />
                  </div>
                </div>
              </div>
              
              {/* Magazine Spine - simplified */}
              {isInView && (
                <div className="absolute h-full w-px bg-black/10 left-1/2 transform -translate-x-1/2 z-20"></div>
              )}
              
              {/* Right Page */}
              <div 
                className="w-1/2 relative z-10 bg-white"
                style={{
                  transformOrigin: 'left center',
                  transform: isInView ? 'rotateY(-3deg)' : 'none',
                  boxShadow: isInView ? '-5px 0 10px rgba(0,0,0,0.1) inset' : 'none',
                  transition: 'transform 0.5s ease-out'
                }}
              >
                <div className="relative">
                  {/* Simplified gradient on spine edge */}
                  {isInView && (
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/10 to-transparent z-10"></div>
                  )}
                  
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src="/singer.jpg" 
                      alt="Singer performing outdoors" 
                      className="w-full h-full object-cover"
                      loading="eager"
                      width="600"
                      height="800"
                    />
                  </div>
                  
                  {/* Magazine Feature Callout */}
                  <div className="absolute -bottom-6 -right-6 bg-black text-white px-6 py-4 z-20 shadow-lg">
                    <p className="font-serif uppercase tracking-widest text-xs mb-1">FEATURED IN</p>
                    <p className="font-serif text-xl">The VC Reporter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Latest Feature */}
        <div className="text-center mt-12 mb-8">
          <h3 className='font-serif tracking-widest text-sm'>Welcome to my latest feature in The VC Reporter, a publication that covers the latest news and trends in the venture capital industry</h3>
          <h3 className="font-serif tracking-widest text-sm">I was featured in this issue for my work on the cover and inside pages.</h3>
          <h3 className="font-serif tracking-widest text-sm">
            <span className="text-[#D22B2B]">Creative Direction, Photography, and Design</span>
            {/* <span className="text-[#DC143C]">Creative Direction, Photography, and Design</span> */}
            {/* <span className="text-[#CD1818]">Creative Direction, Photography, and Design</span> */}

            <strong> by Justin Herrera</strong>.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MagazineSpread;