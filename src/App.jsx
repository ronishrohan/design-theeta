import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import Loader from "./components/Loader";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Project from "./pages/project/Project";
import { useLenis } from "lenis/react";
import Admin from "./pages/admin/Admin";

const App = () => {
  const [loaded, setLoaded] = useState(true);
  const lenis = useLenis();
  const location = useLocation();

  // Reset scroll to top when route changes
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [location.pathname, lenis]);

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
              <Route path="/admin" element={<Admin />} />
            </Routes>
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default App;
