import React from 'react';

const TopNewsSection = ({ topNews }) => {
  if (!topNews || topNews.length < 4) return null;

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-8 border-b border-gray-200 pb-10">
        
        {/* Left  Columns */}
        <div className="col-span-12 lg:col-span-6 lg:border-r border-gray-200 lg:pr-8">
          <div className="group cursor-pointer">
            <div className="overflow-hidden mb-4">
               <img 
                 src={topNews[0].image} 
                 className="w-full h-[450px] object-cover transition-transform" 
                 alt="" 
               />
            </div>
            <span className="text-red-700 font-bold text-sm uppercase">{topNews[0].category.name}</span>
            <h1 className="text-4xl font-extrabold leading-tight mt-2 group-hover:underline">
              {topNews[0].title}
            </h1>
          </div>
        </div>

      {/* Middle Column 3 columns */}
        <div className="col-span-12 lg:col-span-3 lg:border-r border-gray-200 lg:pr-8">
          <div className="space-y-10">
            <div className="group cursor-pointer border-b border-gray-100 pb-6">
              <div className="mb-3">
                 <img src={topNews[1].image} className="w-full h-44 object-cover" alt="" />
              </div>
              <span className="text-red-500 font-bold text-xs">{topNews[1].category.name}</span>
              <h2 className="text-xl font-bold mt-1 group-hover:underline">{topNews[1].title}</h2>
              <p className="text-gray-600 text-sm mt-2">{topNews[1].summary}</p>
            </div>

            {/* news */}
            <div className="group cursor-pointer">
              <span className="text-red-500 font-bold text-xs uppercase">{topNews[2].category.name}</span>
              <h2 className="text-xl font-bold leading-snug mt-1 group-hover:underline">{topNews[2].title}</h2>
              <p className="text-gray-600 text-sm mt-2 line-clamp-3">{topNews[2].summary}</p>
            </div>
          </div>
        </div>

        {/* Right Columns */}
        <div className="col-span-12 lg:col-span-3">
          <div className="group cursor-pointer">
            <div className="bg-gray-50 p-2 border border-gray-100 mb-4">
               <img src={topNews[3].image} className="w-full h-auto" alt="" />
            </div>
            <h2 className="text-xl font-bold leading-tight group-hover:underline">
              {topNews[3].title}
            </h2>
            <p className="text-gray-600 text-sm mt-3 line-clamp-5">
              {topNews[3].summary}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TopNewsSection;