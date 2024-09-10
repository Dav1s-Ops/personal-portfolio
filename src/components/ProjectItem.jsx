import React from 'react'

const ProjectItem = ({img, title, link, belink, felink, framework, soundEnabled, playSound, blipHoverSound, blipClickSound}) => {
  return (
    <div className='font-mussels relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-t from-alien_green to-dark_gray hover:outline hover:outline-2 hover:outline-offset-1 hover:outline-alien_green'>
      <img src={img} alt={title} className='m-auto h-[300px] w-full object-cover rounded-xl group-hover:opacity-10'/>
      <div className='hidden w-7/12 group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl font-mussels-bold text-white tracking-wider text-center'>
          {title}
        </h3>
        <p className='lg:pb-4 pt-2 text-white text-center'>{framework}</p>
        {link &&
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => soundEnabled && playSound(blipClickSound)}
            onMouseEnter={() => soundEnabled && playSound(blipHoverSound)}
          >
          <p className='text-center p-0.5 lg:p-2 rounded-lg mt-1 bg-dark_gray text-alien_green text-md hover:scale-105 duration-300 hover:bg-med_gray lg:hover:py-2' >Website</p>
        </a>}
        {belink &&
          <a 
            href={belink} 
            target="_blank" 
            el="noopener noreferrer"
            onClick={() => soundEnabled && playSound(blipClickSound)}
            onMouseEnter={() => soundEnabled && playSound(blipHoverSound)}
          >
          <p className='text-center p-0.5 lg:p-2 rounded-lg mt-1 bg-dark_gray text-alien_green text-md hover:scale-105 duration-300 hover:bg-med_gray lg:hover:py-2' >BE Repo</p>
        </a>}
        {felink &&
          <a 
            href={felink} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => soundEnabled && playSound(blipClickSound)}
            onMouseEnter={() => soundEnabled && playSound(blipHoverSound)}
          >
          <p className='text-center p-0.5 lg:p-2 rounded-lg mt-1 bg-dark_gray text-alien_green text-md hover:scale-105 duration-300 hover:bg-med_gray lg:hover:py-2' >FE Repo</p>
        </a>}
      </div>
    </div>

  )
}

export default ProjectItem