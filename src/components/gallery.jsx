// File: components/Gallery.jsx
"use client";

import { useState } from 'react';

export default function Gallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to open the image viewer
  const openImageViewer = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  // Function to close the image viewer
  const closeImageViewer = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Prevent right-click on images
  const preventRightClick = (e) => {
    e.preventDefault();
    return false;
  };

  return (
    <div className="my-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="group bg-white hover:bg-gray-50 transition-colors duration-200"
            onClick={() => openImageViewer(image)}
          >
            <div className="relative overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image.url} 
                  alt={image.alt || 'Gallery image'} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  onContextMenu={preventRightClick}
                />
              </div>
              {image.title && (
                <div className="p-3 border-t border-gray-100">
                  <p className="font-serif text-sm">{image.title}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Image Viewer Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={closeImageViewer}
        >
          <div 
            className="max-w-5xl w-full" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white shadow-lg">
              <div className="flex justify-between items-center p-4 border-b border-gray-100">
                <h3 className="text-xl font-serif">{selectedImage.title}</h3>
                <button 
                  onClick={closeImageViewer}
                  className="text-black hover:text-gray-600 transition-colors"
                  aria-label="Close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
              <div className="relative p-4">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.alt || 'Gallery image'}
                  className="w-full h-auto max-h-[70vh] object-contain mx-auto"
                  onContextMenu={preventRightClick}
                />
                {/* Subtle watermark */}
                <div className="absolute bottom-6 right-6 text-black text-opacity-20 text-sm font-serif">
                  © {new Date().getFullYear()} Photography
                </div>
              </div>
              {selectedImage.description && (
                <div className="p-4 pt-0">
                  <p className="font-serif text-gray-700">{selectedImage.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}