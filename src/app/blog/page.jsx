"use client";

import { useState, useEffect } from 'react';
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import Link from 'next/link';

export default function BlogPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Image transition effect on load
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Behind the Lens: Capturing the Perfect Moment",
      excerpt: "An in-depth look at the art of patience and preparation in landscape photography. Learn about my process and philosophy.",
      date: "June 15, 2023",
      category: "technique",
      author: "Jonathan Smith",
      image: "/images/images_3_2/Snapinst.app_429902249_716149860663856_7262378799388044302_n_1080.jpg",
      featured: true,
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "The Art of Street Photography: Ethical Considerations",
      excerpt: "Exploring the balance between artistic expression and respecting subjects in street photography.",
      date: "May 3, 2023",
      category: "ethics",
      author: "Jonathan Smith",
      image: "/images/images_3_2/pianoman.jpg",
      featured: false,
      readTime: "5 min read"
    },
    {
      id: 3,
      title: "Finding Your Photographic Style",
      excerpt: "How to develop a consistent aesthetic that speaks to your creative vision.",
      date: "April 21, 2023", 
      category: "creativity",
      author: "Jonathan Smith",
      image: "/images/images_3_2/mustache-band.jpg",
      featured: false,
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "My Essential Photography Gear for 2023",
      excerpt: "A detailed look at the equipment I use and why I've chosen these specific tools.",
      date: "March 17, 2023",
      category: "gear",
      author: "Jonathan Smith",
      image: "/images/images_3_2/stever.jpg",
      featured: false,
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "Lighting Techniques for Dramatic Portraits",
      excerpt: "Mastering the interplay of light and shadow to create compelling portrait photography.",
      date: "February 28, 2023",
      category: "technique",
      author: "Jonathan Smith",
      image: "/images/images_4_5/gir-close-up.jpg",
      featured: false,
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "Travel Photography: Capturing the Essence of Place",
      excerpt: "How to photograph destinations in a way that conveys their unique atmosphere and character.",
      date: "January 19, 2023",
      category: "travel",
      author: "Jonathan Smith",
      image: "/images/images_3_2/icemountain.jpg",
      featured: false,
      readTime: "6 min read"
    },
    // Adding one more blog post
    {
      id: 7,
      title: "Color Theory in Photography: Creating Mood and Impact",
      excerpt: "Understanding how color relationships affect your compositions and how to use color psychology in your work.",
      date: "December 5, 2022",
      category: "technique",
      author: "Jonathan Smith",
      image: "/images/images_3_2/burger.jpg",
      featured: false,
      readTime: "7 min read"
    },
    // Adding even more blog posts to demonstrate pagination
    {
      id: 8,
      title: "Film vs Digital: Finding Your Medium",
      excerpt: "Exploring the unique characteristics of both film and digital photography and how to decide which serves your vision.",
      date: "November 12, 2022",
      category: "gear",
      author: "Jonathan Smith",
      image: "/images/images_3_2/two-cows.jpg",
      featured: false,
      readTime: "8 min read"
    },
    {
      id: 9,
      title: "The Power of Black and White Photography",
      excerpt: "Why removing color can sometimes add more emotional impact to your images.",
      date: "October 24, 2022",
      category: "creativity",
      author: "Jonathan Smith",
      image: "/images/images_4_5/black-comic.jpg",
      featured: false,
      readTime: "5 min read"
    }
  ];

  // Filter posts based on active category
  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // Get featured post
  const featuredPost = blogPosts.find(post => post.featured);
  
  // Get regular posts (non-featured)
  const regularPosts = filteredPosts.filter(post => !post.featured);
  
  // Calculate pagination
  const totalPages = Math.ceil(regularPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = regularPosts.slice(indexOfFirstPost, indexOfLastPost);
  
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
  // Go to next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };
  
  // Go to previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navigation name="JONATHAN SMITH" />
      
      {/* Hero Section */}
      <div className="w-full bg-gray-100 pt-8 pb-20"> </div>
      
      {/* Featured Post */}
      {featuredPost && (
        <div className="max-w-6xl mx-auto px-4 py-12 -mt-16">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-full">
                <div className="h-full relative overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-black text-white px-3 py-1 text-sm font-serif uppercase tracking-wider">
                    Featured
                  </span>
                  <span className="text-gray-500 text-sm ml-4 font-serif">{featuredPost.date}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-700 font-serif mb-8 text-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                      <img 
                        src="/justin.jpg" 
                        alt="Jonathan Smith" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-serif text-gray-700">{featuredPost.author}</span>
                  </div>
                  <span className="font-serif text-gray-500 text-sm">{featuredPost.readTime}</span>
                </div>
                <Link 
                  href={`/blog/${featuredPost.id}`} 
                  className="mt-8 inline-block px-8 py-3 bg-black text-white font-serif hover:bg-gray-800 transition-colors duration-300"
                >
                  Read Article
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Category Filter */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-2 pb-2 overflow-x-auto">
          <div className="flex space-x-6 min-w-max">
            <button 
              onClick={() => {
                setActiveCategory('all');
                setCurrentPage(1);
              }}
              className={`font-serif text-lg pb-2 border-b-2 transition-colors duration-300 ${
                activeCategory === 'all' 
                  ? 'border-black text-black' 
                  : 'border-transparent text-gray-500 hover:text-black'
              }`}
            >
              All Posts
            </button>
            <button 
              onClick={() => {
                setActiveCategory('technique');
                setCurrentPage(1);
              }}
              className={`font-serif text-lg pb-2 border-b-2 transition-colors duration-300 ${
                activeCategory === 'technique' 
                  ? 'border-black text-black' 
                  : 'border-transparent text-gray-500 hover:text-black'
              }`}
            >
              Technique
            </button>
            <button 
              onClick={() => {
                setActiveCategory('gear');
                setCurrentPage(1);
              }}
              className={`font-serif text-lg pb-2 border-b-2 transition-colors duration-300 ${
                activeCategory === 'gear' 
                  ? 'border-black text-black' 
                  : 'border-transparent text-gray-500 hover:text-black'
              }`}
            >
              Gear
            </button>
            <button 
              onClick={() => {
                setActiveCategory('creativity');
                setCurrentPage(1);
              }}
              className={`font-serif text-lg pb-2 border-b-2 transition-colors duration-300 ${
                activeCategory === 'creativity' 
                  ? 'border-black text-black' 
                  : 'border-transparent text-gray-500 hover:text-black'
              }`}
            >
              Creativity
            </button>
            <button 
              onClick={() => {
                setActiveCategory('travel');
                setCurrentPage(1);
              }}
              className={`font-serif text-lg pb-2 border-b-2 transition-colors duration-300 ${
                activeCategory === 'travel' 
                  ? 'border-black text-black' 
                  : 'border-transparent text-gray-500 hover:text-black'
              }`}
            >
              Travel
            </button>
            <button 
              onClick={() => {
                setActiveCategory('ethics');
                setCurrentPage(1);
              }}
              className={`font-serif text-lg pb-2 border-b-2 transition-colors duration-300 ${
                activeCategory === 'ethics' 
                  ? 'border-black text-black' 
                  : 'border-transparent text-gray-500 hover:text-black'
              }`}
            >
              Ethics
            </button>
          </div>
        </div>
      </div>
      
      {/* Blog Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map(post => (
            <Link 
              href={`/blog/${post.id}`} 
              key={post.id}
              className="group"
            >
              <div className="bg-white border border-gray-100 shadow-md rounded-lg overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 h-full flex flex-col">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full text-white">
                    <span className="inline-block px-3 py-1 bg-white text-black text-xs font-serif uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-serif text-gray-500 text-sm">{post.date}</span>
                    <span className="font-serif text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-serif mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 font-serif mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center">
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
                      <img 
                        src="/justin.jpg" 
                        alt="Jonathan Smith" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-serif text-gray-700 text-sm">{post.author}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="max-w-6xl mx-auto px-4 pb-20">
          <div className="flex justify-center items-center">
            <button 
              onClick={prevPage} 
              disabled={currentPage === 1}
              className={`px-4 py-2 mx-1 font-serif border border-gray-300 rounded-md ${
                currentPage === 1 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              &laquo; Previous
            </button>
            
            {/* Page Numbers */}
            <div className="hidden md:flex mx-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`w-10 h-10 mx-1 flex items-center justify-center rounded-full font-serif ${
                    currentPage === index + 1
                      ? 'bg-black text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            
            {/* Mobile Page Indicator */}
            <div className="md:hidden mx-4 font-serif">
              Page {currentPage} of {totalPages}
            </div>
            
            <button 
              onClick={nextPage} 
              disabled={currentPage === totalPages}
              className={`px-4 py-2 mx-1 font-serif border border-gray-300 rounded-md ${
                currentPage === totalPages 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Next &raquo;
            </button>
          </div>
        </div>
      )}
      
      <Footer />
    </main>
  );
} 