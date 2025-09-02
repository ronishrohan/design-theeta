import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { Footer } from "./components/Footer";

import Hero from "./pages/home/Hero";
import Work from "./pages/home/Work";
import Services from "./pages/home/Services";
import Loader from "./components/Loader";
import Brands from "./pages/home/Brands";
import Reviews from "./pages/home/Reviews";


const App = () => {
  const [loaded, setLoaded] = useState(true);
  return (
    <>
      <Loader setLoaded />
      {loaded && (
        <>
          <div className="bg-[#080808] overflow-x-clip text-white flex flex-col font-inter">
            <Navbar />
            <Hero />
            <Work />
            <Services />
            <Reviews />
            {/* <Brands/>  */}
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default App;
