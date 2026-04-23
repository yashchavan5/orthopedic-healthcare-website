import React from 'react';
import { Calendar, Phone, MapPin, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-meddical-offWhite pt-16 pb-32 lg:pt-24 lg:pb-48 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-meddical-lightBlue opacity-20 rounded-bl-[100px] -z-10"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-2xl">
          <p className="text-meddical-accentBlue font-bold tracking-widest uppercase mb-4 text-sm">Caring for Life</p>
          <h1 className="text-5xl lg:text-7xl font-serif text-meddical-navy leading-tight mb-6">
            Leading the Way <br /> in Medical Excellence
          </h1>
          <button className="bg-meddical-lightBlue text-meddical-navy font-medium px-8 py-3 rounded-full hover:bg-meddical-accentBlue hover:text-white transition-all duration-300 shadow-md">
            Our Services
          </button>
        </div>
      </div>

      {/* Floating Cards */}
      <div className="container-custom absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-lg overflow-hidden shadow-2xl mx-4">
          
          {/* Card 1 - Book Appointment */}
          <div className="bg-meddical-lightBlue p-8 flex flex-col items-start hover:bg-meddical-navy hover:text-white transition-colors duration-300 group">
            <h3 className="text-xl font-serif mb-4 flex items-center gap-2 group-hover:text-white">
              <Calendar className="text-meddical-navy group-hover:text-meddical-lightBlue" />
              Book an Appointment
            </h3>
            <p className="text-sm opacity-80 mb-6 flex-grow text-meddical-navy group-hover:text-white">
              Schedule your visit online. It's fast, easy, and secure.
            </p>
            <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-meddical-navy group-hover:text-meddical-lightBlue mt-auto">
              Book Now <ArrowRight size={16} />
            </button>
          </div>

          {/* Card 2 - Emergency */}
          <div className="bg-meddical-navy text-white p-8 flex flex-col items-start">
            <h3 className="text-xl font-serif mb-4 flex items-center gap-2">
              <Phone className="text-meddical-lightBlue" />
              Emergency Case
            </h3>
            <p className="text-sm opacity-80 mb-6 flex-grow">
              We provide 24/7 emergency medical care. Do not hesitate to call us.
            </p>
            <div className="flex items-center gap-2 mt-auto">
              <p className="text-2xl font-bold text-meddical-lightBlue">1-800-400-7400</p>
            </div>
          </div>

          {/* Card 3 - Location */}
          <div className="bg-meddical-accentBlue text-white p-8 flex flex-col items-start">
            <h3 className="text-xl font-serif mb-4 flex items-center gap-2">
              <MapPin className="text-white" />
              Find Location
            </h3>
            <p className="text-sm opacity-80 mb-6 flex-grow">
              Discover our main hospital and multiple clinics located near you.
            </p>
            <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white mt-auto hover:text-meddical-navy transition-colors">
              Get Directions <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
