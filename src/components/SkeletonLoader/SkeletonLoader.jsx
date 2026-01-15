import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="container mx-auto px-4 py-8 animate-pulse">
      <div className="grid grid-cols-12 gap-8">
        
        <div className="col-span-12 lg:col-span-6 border-r border-gray-100 pr-8">
          <div className="bg-gray-200 h-[400px] w-full rounded-lg mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
        </div>

        <div className="col-span-12 lg:col-span-3 border-r border-gray-100 pr-8 space-y-10">
          <div>
            <div className="bg-gray-200 h-40 w-full rounded-lg mb-3"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-6 bg-gray-200 rounded w-full"></div>
          </div>
          <div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-6 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-3">
          <div className="bg-gray-100 p-4 rounded-lg mb-4 h-48"></div>
          <div className="h-6 bg-gray-200 rounded w-full mb-3"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
        </div>

      </div>
    </div>
  );
};

export default SkeletonLoader;