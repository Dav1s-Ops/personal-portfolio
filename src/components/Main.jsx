import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedin, FaSoundcloud, FaGithub } from 'react-icons/fa'
import Greydient from '../assets/ffflux-gray-green.svg'
import Spiral from '../assets/oooscillate-green.svg'

const Main = () => {
  return (
    <div id='main'>
      <div className="relative w-full h-screen">
        <img className="absolute inset-0 w-full h-full object-cover scale-x-[-1]" src={Greydient} />
        <img className="absolute inset-0 w-full h-full object-cover scale-x-[-1]" src={Spiral} alt="Description of Spiral Image" />
      </div>
      <div className='w-full h-screen absolute top-0 left-0 bg-white/20'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='font-mussels-bold sm:text-7xl text-4xl text-dark_gray'>DAVIS WEIMER</h1>
          <h2 className='flex font-mussels sm:text-4xl text-2xl pt-4 text-white'>
            
            <TypeAnimation
              sequence={[
              // Same substring at the start will only be typed out once, initially
              'Software Engineer',
              3000, // wait 1s before replacing "Mice" with "Hamsters"
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
              speed={50}
              style={{ fontSize: '1em', display: '5px' }}
              repeat={Infinity}
            />
          </h2>
          <div className='flex justify-between pt-8 max-w-[160px] w-full'>
            <a className='hover:translate-y-1 ease-in duration-200 hover:opacity-75 hover:bg-alien_green' href="https://www.linkedin.com/in/davis-weimer" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='cursor-pointer' style={{ color: '#303030' }} size={30}/>
            </a>
            <a className='hover:translate-y-1 ease-in duration-200 hover:opacity-75 hover:bg-alien_green' href="https://github.com/DavisWeimer" target="_blank" rel="noopener noreferrer">
              <FaGithub className='cursor-pointer' style={{ color: '#303030' }} size={30}/>
            </a>
            <a className='hover:translate-y-1 ease-in duration-200 hover:opacity-75 hover:bg-alien_green' href="https://soundcloud.com/berrik" target="_blank" rel="noopener noreferrer">
              <FaSoundcloud className='cursor-pointer' style={{ color: '#303030' }} size={30}/>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Main