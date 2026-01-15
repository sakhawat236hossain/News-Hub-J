import React from 'react';

const LatestNewsSection = ({ latestNews }) => {
  if (!latestNews || latestNews.length === 0) {
    return (
      <section className="container mx-auto px-4 py-12 text-center">
        <div className="bg-gray-50 border border-dashed border-gray-300 rounded-lg p-10">
          <p className="text-gray-500 text-lg">বর্তমানে কোনো লেটেস্ট নিউজ নেই। অনুগ্রহ করে পরে চেষ্টা করুন।</p>
        </div>
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-12">
      {/* Heading */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-2 h-8 bg-red-600"></div>
        <h2 className="text-3xl font-bold">Latest News</h2>
      </div>

      {/* map data 4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {latestNews.slice(0, 4).map((news) => (
          <div key={news.id} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-md mb-3 h-48">
              <img 
                src={news.image} 
                className="w-full h-full object-cover transition-transform duration-500 " 
                alt={news.title} 
              />
            </div>
            <span className="text-red-600 font-bold text-xs hover:underline">
              {news.category?.name}
            </span>
            <h3 className="text-lg font-bold leading-snug mt-2 group-hover:text-red-700 transition-colors line-clamp-2 hover:underline">
              {news.title}
            </h3>
            <p className="text-gray-600 text-sm mt-2 line-clamp-3">
              {news.summary}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNewsSection;