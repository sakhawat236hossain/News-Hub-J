import React from 'react';

const Navbar = () => {
  const categoryData = [
    { id: 1, name: "নির্বাচন" },
    { id: 2, name: "আন্তর্জাতিক গণমাধ্যম" },
    { id: 3, name: "ভারত / প্রতিবেশী" }
  ];

  return (
    <header className="w-full bg-white pt-2 border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        
        <div className="border-t border-gray-300"></div>
        
        <div className="relative">
          <ul className="flex items-center gap-x-6 overflow-x-auto no-scrollbar py-3">
            {categoryData.map((item) => (
              <li key={item.id} className="whitespace-nowrap">
                <a 
                  href="#" 
                  className="text-[14px] font-bold text-[#222] hover:text-red-600 transition-all duration-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="w-full h-[7px] bg-gray-500 relative">
            <div className="absolute left-0 top-0 h-full w-20 rounded-full"></div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </header>
  );
};

export default Navbar;