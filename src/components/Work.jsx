import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { IoMdSchool } from "react-icons/io";
import { FaBriefcase } from "react-icons/fa";
import 'react-vertical-timeline-component/style.min.css';
import { data } from '../assets/data.js'

const Work = () => {
  return (
    <div id='work' className='max-w-[1440px] m-auto xl:pl-20 p-4 py-16'>
      <h1 className='font-mussels-bold text-4xl mb-10 text-center text-dark_gray'>Work // Skills</h1>
      <VerticalTimeline className='font-mussels' lineColor="#A4F236">
        {data.map((work, i) => (
          <VerticalTimelineElement
            key={i}
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#303030', padding: '20px', borderRadius: '24px', border: '3px solid #A4F236', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.03)' }}
            contentArrowStyle={{ borderRight: '13px solid #A4F236' }}
            lineColor={"#A4F236"}
            date={<span className="text-xl lg:text-dark_gray text-alien_green">{work.year}</span>}
            iconStyle={{ background: '#303030', color: '#A4F236' }}
            icon={work.inSchool ? <IoMdSchool/> : <FaBriefcase />}
            iconClassName='bg-dark_gray shadow-lg shadow-gray-400 outline outline-alien_green outline-4'
          >
            <h3 className="text-xl font-bold text-white">{work.title}</h3>
            <a 
              className='mt-4 cursor-pointer text-alien_green hover:scale-105 ease-in duration-200 hover:bg-dark_gray hover:text-light_gray hover:rounded-md' 
              href={work.website} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}>
              {work.company}
            </a>
            <h5 className='my-1 text-sm font-normal leading-none text-light_gray'>{work.duration}</h5>
            <p className="text-stone-400">{work.details}</p>
            {work.list && (
              <div className='flex justify-start items-center'>
                <img className='mt-4 w-40' src={work.list} alt='languages/tech' />
              </div>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      <div className='flex flex-col gap-4 m-auto lg:flex-row justify-evenly text-lg lg:text-xl'>
        <div className='flex flex-col items-center justify-evenly p-4 text-white bg-dark_gray rounded-l-3xl rounded outline outline-alien_green outline-4 shadow-lg shadow-gray-400'>
          <div className='flex items-center justify-start gap-2'>
            <h4 className='font-mussels'>Languages</h4>
            <img src="https://skillicons.dev/icons?i=ruby,js,cpp" alt="My languages"/>
          </div>
        </div>
        <div className='flex flex-col items-center justify-evenly p-4 text-white bg-dark_gray rounded-tl-3xl rounded-br-3xl lg:rounded outline outline-alien_green outline-4 shadow-lg shadow-gray-400'>
          <div className='flex items-center justify-start gap-2'>
            <h4 className='font-mussels sm:text-xl'>
              <span className='hidden sm:inline'>Technologies</span>
              <span className='sm:hidden'>Tech</span>
            </h4>
            <img src="https://skillicons.dev/icons?i=rails,react,postgres,graphql,nodejs,bootstrap,vite,tailwind,docker,aws&perline=5" alt="My frameworks"/>
          </div>
        </div>
        <div className='flex flex-col items-center justify-evenly p-4 text-white bg-dark_gray rounded-r-3xl rounded outline outline-alien_green outline-4 shadow-lg shadow-gray-400'>
          <div className='flex items-center justify-start gap-2'>
            <h4 className='font-mussels'>Dev Tools</h4>
            <img src="https://skillicons.dev/icons?i=vscode,postman,git" alt="My development tools"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
