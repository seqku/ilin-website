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
      duration: 1000, // Продолжительность для одного вращения
      complete: () => {
        // Устанавливаем состояние, что анимация завершена
        setAnimationComplete(true);
      },
    });

    // Создаем 4 анимации вращения
    for (let i = 0; i < 3; i++) {
      timeline.add({
        targets: '.animeeffect',
        rotateY: `+=360deg`, // Добавляем 360 градусов к текущему углу
        duration: 1000, // Продолжительность каждого вращения
      });
    }

    // Анимация плавного исчезновения
    timeline.add({
      targets: '.animeeffect',
      opacity: 0, // Плавное исчезновение
      duration: 700, // Продолжительность исчезновения
      easing: 'easeInOutQuad',
      offset: 4000, // Задержка перед началом этой анимации
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
        />
      </div>
    </div>
  );
};

export default Splash;
