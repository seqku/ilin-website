// PlayerOverlay.js

import { motion } from 'framer-motion';
import Image from 'next/image';

const PlayerOverlay = ({ isOpen, onClose, fullname, role, biography, socialMedia, performance, hometown, birthdate, favoriteWeapon, favoriteMap, photo }) => {
    return (
        <motion.div
            className={`fixed md:top-0 md:left-0 md:flex md:items-center md:justify-center w-screen h-screen z-[1000] transition-opacity ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            onClick={onClose}
        >
            <div  className="border border-white rounded shadow-lg text-white w-72 h-[550px] md:h-auto md:w-96">
                <div className='flex justify-end bg-black bg-opacity-70'>
                <div onClick={onClose} className='flex cursor-pointer hover:bg-white transition ease-in-out duration-300 group items-center justify-center bg-black bg-opacity-70 border border-white w-[50px] h-[50px]'>
                <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line className=' group-hover:stroke-black' x1="1.21545" y1="0.819216" x2="21.6688" y2="25.1946" stroke="white" stroke-width="0.5625"/>
                    <line className=' group-hover:stroke-black' x1="0.886601" y1="25.5697" x2="21.34" y2="1.19432" stroke="white" stroke-width="0.5625"/>
                    </svg>
                </div>
                </div>
                <div  className="flex flex-col">
                    <div className="border-b border-white h-1/2 flex items-center justify-center bg-black bg-opacity-70">
                        <img
                            src={photo}
                            alt={`Photo ${fullname}`}
                            className='w-[150px] md:w-auto md:h-[390px]'
                        />
                    </div>
                    <div className="w-full px-8 galderregular text-[16px] bg-[#003C47] overflow-visible overflow-y-auto md:overflow-y-hidden h-[272px] md:h-auto">
                        <h2 className="text-lg pt-2 text-center font-bold mb-2 galderbold">{fullname}</h2>
                        <h3 className='galder text-3xl text-black'>РОЛЬ</h3>
                        <p className="mb-2 tracking-wide">{role}</p>
                        <h4 className='galder text-3xl text-black'>БИОГРАФИЯ</h4>
                        <p className="mb-2 tracking-wide">{performance}</p>
                        <p className="mb-2 tracking-wide">{hometown}</p>
                        <p className="mb-2 tracking-wide">{birthdate}</p>
                        <p className="mb-2 tracking-wide">{favoriteWeapon}</p>
                        <p className="mb-2 tracking-wide">{favoriteMap}</p>
                        <h5 className='galder text-3xl text-black'>СОЦИАЛЬНЫЕ СЕТИ</h5>                       
                        {socialMedia && (
                            <div className="flex mt-2 space-x-2 mb-4">
                                {socialMedia.map((link, index) => (
                                    <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">                                        
                                    <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_248_98)">
                                    <path d="M4.33213 0C1.93213 0 0 1.93213 0 4.33213V35.6679C0 38.0679 1.93213 40 4.33213 40H35.6679C38.0679 40 40 38.0679 40 35.6679V4.33213C40 1.93213 38.0679 0 35.6679 0H4.33213ZM21.1101 10.6408C21.4744 10.6391 21.948 10.704 22.2473 10.9115C22.468 11.0646 22.7582 11.2417 22.7617 11.9314C22.7734 14.1878 22.7461 16.1533 22.7798 18.4567C22.8238 18.9361 23.1353 19.135 23.4296 19.1336C23.7239 19.1321 24.0616 18.9481 24.3141 18.7004C25.6815 17.3579 27.2568 14.129 28.222 12.0126C28.5822 11.2228 29.1635 11.2735 29.8195 11.2726C32.0157 11.2693 32.9051 11.2971 34.9639 11.3087C35.3409 11.3107 35.6695 11.6292 35.7762 11.8592C35.8683 12.0579 35.9344 12.6333 35.4332 13.4477C33.8915 15.9529 32.4741 17.9703 30.7581 20.352C30.6499 20.5022 30.547 20.6813 30.5505 20.8664C30.5537 21.0357 30.6415 21.204 30.7581 21.3267C32.2881 22.9362 33.8851 24.5557 35.4513 26.3267C35.9127 26.8485 35.623 27.6535 35.4964 27.8791C35.4005 28.0499 34.9673 28.4904 34.6751 28.4928C33.6108 28.5013 33.6081 28.4928 29.1516 28.4928C28.4917 28.4928 28.2282 28.3 27.8791 27.9332C26.3339 26.3099 26.5243 26.506 24.8285 24.6931C24.6082 24.4576 24.1716 24.1617 23.7545 24.3502C23.4005 24.5102 22.7527 24.7463 22.7527 25.3971C22.7527 26.0914 22.7527 26.983 22.7527 27.6715C22.7527 28.0845 22.1045 28.3935 21.7148 28.3935C20.7948 28.3935 20.0605 28.3935 18.6823 28.3935C17.2547 28.3935 16.019 28.0493 15.3339 27.7166C12.3826 26.2835 10.628 24.2875 8.70939 20.9657C7.07109 18.1292 5.64552 15.3365 4.24188 12.4097C4.08506 12.0828 3.97363 11.3628 5.1444 11.3628C6.3813 11.3628 7.54127 11.3358 9.42238 11.3358C9.97461 11.3358 10.3181 11.4469 10.5505 11.6155C10.783 11.7841 10.8973 12.0089 11.0108 12.2202C13.3511 16.578 13.3565 16.8447 15.0271 19.0072C15.1839 19.2103 15.4101 19.241 15.5776 19.2419C15.7846 19.243 15.9761 19.2094 16.1372 19.0794C16.4754 18.8066 16.5704 18.5143 16.5704 18.0957C16.5704 16.6287 16.5704 15.5327 16.5704 13.6913C16.5704 13.1863 16.2283 12.4377 15.8484 12.2022C15.4548 11.9756 14.8078 11.7511 14.8285 11.4711C14.8512 11.1649 15.5638 10.6498 16.8321 10.6498C18.3485 10.6498 19.4233 10.6486 21.1101 10.6408Z" fill="black"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_248_98">
                                    <rect width="40" height="40" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                    </a>
                                ))}
                            </div>
                        )}
                        
                    </div>
                </div>
            </div>
        
        </motion.div>
    );
};

export default PlayerOverlay;
