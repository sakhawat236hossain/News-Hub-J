import React, { useState, useEffect } from "react";
import SkeletonLoader from "./components/SkeletonLoader/SkeletonLoader";
import Navbar from "./components/Common/Navbar";
import TopNewsSection from "./pages/Home/TopNews/TopNewsSection";
import LatestNewsSection from "./pages/Home/LatestNews/LatestNewsSection";
import TrendingNewsSection from "./pages/Home/TrendingNews,/TrendingNewsSection";

function App() {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch("https://news-server.ubautomation.com/api/v1/home") 
    .then((res) => res.json())
    .then((json) => {
      if (json.success) setHomeData(json.data);
      setLoading(false);
    })
    .catch((err) => console.error("Error:", err));
}, []);

  return (
    <main className="bg-white min-h-screen font-['Hind_Siliguri']">
      <Navbar />
      
      {loading ? (
        
        <SkeletonLoader />
      ) : (
       
        <>
          <TopNewsSection topNews={homeData?.top_news} />
          <LatestNewsSection latestNews={homeData?.latest_news} />
          <TrendingNewsSection trendingNews={homeData?.trending_news}></TrendingNewsSection>
        </>
      )}
    </main>
  );
}

export default App;