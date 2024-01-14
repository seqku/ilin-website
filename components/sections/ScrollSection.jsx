import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Ilin } from "../content/Ilin";
import Roster from "../content/Roster";


function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {

      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section flex justify-end">            
          </div>
          
          <div className="scroll-section-about backdrop-blur border-l-[2px]">
            <Ilin />           
              <div className="flex flex-col gap-6 w-[620px] p-6">
                <h3 className="galder text-[96px] text-white">О клубе</h3>
                  <div className="flex flex-col gap-8 helvetica text-white text-[18px] tracking-widest">
                    <p>Проект ILIN Esports был запущен в 2022 году с целью создать одну из первых полностью профессиональных киберспортивных команд из Якутии. Цель организации — соревноваться как на местной, так и на международной киберспортивной арене.</p>
                    <p>В конце 2022 года CEO ILIN Esports, Олег Кимович собрал перспективных игроков по дисциплине Counter-Strike из Якутии в одну команду и перевез ребят на буткемп в Санкт-петербург для лучших результатов. Спустя пару месяцев, после адаптации к жизни в новом городе, команда набралась опыта, и начала показывать хорошую игру на профессиональной арене европейского масштаба.</p>
                    <p>ILIN Esports работает с талантами, развивает их игровой и личностный профиль, привносит элементы профессиональной организации, чтобы игроки имели наилучшие условия и помогали команде подняться на вершину. Более подробную информацию о ILIN Esports можно найти здесь, на сайте и в социальных сетях команды.</p>
                  </div>
              </div>
          </div>
          <div className="scroll-section-roster backdrop-blur border-l-[2px]">
            <div className="p-6">
              <h3 className="galder text-[96px] text-white">Состав по Counter-Strike</h3>
                <div className="p-16">
                  <Roster />
                </div>
            </div>
          </div>

          <div className="scroll-section border-l-[2px] border-white backdrop-blur">          
            <div className="flex flex-col pl-6 w-[550px] gap-8 helvetica text-white text-[18px] tracking-widest">
              <h3 className="galder text-[96px] text-white">Новости</h3>
                <p>Здесь вы всегда найдете самую актуальную информацию о наших предстоящих матчах, достижениях и важных событиях. </p>
                <p>Мы стараемся держать вас в курсе всех значимых моментов в жизни нашей команды.</p>
            </div>
            <div className="flex pl-6 flex-col w-[550px] gap-8 helvetica text-white text-[18px] tracking-widest">
              <h3 className="galder text-[96px] text-white">Сообщество</h3>
                <p>Присоединяйтесь к нашему сообществу в VK. Мы активно ведем нашу группу в VK, где вы можете найти эксклюзивный контент, опросы и обсуждения.</p>
                <p>Присоединяйтесь к нам! Чтобы быть в курсе всех событий и общаться с другими фанатами.</p>
                <p>Следите за обновлениями, и до встречи на матчах!</p>
                  <a href=""></a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;