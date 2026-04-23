import React from 'react';
import { Send, Phone, MapPin, Mail, Globe, MessageCircle, Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-meddical-navy text-white pt-20 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Brand */}
          <div>
            <h2 className="text-3xl font-serif font-bold tracking-wider mb-6">
              MED<span className="text-meddical-accentBlue">DICAL</span>
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Leading the way in medical excellence, trusted care. Putting your health and well-being first.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-meddical-lightBlue bg-opacity-20 flex items-center justify-center hover:bg-meddical-accentBlue transition-colors">
                <Share2 size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-meddical-lightBlue bg-opacity-20 flex items-center justify-center hover:bg-meddical-accentBlue transition-colors">
                <MessageCircle size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-meddical-lightBlue bg-opacity-20 flex items-center justify-center hover:bg-meddical-accentBlue transition-colors">
                <Globe size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Important Links */}
          <div>
            <h3 className="text-xl font-serif mb-6 text-white">Important Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-meddical-accentBlue transition-colors text-sm flex items-center before:content-['•'] before:mr-2 before:text-meddical-accentBlue">Appointment</a></li>
              <li><a href="#" className="text-gray-300 hover:text-meddical-accentBlue transition-colors text-sm flex items-center before:content-['•'] before:mr-2 before:text-meddical-accentBlue">Doctors</a></li>
              <li><a href="#" className="text-gray-300 hover:text-meddical-accentBlue transition-colors text-sm flex items-center before:content-['•'] before:mr-2 before:text-meddical-accentBlue">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-meddical-accentBlue transition-colors text-sm flex items-center before:content-['•'] before:mr-2 before:text-meddical-accentBlue">About Us</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Us */}
          <div>
            <h3 className="text-xl font-serif mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="text-meddical-accentBlue mt-1" size={18} />
                <div>
                  <p className="text-sm text-gray-300">Call: (237) 681-812-255</p>
                  <p className="text-sm text-gray-300">Emergency: (237) 666-331-894</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-meddical-accentBlue mt-1" size={18} />
                <p className="text-sm text-gray-300">fildineesoe@gmail.com</p>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-meddical-accentBlue mt-1" size={18} />
                <p className="text-sm text-gray-300">0123 Some Place, Some Country</p>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h3 className="text-xl font-serif mb-6 text-white">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">
              Stay updated with our latest news and offers.
            </p>
            <div className="bg-white rounded-md flex overflow-hidden p-1">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-3 py-2 text-meddical-navy outline-none text-sm"
              />
              <button className="bg-meddical-accentBlue w-12 flex items-center justify-center rounded text-white hover:bg-meddical-navy transition-colors">
                <Send size={18} />
              </button>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2021 Meddical All Rights Reserved by PNTEC-LTD
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
