import React from 'react';
import { Globe, MessageCircle, Share2 } from 'lucide-react';

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. Richard James",
      specialty: "Chief Medical Officer",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Dr. Sarah Johnson",
      specialty: "Senior Surgeon",
      image: "https://images.unsplash.com/photo-1594824432257-f67b43a943a4?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Pediatrician",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="doctors" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-meddical-accentBlue font-bold tracking-widest uppercase mb-4 text-sm">Trusted Care</p>
          <h2 className="text-4xl md:text-5xl font-serif text-meddical-navy mb-4">Our Doctors</h2>
          <p className="text-gray-600">
            Meet our team of exceptional medical professionals dedicated to your health and recovery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group">
              <div className="h-72 overflow-hidden relative">
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-meddical-navy opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 text-center">
                <h3 className="text-2xl font-serif text-meddical-navy mb-1">{doctor.name}</h3>
                <p className="text-meddical-accentBlue font-medium text-sm uppercase tracking-wider mb-6">{doctor.specialty}</p>
                
                <div className="flex justify-center gap-4 mb-6">
                  <a href="#" className="w-10 h-10 rounded-full bg-meddical-lightBlue flex items-center justify-center text-meddical-navy hover:bg-meddical-navy hover:text-white transition-colors">
                    <Share2 size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-meddical-lightBlue flex items-center justify-center text-meddical-navy hover:bg-meddical-navy hover:text-white transition-colors">
                    <MessageCircle size={18} />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-meddical-lightBlue flex items-center justify-center text-meddical-navy hover:bg-meddical-navy hover:text-white transition-colors">
                    <Globe size={18} />
                  </a>
                </div>
                
                <button className="w-full py-3 bg-meddical-offWhite text-meddical-navy font-bold rounded-lg hover:bg-meddical-accentBlue hover:text-white transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
