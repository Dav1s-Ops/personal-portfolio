import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedin, FaSoundcloud, FaGithub } from 'react-icons/fa'
import { FaMixcloud } from "react-icons/fa6";
import { SiDiscogs } from "react-icons/si";
import Greydient from '../assets/ffflux-gray-green.svg'
import Spiral from '../assets/oooscillate-green.svg'
import DwLogo from '../assets/Davis-Weimer-gray-cropped.svg'

const Main = () => {
  return (
    <div id='main'>
      <div className="relative w-full h-screen">
        <img className="absolute inset-0 w-full h-full object-cover scale-x-[-1]" src={Greydient} />
        <img className="absolute inset-0 w-full h-full object-cover scale-x-[-1]" src={Spiral} />
      </div>
      <div className='w-full h-screen absolute top-0 left-0 bg-white/10'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center md:items-start items-center'>
          
          <img className='w-10/12 md:w-full self-right mb-6' src={DwLogo} style={{ color: '#303030' }} />

          <h2 className='flex justify-center font-mussels md:text-4xl text-1xl ml-1 md:p-4 p-1  text-white rounded-full w-7/12 bg-dark_gray md:justify-start'>
            <TypeAnimation
              sequence={[
                'Software Engineer',
                3000,
                'Software Developer',
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
            <a className='hover:translate-y-1 m-1 md:m-3 py-1 px-1 rounded-lg ease-in duration-200 bg-dark_gray hover:bg-gray-500' href="https://www.linkedin.com/in/davis-weimer" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='cursor-pointer' style={{ color: '#A4F236' }} size={30}/>
            </a>
            <a className='hover:translate-y-1 m-1 md:m-3 py-1 px-1 rounded-lg ease-in duration-200 bg-dark_gray hover:bg-gray-500' href="https://github.com/DavisWeimer" target="_blank" rel="noopener noreferrer">
              <FaGithub className='cursor-pointer' style={{ color: '#A4F236' }} size={30}/>
            </a>
            <a className='hover:translate-y-1 m-1 md:m-3 py-1 px-1 rounded-lg ease-in duration-200 bg-dark_gray hover:bg-gray-500' href="https://soundcloud.com/berrik" target="_blank" rel="noopener noreferrer">
              <FaSoundcloud className='cursor-pointer' style={{ color: '#A4F236' }} size={30}/>
            </a>
            <a className='hover:translate-y-1 m-1 md:m-3 py-1 px-1 rounded-lg ease-in duration-200 bg-dark_gray hover:bg-gray-500' href="https://www.mixcloud.com/da-5k/" target="_blank" rel="noopener noreferrer">
              <FaMixcloud className='cursor-pointer' style={{ color: '#A4F236' }} size={30}/>
            </a>
            <a className='hover:translate-y-1 m-1 md:m-3 py-1 px-1 rounded-lg ease-in duration-200 bg-dark_gray hover:bg-gray-500' href="https://www.discogs.com/user/BerrikDub" target="_blank" rel="noopener noreferrer">
              <SiDiscogs className='cursor-pointer' style={{ color: '#A4F236' }} size={30}/>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Main