import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const ScrollBar = () => {
  const [showArrow, setShowArrow] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const scrollPercentage = scrollY / (documentHeight - windowHeight);

      if (scrollPercentage >= 1) {
        controls.stop();
        setShowArrow(false);
      } else {
        controls.start({ scaleX: scrollPercentage });
        setShowArrow(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <div className="flex flex-col fixed z-20 bottom-[20px] right-[20px]">
      {showArrow && (
        <div className="scrollBar_arrow">
          <div className="arrow">→</div>
        </div>
      )}

      <div className="w-[160px] h-[12px] border-white border-[1px]">
        <motion.div
          className="progress-bar w-full h-full bg-[#B32322]"
          animate={controls}
        />
      </div>
    </div>
  );
};

export default ScrollBar;
