import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto py-24 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-4xl font-serif mb-8">Get in Touch</h2>
            <p className="font-serif text-gray-300 mb-8 max-w-lg">
              Whether you're looking to collaborate, have a project in mind, or just want to say hello, I'd love to hear from you.
            </p>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-serif text-sm mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 text-white focus:border-white transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-serif text-sm mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 text-white focus:border-white transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-serif text-sm mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-800 text-white focus:border-white transition-colors"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-white text-black font-serif hover:bg-gray-200 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:pl-16">
            <h3 className="text-2xl font-serif mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div>
                <p className="font-serif text-sm text-gray-400">Email</p>
                <a href="mailto:contact@justinherrera.com" className="font-serif hover:text-gray-300 transition-colors">
                  contact@justinherrera.com
                </a>
              </div>
              <div>
                <p className="font-serif text-sm text-gray-400">Based in</p>
                <p className="font-serif">Ventura, California</p>
              </div>
              <div>
                <p className="font-serif text-sm text-gray-400">Social</p>
                <div className="flex gap-6 mt-2">
                  <a href="#" className="group hover:text-gray-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" 
                      className="fill-current group-hover:fill-black group-hover:bg-white group-hover:p-0.5 rounded-sm transition-all">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="group hover:text-gray-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" 
                      className="fill-current group-hover:fill-black group-hover:bg-white group-hover:p-0.5 rounded-sm transition-all">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="group hover:text-gray-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" 
                      className="fill-current group-hover:fill-black group-hover:bg-white group-hover:p-0.5 rounded-sm transition-all">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-serif text-sm text-gray-400">
                © {new Date().getFullYear()} Justin Herrera. All rights reserved. 
              </p>
              <div className="font-serif text-sm text-white-400">Site created and designed by <a href="https://www.cristianherrera.dev" className="pt-8 hover:text-gray-300 transition-colors">Cristian Herrera</a></div>
            </div>
            <nav>
              <ul className="flex gap-8 font-serif text-sm">
                <li>
                  <Link href="/privacy" className="hover:text-gray-300 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-gray-300 transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
} 