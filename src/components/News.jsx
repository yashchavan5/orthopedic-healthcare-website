import React from 'react';
import { Calendar, User, Eye, Heart, ArrowRight } from 'lucide-react';

const News = () => {
  const articles = [
    {
      title: "This Article's Title goes Here, but not too long.",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&auto=format&fit=crop",
      date: "Monday 05, September 2021",
      author: "By Author",
      views: 68,
      likes: 86
    },
    {
      title: "This Article's Title goes Here, but not too long.",
      image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=800&auto=format&fit=crop",
      date: "Monday 05, September 2021",
      author: "By Author",
      views: 68,
      likes: 86
    }
  ];

  return (
    <section id="news" className="section-padding bg-meddical-offWhite">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-meddical-accentBlue font-bold tracking-widest uppercase mb-4 text-sm">Better information, Better health</p>
          <h2 className="text-4xl md:text-5xl font-serif text-meddical-navy mb-4">News</h2>
          <p className="text-gray-600">
            Read our latest news and updates to stay informed about health and medical advancements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="h-64 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-meddical-accentBlue" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-meddical-accentBlue" />
                    <span>{article.author}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-serif text-meddical-navy mb-4 group-hover:text-meddical-accentBlue transition-colors">
                  {article.title}
                </h3>
                
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Eye size={16} /> {article.views}
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart size={16} className="text-red-400" /> {article.likes}
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-sm font-bold text-meddical-navy hover:text-meddical-accentBlue transition-colors">
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
