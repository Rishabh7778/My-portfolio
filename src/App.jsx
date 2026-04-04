import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react"; // Import useGSAP hook
import Lenis from "@studio-freight/lenis";

import './App.css'
import About from './components/About'
import { Header } from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'

// Register the hook
gsap.registerPlugin(useGSAP);

function App() {
  const containerRef = useRef(null);

  // Lenis setup inside standard useEffect
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    // Cleanup function for Lenis
    return () => {
        lenis.destroy();
    };
  }, []);

  // GSAP animation inside useGSAP (This handles cleanup and React 18 strict mode automatically)
  useGSAP(() => {
    // We first check if the element exists to avoid the "Target not found" warning
    const elements = document.querySelectorAll(".fade-up");
    
    if (elements.length > 0) {
        gsap.from(elements, {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2
        });
    }
  }, { scope: containerRef }); // Scope limits the search to inside containerRef

  return (
    // Attach the ref here so GSAP knows where to look
    <div ref={containerRef}>
      <Header />
      <Hero />
      <Services />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;