import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { data } from '../assets/data.js';
import WorkItem from './WorkItem'; // Adjust the import path if necessary


const Work = () => {
  return (
    <div id='work' className='max-w-[1440px] m-auto xl:pl-20 p-4 py-16'>
      <h1 className='font-mussels-bold text-4xl mb-10 text-center text-dark_gray'>Work // Skills</h1>
      <VerticalTimeline className="font-mussels" lineColor="#A4F236">
        {data.map((work, i) => (
          <WorkItem
            key={i}
            year={work.year}
            title={work.title}
            duration={work.duration}
            details={work.details}
            company={work.company}
            website={work.website}
            list={work.list}
            inSchool={work.inSchool}
          />
        ))}
      </VerticalTimeline>
      <div className='flex flex-col gap-4 m-auto lg:flex-row justify-evenly text-lg lg:text-xl'>
        <div className='flex flex-col items-center justify-evenly p-4 text-white bg-gradient-to-b to-dark_gray from-med_gray rounded-l-3xl rounded outline outline-alien_green outline-4 shadow-lg shadow-gray-400'>
          <div className='flex items-center justify-start gap-2'>
            <h4 className='font-mussels'>Languages</h4>
            <img src="https://skillicons.dev/icons?i=ruby,js,cpp" alt="My languages"/>
          </div>
        </div>
        <div className='flex flex-col items-center justify-evenly p-4 text-white bg-gradient-to-b to-dark_gray from-med_gray rounded-tl-3xl rounded-br-3xl lg:rounded outline outline-alien_green outline-4 shadow-lg shadow-gray-400'>
          <div className='flex items-center justify-start gap-2'>
            <h4 className='font-mussels sm:text-xl'>
              <span className='hidden sm:inline'>Technologies</span>
              <span className='sm:hidden'>Tech</span>
            </h4>
            <img src="https://skillicons.dev/icons?i=rails,react,postgres,graphql,nodejs,bootstrap,vite,tailwind,docker,aws&perline=5" alt="My frameworks"/>
          </div>
        </div>
        <div className='flex flex-col items-center justify-evenly p-4 text-white bg-gradient-to-b to-dark_gray from-med_gray rounded-r-3xl rounded outline outline-alien_green outline-4 shadow-lg shadow-gray-400'>
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
