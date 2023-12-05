import React from 'react'

const ProjectItem = ({img, title, link, framework}) => {
  return (
    <div className='font-mussels relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group ease-in duration-200 hover:bg-gradient-to-r from-gray-400 to-dark_gray'>
      <img src={img} alt={title} className='m-auto h-full w-full rounded-xl group-hover:opacity-10'/>
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h3 className='text-2xl font-mussels-bold text-white tracking-wider text-center'>
          {title}
        </h3>
        <p className='pb-4 pt-2 text-white text-center'>{framework}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <p className='text-center p-3 rounded-lg bg-white text-gray-700 text-md hover:scale-105 ease-in duration-200 hover:bg-dark_gray hover:text-alien_green hover:px-3 hover:py-3 hover:rounded-md' >More Info</p>
        </a>
      </div>
    </div>

  )
}

export default ProjectItem