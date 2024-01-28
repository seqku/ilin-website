'use client'

import React, { useEffect, useState } from 'react';
import Image from "next/image";
import anime from 'animejs';
import styles from './Splash.module.css'; 

const Splash = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    animateSequence();
  }, []);

  const animateSequence = () => {
    const timeline = anime.timeline({
      easing: 'easeInOutSine',
      duration: 1000, 
      complete: () => {
        setAnimationComplete(true);
      },
    });

    for (let i = 0; i < 3; i++) {
      timeline.add({
        targets: '.animeeffect',
        rotateY: `+=360deg`,
        duration: 1000, 
      });
    }


    timeline.add({
      targets: '.animeeffect',
      opacity: 0, 
      duration: 700, 
      easing: 'easeInOutQuad',
      offset: 4000, 
    });
  };

  return (
    <div className={styles.container}>
      <div className={`flex flex-col gap-2 bg-[#003C47] ${animationComplete ? styles.hidden : ''}`}>
        <Image
          src="/logo.svg" 
          width={380}
          height={82}
          className="animeeffect"
          alt='logo'
        />
      </div>
    </div>
  );
};

export default Splash;
