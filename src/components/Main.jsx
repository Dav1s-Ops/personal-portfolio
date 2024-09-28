import React, { useRef, useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FaLinkedin, FaSoundcloud, FaGithub } from 'react-icons/fa'
import { FaMixcloud } from "react-icons/fa6";
import { SiDiscogs } from "react-icons/si";
import Greydient from '../assets/ffflux-gray-green.svg'
import Spiral from '../assets/oooscillate-green.svg'
import DwLogo from '../assets/drw-logo-circle-x-cropped.svg'

const Main = ({ soundEnabled, playSound, hoverSound, clickSound }) => {
  const { scrollY } = useScroll();
  
  const greydientY = useTransform(scrollY, [0, 1000], [0, 200]);
  const spiralY = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <div id='main'>
      <div className="relative w-full h-screen overflow-hidden">
        <motion.img 
          className="absolute inset-0 w-full h-full object-cover" 
          src={Greydient} 
          style={{ y: greydientY }}
        />
        <motion.img 
          className="absolute inset-0 w-full h-full object-cover" 
          src={Spiral} 
          style={{ y: spiralY }}
        />
      </div>
      <div className='w-full h-screen absolute top-0 left-0 bg-white/10'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center md:items-start items-center'>
          <img className='w-10/12 translate-x-4 mb-2 md:translate-y-4 md:w-full self-right' src={DwLogo} style={{ color: '#303030' }} />
          <h2 className='flex justify-center font-mussels md:text-4xl text-1xl ml-1 md:p-4 p-1  text-white rounded-full w-7/12 bg-[#161616]/80 backdrop-blur-md md:justify-start'>
            <TypeAnimation
              sequence={[
                'Software Engineer',
                3000,
                'UI/UX Designer',
                3000,
                'DevOps Engineer',
                3000,
                'Graphic Designer',
                3000,
                'Audio Engineer',
                3000,
                'DJ',
                3000,
                'Producer',
                3000,
                'Sound Designer',
                3000
              ]}
              wrapper="div"
              speed={40}
              style={{ fontSize: '1em' }}
              repeat={Infinity}
            />
          </h2>
          <div className='flex justify-center md:justify-between pt-6 max-w-[160px] w-full'>
          <a
              className='hover:translate-y-1 m-1 md:m-3 py-1 px-1 rounded-lg ease-in duration-200 bg-[#161616]/80 backdrop-blur-md hover:bg-gradient-to-b hover:to-light_gray hover:from-light_gray'
              href="https://www.linkedin.com/in/davis-weimer"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundEnabled && playSound(hoverSound)}
              onClick={() => soundEnabled && playSound(clickSound)}
            >
              <FaLinkedin className='cursor-pointer' style={{ color: '#A4F236' }} size={30} />
            </a>
            <a
              className='hover:translate-y-1 m-1 md:m-3 py-1 px-1 rounded-lg ease-in duration-200 bg-[#161616]/80 backdrop-blur-md hover:bg-gradient-to-b hover:to-light_gray hover:from-light_gray'
              href="https://github.com/Dav1s-Ops"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundEnabled && playSound(hoverSound)}
              onClick={() => soundEnabled && playSound(clickSound)}
            >
              <FaGithub className='cursor-pointer' style={{ color: '#A4F236' }} size={30} />
            </a>
            <a
              className='hover:translate-y-1 m-1 md:m-3 py-1 px-1 rounded-lg ease-in duration-200 bg-[#161616]/80 backdrop-blur-md hover:bg-gradient-to-b hover:to-light_gray hover:from-light_gray'
              href="https://soundcloud.com/berrik"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundEnabled && playSound(hoverSound)}
              onClick={() => soundEnabled && playSound(clickSound)}
            >
              <FaSoundcloud className='cursor-pointer' style={{ color: '#A4F236' }} size={30} />
            </a>
            <a
              className='hover:translate-y-1 m-1 md:m-3 py-1 px-1 rounded-lg ease-in duration-200 bg-[#161616]/80 backdrop-blur-md hover:bg-gradient-to-b hover:to-light_gray hover:from-light_gray'
              href="https://www.mixcloud.com/da-5k/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundEnabled && playSound(hoverSound)}
              onClick={() => soundEnabled && playSound(clickSound)}
            >
              <FaMixcloud className='cursor-pointer' style={{ color: '#A4F236' }} size={30} />
            </a>
            <a
              className='hover:translate-y-1 m-1 md:m-3 py-1 px-1 rounded-lg ease-in duration-200 bg-[#161616]/80 backdrop-blur-md hover:bg-gradient-to-b hover:to-light_gray hover:from-light_gray'
              href="https://www.discogs.com/user/BerrikDub"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundEnabled && playSound(hoverSound)}
              onClick={() => soundEnabled && playSound(clickSound)}
            >
              <SiDiscogs className='cursor-pointer' style={{ color: '#A4F236' }} size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;