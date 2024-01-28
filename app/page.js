'use client'
import Splash from "@/components/splash screen/Splash";
import { useEffect , useState } from "react";
import { motion, useScroll } from "framer-motion";
import HorizontalScroll from "@/components/sections/ScrollSection";


export default function Home() {

  const { scrollYProgress } = useScroll();
  const [arrowHidden, setArrowHidden] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setArrowHidden(true);
      } else {
        setArrowHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    useEffect(() => {
      const preventZoom = e => {
        if (e.ctrlKey || e.touches?.length > 1) {
          e.preventDefault();
        }
      };

      document.addEventListener('wheel', preventZoom, { passive: false });
      document.addEventListener('touchmove', preventZoom, { passive: false });

      return () => {
        document.removeEventListener('wheel', preventZoom);
        document.removeEventListener('touchmove', preventZoom);
      };
    }, []);


  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const handleMouseMove = (event) => {
        setMousePosition({
            x: (event.clientX / window.innerWidth) * 2 - 1,
            y: - (event.clientY / window.innerHeight) * 2 + 1
        });
    };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  
  return (
    <div>
      {loading ? (
        <Splash />
      ) : (
        <>
        <div className="flex flex-col fixed z-20 bottom-[20px] right-[20px]">
        <div className="scrollBar_arrow">
        <motion.div 
        className={`arrow ${arrowHidden ? 'hidden' : ''}`}
        animate={{ opacity: arrowHidden ? 0 : 1 }}
        transition={{ duration: 1 }}
        >
        →
        </motion.div>
        </div>
        
        <div className="hidden md:block w-[160px] h-[12px] border-white border-[1px]">
        <motion.div
        className="progress-bar w-full h-full bg-[#B32322]"
        style={{ scaleX: scrollYProgress }}
      />
        </div>
        </div>
        
        <main  className="md:pointer-events-none pointer-events-auto z-[10]">
        <HorizontalScroll />
        </main>
        </>
    )}
    </div>
  )
}
