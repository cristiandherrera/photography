// File: components/Footer.jsx
export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="font-serif text-lg mb-4">About</h3>
              <p className="font-serif text-gray-700 text-sm">
                Capturing beautiful moments through the lens, specializing in landscape and nature photography.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-serif text-lg mb-4">Links</h3>
              <ul className="space-y-2 font-serif text-sm">
                <li><a href="/gallery" className="opacity-70 hover:opacity-100 transition-opacity">Gallery</a></li>
                <li><a href="/blog" className="opacity-70 hover:opacity-100 transition-opacity">Blog</a></li>
                <li><a href="/instagram" className="opacity-70 hover:opacity-100 transition-opacity">Instagram</a></li>
                <li><a href="/contact" className="opacity-70 hover:opacity-100 transition-opacity">Contact</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="font-serif text-lg mb-4">Contact</h3>
              <ul className="space-y-2 font-serif text-sm text-gray-700">
                <li>Email: hello@photography.com</li>
                <li>Instagram: @photography</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-100 text-center font-serif text-sm text-gray-600">
            © {currentYear} All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  }