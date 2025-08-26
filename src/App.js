import React, { useEffect , useRef} from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import ActingJourney from "./ActingJourney";
import PoliticalJourney from "./PoliticalJourney";
import Quotes from "./Quotes";
import Gallery from "./Gallery";
import FanWall from "./Fanwall";
import Footer from "./Footer";  
function App() {
  // Spotlight effect (mouse tracking)
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
const aboutRef = useRef(null);
  const journeyRef = useRef(null);
  const galleryRef = useRef(null);
  const fanWallRef = useRef(null);

  // Function to scroll to section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div>
      <Navbar scrollToSection={scrollToSection} refs={{ aboutRef, journeyRef, galleryRef, fanWallRef }} />
      <Hero />
      <div ref={aboutRef}><About /></div>
      <div ref={journeyRef}>
        <ActingJourney />
        <PoliticalJourney />
      </div>
      <div ref={galleryRef}><Gallery /></div>
      <Quotes />
      <div ref={fanWallRef}><FanWall /></div>
      <Footer />
    </div>
    </>
  );
}

export default App;
