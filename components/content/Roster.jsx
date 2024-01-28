// Roster.js

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PlayerOverlay from './PlayerOverlay';

const players = [
    {
        photo: '/images/boys/abiraju.webp',
        name: 'abiraju',
        fullname: 'Андрей "abiraju" Сергин',
        role: 'Rifler',
        socialMedia: ['https://vk.com/abirajucs'],
        performance: 'Выступает за ILIN с ноября 2022 года',
        hometown: 'Родной город - Якутск',
        birthdate: 'Дата рождения: 21 мая 2002',
        favoriteWeapon: 'Любимое оружие - DESERT EAGLE',
        favoriteMap: 'Любимая карта - Mirage',
    },
    {
        photo: '/images/boys/fineshine.webp',
        name: 'fineshine',
        fullname: 'Иван "fineshine" Лукин',
        role: 'Sniper',
        socialMedia: ['https://vk.com/fineshine666'],
        performance: 'Выступает за ILIN с ноября 2023 года',
        hometown: 'Родной город - Якутск',
        birthdate: 'Дата рождения: 3 декабря 2004',
        favoriteWeapon: 'Любимое оружие - AWP',
        favoriteMap: 'Любимая карта - Anubis',
    },
    {
        photo: '/images/boys/aviva.webp',
        name: 'aviva',
        fullname: 'Валерий "aviva" Николаев',
        role: 'IGL/rifler',
        socialMedia: ['https://vk.com/6a06a6'],
        performance: 'Выступает за ILIN с ноября 2022 года',
        hometown: 'Родной город - Якутск',
        birthdate: 'Дата рождения: 6 сентября 2002',
        favoriteWeapon: 'Любимое оружие - AK-47',
        favoriteMap: 'Любимая карта - Anubis',
    },
    {
        photo: '/images/boys/zara.webp',
        name: 'bogemtdard',
        fullname: 'Николай "bogemtdarf" Заровняев',
        role: 'Rifler',
        socialMedia: ['https://vk.com/bogemtdarfpage'],
        performance: 'Выступает за ILIN с ноября 2022 года',
        hometown: 'Родной город - Якутск',
        birthdate: 'Дата рождения: 5 мая 1998',
        favoriteWeapon: 'Любимое оружие - DESERT EAGLE',
        favoriteMap: 'Любимая карта - Inferno',
    },
    {
        photo: '/images/boys/lampada.webp',
        name: 'lampada',
        fullname: 'Марк "lampada" Иванов',
        role: 'Rifler',
        socialMedia: ['https://vk.com/fineshine52'],
        performance: 'Выступает за ILIN с ноября 2022 года',
        hometown: 'Родной город - Якутск',
        birthdate: 'Дата рождения: 10 марта 2004',
        favoriteWeapon: 'Любимое оружие - ZEUS x27',
        favoriteMap: 'Любимая карта - Cache',
    },
];

const Roster = () => {
    const [activePlayer, setActivePlayer] = useState(null);

    const handlePlayerClick = (index) => {
        setActivePlayer(index);
    };

    const handleCloseOverlay = () => {
        setActivePlayer(null);
    };

    return (
        <div  className="flex flex-col relative">
            <div className="flex justify-center gap-4">
                {players.map((player, index) => (
                    <div key={index} className='flex flex-col'>
                    <div
                        key={index}
                        className="w-[350px] overflow-hidden rounded-lg cursor-pointer shadow-2xl border border-white relative bg-black bg-opacity-50"
                        onClick={() => handlePlayerClick(index)}
                    >
                        <motion.div
                            whileHover="hover"
                            variants={{
                                hover: {
                                    scale: 1.1,
                                    transition: {
                                        duration: 0.5,
                                        ease: 'easeInOut',
                                    },
                                },
                            }}
                        >
                            <img
                                src={player.photo}
                                alt={`Photo ${index + 1}`}
                                width={400}
                                height={300}
                                layout="responsive"
                                className="w-full h-auto"
                            />
                        </motion.div>
                        
                    </div>
                    <div className="text-center galderregular tracking-widest text-2xl text-white mt-2">{player.name}</div>
                    </div>
                ))}
            </div>
            {activePlayer !== null && (
                <PlayerOverlay
                isOpen={activePlayer !== null}
                onClose={handleCloseOverlay}
                fullname={players[activePlayer].fullname}
                role={players[activePlayer].role}
                biography={players[activePlayer].biography}
                socialMedia={players[activePlayer].socialMedia}
                performance={players[activePlayer].performance}
                hometown={players[activePlayer].hometown}
                birthdate={players[activePlayer].birthdate}
                favoriteWeapon={players[activePlayer].favoriteWeapon}
                favoriteMap={players[activePlayer].favoriteMap}
                photo={players[activePlayer].photo}
            />
            )}
        </div>
    );
};

export default Roster;
