import React from 'react';
import { Activity, Heart, Stethoscope, Eye, Thermometer, Brain, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Activity size={40} strokeWidth={1.5} />,
      title: "Free Checkup",
      description: "Comprehensive medical checkups to monitor your overall health and prevent future complications."
    },
    {
      icon: <Heart size={40} strokeWidth={1.5} />,
      title: "Cardiology",
      description: "Expert cardiac care including diagnostics, treatment, and rehabilitation for heart conditions."
    },
    {
      icon: <Stethoscope size={40} strokeWidth={1.5} />,
      title: "General Surgery",
      description: "Advanced surgical procedures performed by our highly skilled and experienced surgical team."
    },
    {
      icon: <Eye size={40} strokeWidth={1.5} />,
      title: "Ophthalmology",
      description: "Complete eye care services from routine exams to advanced corrective surgeries."
    },
    {
      icon: <Thermometer size={40} strokeWidth={1.5} />,
      title: "Pediatrics",
      description: "Compassionate and specialized healthcare for infants, children, and adolescents."
    },
    {
      icon: <Brain size={40} strokeWidth={1.5} />,
      title: "Neurology",
      description: "Diagnosis and treatment of nervous system disorders by leading neurologists."
    }
  ];

  return (
    <section id="services" className="section-padding bg-meddical-offWhite">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-meddical-accentBlue font-bold tracking-widest uppercase mb-4 text-sm">Care you can believe in</p>
          <h2 className="text-4xl md:text-5xl font-serif text-meddical-navy mb-4">Our Services</h2>
          <p className="text-gray-600">
            We provide a wide range of medical services to ensure that you and your family receive the best possible care under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-meddical-lightBlue group"
            >
              <div className="w-16 h-16 bg-meddical-offWhite rounded-full flex items-center justify-center text-meddical-accentBlue mb-6 group-hover:bg-meddical-navy group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif text-meddical-navy mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>
              <button className="flex items-center gap-2 text-sm font-bold text-meddical-navy group-hover:text-meddical-accentBlue transition-colors">
                Learn More <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
