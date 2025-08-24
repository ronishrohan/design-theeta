import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { Footer } from "./components/Footer";
import Hero from "./pages/home/Hero";
import Work from "./pages/home/Work";
import Services from "./pages/home/Services";
import Loader from "./components/Loader";


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
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default App;
