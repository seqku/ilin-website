'use client'
import Splash from "@/components/splash screen/Splash";
import { useEffect , useState } from "react";
import { Canvas } from '@react-three/fiber';
import { Logo } from "@/components/models/Logo";
import { Environment } from "@react-three/drei";
import SideBar from "@/components/bars/SideBar";
import { motion, useScroll } from "framer-motion";
import ScrollSection from "@/components/sections/ScrollSection";




export default function Home() {

  const { scrollYProgress } = useScroll();

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
        <Canvas id="Background" style={{ position: 'fixed', backgroundColor: '#003C47', touchAction: 'none' }} onMouseMove={handleMouseMove} gl={{ preserveDrawingBuffer: true }} shadows dpr={[1, 1.5]} camera={{ position: [0, 0, 9], fov: 50 , zoom: 1 }} onWheel={e => e.preventDefault()}>
        <ambientLight intensity={2} />
        <pointLight position={[0, 10, 10]} color="#fff" intensity={1} />
        <Environment preset="city" />
        <Logo mousePosition={mousePosition} rotation={[0.3, Math.PI / 1.6, 0]} /> 
        </Canvas>
          <SideBar />
          
        <div className="flex flex-col fixed z-20 bottom-[20px] right-[20px]">
        <div className="scrollBar_arrow">
        <div className="arrow">
        →
        </div>
        </div>
        
        <div className=" w-[160px] h-[12px] border-white border-[1px]">
        <motion.div
        className="progress-bar w-full h-full bg-[#B32322]"
        style={{ scaleX: scrollYProgress }}
      />
        </div>
        </div>
        
        <main className="none-pointer relative z-[10]">
        <ScrollSection />
        </main>
        </>
    )}
    </div>
  )
}
