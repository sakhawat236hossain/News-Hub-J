import React from 'react';

const TrendingNewsSection = ({ trendingNews }) => {
  if (!trendingNews || trendingNews.length === 0) return null;

  return (
    <section className="container mx-auto px-4 py-12 border-t border-gray-100">
      {/* Title*/}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div className="w-2 h-8 bg-blue-600"></div>
          <h2 className="text-3xl font-bold">Trending News</h2>
        </div>
      </div>

      {/* map data */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {trendingNews.slice(0, 5).map((news, index) => (
          <div key={news.id} className="relative group cursor-pointer overflow-hidden rounded-xl">
           
            <div className="h-64 lg:h-80">
              <img 
                src={news.image} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt="" 
              />
            </div>
            
           
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            
            
            <div className="absolute bottom-0 left-0 p-4">
              <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
                #{index + 1} Trending
              </span>
              <h3 className="text-white text-md font-bold leading-tight mt-2 line-clamp-2 group-hover:underline">
                {news.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingNewsSection;