import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-primary-bright" />
              <span className="text-xl font-bold">Sunrise Biotech</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner for premium natural health products. We specialize in pure spirulina and moringa products to enhance your wellness journey.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-primary-foreground/60 hover:text-primary-bright transition-colors" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-primary-foreground/60 hover:text-primary-bright transition-colors" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-primary-foreground/60 hover:text-primary-bright transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-bright transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-foreground/80 hover:text-primary-bright transition-colors text-sm">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-bright transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-bright transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-primary-foreground/80 hover:text-primary-bright transition-colors text-sm">
                  Spirulina Powder
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-foreground/80 hover:text-primary-bright transition-colors text-sm">
                  Spirulina Tablets
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-foreground/80 hover:text-primary-bright transition-colors text-sm">
                  Spirulina Culture
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-foreground/80 hover:text-primary-bright transition-colors text-sm">
                  Moringa Powder
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-foreground/80 hover:text-primary-bright transition-colors text-sm">
                  Moringa Leaves
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-primary-foreground/80 hover:text-primary-bright transition-colors text-sm">
                  Moringa Tablets
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-bright mt-0.5" />
                <p className="text-primary-foreground/80 text-sm">
                  2385B, Near Panjarapole, HARIJ,<br />
                  Patan, Gujarat, India - 384240
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-bright" />
                {/* ✅ Unified phone number link */}
                <a 
                  href="tel:+919737204425" 
                  className="text-primary-foreground/80 text-sm hover:text-primary-bright transition-colors"
                >
                  +91 9737204425
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-bright" />
                <a 
                  href="mailto:patelajay63610@gmail.com" 
                  className="text-primary-foreground/80 text-sm hover:text-primary-bright transition-colors"
                >
                  patelajay63610@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-light mt-8 pt-6 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 <a href="http://www.sunrisebiotech.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary-bright underline-offset-4 hover:underline transition-all">Sunrise Biotech</a>. All rights reserved. | Crafted with care for your wellness.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
