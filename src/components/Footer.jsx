import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#25262B] text-white">
      <div className="pt-20 pb-5">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 px-8">
          
          {/* Column 1 - Brand Info */}
          <div className="text-left">
            <div className="flex items-center justify-start mb-3">
              <img 
                src="/images/logo-white.svg" 
                alt="Minds Club Logo" 
                className="h-14 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm">
              A space to grow, together!
            </p>
          </div>

          {/* Column 2 - Explore */}
          <div className="text-left">
            <h3 className="font-bold text-white mb-4">Explore</h3>
            <div className="space-y-3 text-sm">
              <Link to="/workshops" className="block text-gray-300 hover:text-white transition-colors">
                Workshops
              </Link>
              <Link to="/shop" className="block text-gray-300 hover:text-white transition-colors">
                Shop
              </Link>
              <Link to="/the-one" className="block text-gray-300 hover:text-white transition-colors">
                The One
              </Link>
            </div>
          </div>

          {/* Column 3 - Legal & Policies */}
          <div className="text-left">
            <h3 className="font-bold text-white mb-4">Legal & Policies</h3>
            <div className="space-y-3 text-sm">
              <Link to="/privacy-policy" className="block text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/refund-policy" className="block text-gray-300 hover:text-white transition-colors">
                Refund Policy
              </Link>
              <Link to="/shipping-policy" className="block text-gray-300 hover:text-white transition-colors">
                Shipping Policy
              </Link>
              <Link to="/terms-conditions" className="block text-gray-300 hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Column 4 - Connect With Us */}
          <div className="text-left">
            <h3 className="font-bold text-white mb-4">Connect With Us</h3>
            <div className="space-y-3 text-sm">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-start text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-start text-gray-300 hover:text-white transition-colors"
              >
                <Youtube className="w-4 h-4 mr-2" />
                Youtube
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-start text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4 mr-2" />
                Facebook
              </a>
            </div>
          </div>

          {/* Column 5 - Contact */}
          <div className="text-left">
            <h3 className="font-bold text-white mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <p className="text-gray-300">
                Email: hello@brand.com
              </p>
              <p className="text-gray-300">
                Phone: +91 98765 43210
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-center text-gray-400 text-sm">
            @copyright 2025 all right reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;