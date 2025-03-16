// File: src/app/contact/page.jsx
"use client";

import Navigation from '../../components/navigation';
import Footer from '../../components/footer';

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navigation name="Your Brother's Name" />
      
      <div className="flex-grow max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-4xl font-serif mb-8">Contact</h1>
        
        <p className="font-serif mb-8">
          I'd love to hear from you. Please use the form below to get in touch.
        </p>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-serif mb-2">Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-200 font-serif"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block font-serif mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-200 font-serif"
              required
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block font-serif mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              className="w-full p-2 border border-gray-200 font-serif"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block font-serif mb-2">Message</label>
            <textarea
              id="message"
              rows="6"
              className="w-full p-2 border border-gray-200 font-serif"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="px-6 py-2 bg-black text-white font-serif hover:bg-gray-800 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
      
      <Footer />
    </main>
  );
}