import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaLinkedin, FaSoundcloud, FaGithub } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
      <img className='w-full h-screen object-cover scale-x-[-1]' src="https://images.unsplash.com/photo-1540198163009-7afda7da2945?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Davis Weimer</h1>
          <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
            
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
              3000
              ]}
              wrapper="div"
              speed={50}
              style={{ fontSize: '1em', display: '5px' }}
              repeat={Infinity}
            />
          </h2>
          <div className='flex justify-between pt-6 max-w-[125px] w-full'>
            <FaLinkedin className='cursor-pointer' size={20}/>
            <FaGithub className='cursor-pointer' size={20}/>
            <FaSoundcloud className='cursor-pointer' size={20}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main