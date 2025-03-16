// File: components/MagazineSpread.jsx
import React from 'react';

const MagazineSpread = () => {
  return (
    <div className="h-auto flex items-start px-4 md:px-8 py-12">
      <div className="max-w-screen-2xl mx-auto w-full">
        {/* Magazine Container with 3D perspective */}
        <div className="relative">
          {/* Magazine Outer Container with 3D effects */}
          <div className="flex justify-center items-center w-full">
            {/* Magazine with shadow and border effects */}
            <div 
              className="relative inline-flex w-full max-w-6xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)]"
              style={{
                perspective: '2000px',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Left Page */}
              <div 
                className="w-1/2 relative z-10"
                style={{
                  transformOrigin: 'right center',
                  transform: 'rotateY(3deg)',
                  boxShadow: '5px 0 10px rgba(0,0,0,0.1) inset'
                }}
              >
                <div className="relative bg-white">
                  {/* Very subtle dark gradient on spine edge */}
                  <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/15 to-transparent z-10"></div>
                  
                  {/* Subtle page curl corner */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-black/10 to-transparent z-10"></div>
                  
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src="/purple-girl.jpg" 
                      alt="Singer portrait with purple lighting" 
                      className="w-full h-full object-cover"
                      loading="eager" 
                    />
                  </div>
                </div>
              </div>
              
              {/* Magazine Spine - extremely thin center line */}
              <div className="absolute h-full w-px bg-black/10 left-1/2 transform -translate-x-1/2 z-20"></div>
              
              {/* Right Page */}
              <div 
                className="w-1/2 relative z-10"
                style={{
                  transformOrigin: 'left center',
                  transform: 'rotateY(-3deg)',
                  boxShadow: '-5px 0 10px rgba(0,0,0,0.1) inset'
                }}
              >
                <div className="relative bg-white">
                  {/* Very subtle dark gradient on spine edge */}
                  <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/15 to-transparent z-10"></div>
                  
                  {/* Subtle page curl corner */}
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-black/10 to-transparent z-10"></div>
                  
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src="/singer.jpg" 
                      alt="Singer performing outdoors" 
                      className="w-full h-full object-cover"
                      loading="eager" 
                    />
                  </div>
                  
                  {/* Magazine Feature Callout */}
                  <div className="absolute -bottom-6 -right-6 bg-black text-white px-6 py-4 z-20 shadow-xl">
                    <p className="font-serif uppercase tracking-widest text-xs mb-1">FEATURED IN</p>
                    <p className="font-serif text-xl">The VC Reporter</p>
                  </div>
                </div>
              </div>
              
              {/* Magazine Cover Shadow */}
              <div className="absolute inset-0 shadow-[0_0_40px_rgba(0,0,0,0.2)]" style={{ pointerEvents: 'none' }}></div>
            </div>
          </div>
        </div>
        
        {/* Latest Feature */}
        <div className="text-center mt-15 mb-24">
          <h3 className='font-serif tracking-widest text-sm'>Welcome to my latest feature in The VC Reporter, a publication that covers the latest news and trends in the venture capital industry</h3>
          <h3 className="font-serif tracking-widest text-sm">I was featured in this issue for my work on the cover and inside pages.</h3>
          <h3 className="font-serif tracking-widest text-sm">Creative Direction, Photography, and Design <strong>by Justin Herrera</strong>.</h3>

        </div>
      </div>
    </div>
  );
};

export default MagazineSpread;