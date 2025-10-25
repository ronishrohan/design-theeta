import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import Loader from "./components/Loader";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Project from "./pages/project/Project";

const App = () => {
  const [loaded, setLoaded] = useState(true);
  return (
    <>
      <Loader setLoaded={setLoaded} />
      {loaded && (
        <>
          <div className="bg-[#080808] overflow-x-clip text-white flex flex-col font-inter">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:slug" element={<Project />} />
            </Routes>
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default App;
