import React from 'react';
import { Phone, Clock, MapPin, Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full shadow-sm">
      {/* Top Bar */}
      <div className="bg-white py-4 border-b border-gray-100 hidden lg:block">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-serif text-meddical-navy font-bold tracking-wider">MED<span className="text-meddical-accentBlue">DICAL</span></span>
          </div>
          
          <div className="flex gap-8">
            <div className="flex items-center gap-3">
              <Phone className="text-meddical-accentBlue" size={24} />
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Emergency</p>
                <p className="text-meddical-navy font-semibold">(237) 681-812-255</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Clock className="text-meddical-accentBlue" size={24} />
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Work Hour</p>
                <p className="text-meddical-navy font-semibold">09:00 - 20:00 Everyday</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <MapPin className="text-meddical-accentBlue" size={24} />
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">Location</p>
                <p className="text-meddical-navy font-semibold">0123 Some Place</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-meddical-navy text-white">
        <div className="container-custom flex justify-between items-center h-16">
          <div className="lg:hidden">
            <span className="text-2xl font-serif font-bold tracking-wider text-white">MED<span className="text-meddical-accentBlue">DICAL</span></span>
          </div>
          
          <ul className="hidden md:flex space-x-8 text-sm font-medium">
            <li><a href="#" className="hover:text-meddical-accentBlue transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-meddical-accentBlue transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-meddical-accentBlue transition-colors">Services</a></li>
            <li><a href="#doctors" className="hover:text-meddical-accentBlue transition-colors">Doctors</a></li>
            <li><a href="#news" className="hover:text-meddical-accentBlue transition-colors">News</a></li>
            <li><a href="#contact" className="hover:text-meddical-accentBlue transition-colors">Contact</a></li>
          </ul>

          <div className="flex items-center gap-4">
            <button className="text-white hover:text-meddical-accentBlue transition-colors">
              <Search size={20} />
            </button>
            <button className="bg-meddical-lightBlue text-meddical-navy font-medium px-6 py-2 rounded-full hover:bg-meddical-accentBlue hover:text-white transition-all duration-300 shadow-md">
              Appointment
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
