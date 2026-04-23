import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white mt-16 md:mt-32">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            {/* Background Blob/Shape */}
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-meddical-lightBlue opacity-50 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=1000&auto=format&fit=crop" 
                alt="Hospital Facility" 
                className="w-full h-64 object-cover rounded-2xl shadow-lg mt-8"
              />
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop" 
                alt="Medical Team" 
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-meddical-navy text-white p-6 rounded-2xl shadow-xl z-20">
              <p className="text-4xl font-serif font-bold text-meddical-accentBlue mb-1">20+</p>
              <p className="text-sm font-medium">Years of<br/>Experience</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <p className="text-meddical-accentBlue font-bold tracking-widest uppercase mb-4 text-sm">About Us</p>
            <h2 className="text-4xl md:text-5xl font-serif text-meddical-navy leading-tight mb-6">
              A Passion for Putting Patients First.
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We are committed to providing the best possible medical care. Our team of experienced professionals works tirelessly to ensure your health and well-being. From preventive care to specialized treatments, we are here for you every step of the way.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Award-winning doctors",
                "State-of-the-art facilities",
                "24/7 Emergency support",
                "Patient-centric approach"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="text-meddical-accentBlue" size={20} />
                  <span className="text-meddical-navy font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-2 text-meddical-navy font-bold hover:text-meddical-accentBlue transition-colors group">
              Learn More About Us 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
