import React from 'react'
import MeImg from '../assets/fiverr-pic.jpg'

const AboutMe = () => {
  return (
    <div id='about-me' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-mussels-bold text-center text-dark_gray'>
        About Me
      </h1>
      <div className='font-mussels text-center'>
        <p className='mb-4'>
          Howdy! I'm pleased you made it this far. 
        </p>
        <p className='mb-4'>
        My name is Davis and I'm a Software Engineer with a background in Audio Engineering. When I am not programming (or sometimes when I am) I love listening to, collecting and making music.
        </p>
        <p>
        Consider reaching out with the Contact Form below, I'd love to connect! 
        </p>
      </div>
      <div className='flex justify-center'>
      <img className='mt-6 w-48 h-48 object-cover rounded-full shadow-xl' src={MeImg} />
      </div>
    </div>
  );
};

export default AboutMe;
