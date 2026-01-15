import React from 'react';

const Navbar = () => {
  const categories = [
    "Weekly edition", 
    "The world in brief", 
    "World Ahead 2026", 
    "War in Ukraine", 
    "United States", 
    "Middle East", 
    "The world economy", 
    "Business", 
    "Artificial intelligence"
  ];

  return (
    <header className="w-full bg-white pt-2">
      <div className="container mx-auto px-4">
    
        <div className="border-t border-gray-300"></div>
        
        <div className="relative">
        
          <ul className="flex items-center gap-x-6 overflow-x-auto no-scrollbar py-2">
            {categories.map((item, index) => (
              <li key={index} className="whitespace-nowrap">
                <a 
                  href="#" 
                  className="text-[13px] font-medium text-[#222] hover:text-red-600 transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="w-full h-[3px] bg-gray-200 relative mt-0.5">
            <div className="absolute left-0 top-[-4px] bottom-[-4px] w-1 bg-gray-400 rounded-sm cursor-pointer"></div>
            <div className="absolute left-0 top-0 h-full w-1/4 bg-gray-500 rounded-full"></div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </header>
  );
};

export default Navbar;