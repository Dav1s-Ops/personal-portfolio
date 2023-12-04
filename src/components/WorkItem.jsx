import React from 'react'

const WorkItem = ({ year, title, duration, details, company, website }) => {
  return (
    <ol className='font-mussels ml-5 mr-5 flex flex-col md:flex-row relative border-l  border-stone-200'>
      <li className='mb-10 ml-4'>
        <div className='absolute w-3 h-3 bg-stone-200 rounded-full  -left-1.5 border-white' />
          <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
            <span className='inline-block px-2 py-1 font-semibold text-alien_green bg-dark_gray rounded-md'>{year}</span>
            <span className='text-lg font-semibold text-dark_gray'>{title}</span>
            <span className='my-1 text-sm font-normal leading-none text-stone-400'>{duration}</span>
          </p>
          <div className='mt-4 text-s md:text-sm text-md font-semibold text-dark_gray'>
            <a 
              className='mt-4 cursor-pointer hover:scale-105 ease-in duration-200 
                        hover:bg-dark_gray hover:text-alien_green hover:px-2 hover:py-2 
                        hover:rounded-md' 
              href={website}>
              {company}
            </a>
          </div>
          <p className='my-2 text-base font-normal text-stone-500'>
            {details}
          </p>
      </li>
    </ol>
  )
}

export default WorkItem