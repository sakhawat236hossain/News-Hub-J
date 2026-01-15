import React, { useState, useEffect } from "react";
import Navbar from "./components/Common/Navbar";
import TopNewsSection from "./pages/Home/TrendingNews,/TopNewsSection";


function App() {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    fetch('/api/v1/home')
      .then(res => res.json())
      .then(json => {
        if (json.success) setHomeData(json.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <main className="bg-white min-h-screen font-['Hind_Siliguri']">
      <Navbar/>
      {/* Top News*/}
      {homeData && <TopNewsSection topNews={homeData.top_news} />}
    </main>
  );
}

export default App;