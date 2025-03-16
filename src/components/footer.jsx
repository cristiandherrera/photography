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
                  <a href="#" className="hover:text-gray-300 transition-colors">Instagram</a>
                  <a href="#" className="hover:text-gray-300 transition-colors">Twitter</a>
                  <a href="#" className="hover:text-gray-300 transition-colors">LinkedIn</a>
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
              <div className="font-serif text-sm text-white-400">Site created and designed by his dear brother, <a href="https://www.cristianherrera.dev" className="pt-8 hover:text-gray-300 transition-colors">Cristian Herrera</a></div>
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