import React from 'react'
import WorkItem from './WorkItem'

const data = [
  {
    year: 2023,
    title: 'Software Engineer',
    company: 'Coming soon...',
    duration: 'Current',
    details: 'Beginning my journey into Fullstack Software Engineering after completing the Backend Engineering program at Turing School of Software & Design.'
  },
  {
    year: 2022,
    title: 'Integration Technician',
    company: 'Brown Note Productions',
    website: 'https://brownnote.com/integration/services/',
    duration: '1 year',
    details: 'Joined the Integration Department are Brown Note Productions.'
  },
  {
    year: 2021,
    title: 'Studio Engineer',
    company: 'Evergroove Studio',
    website: 'https://www.evergroove.com/',
    duration: '2 years',
    details: 'Worked with Brad Smalling at his Recording Studio in Evergreen, CO. Helped upgraded the studio to a complete Audio over IP (AoIP) Dante Atmos system.'
  },
  {
    year: 2020,
    company: 'Itchy-O',
    website: 'https://itchyo.com/',
    title: 'FOH Engineer',
    duration: '2 years',
    details: "Worked with Itchy-O during the pandemic to put on 'Drive-in' Sypherlot performances around Denver as well as record, mix and master the Sypherlot shows." 
  },
  {
    year: 2018,
    company: 'Brown Note Productions',
    website: 'https://brownnote.com/',
    title: 'A2 - Audio Technician',
    duration: '2 years',
    details: "Specialized in Audio and worked local/national festivals and shows including X Games, Global Dance and Chicago Open Air." 
  }
]

const Work = () => {
  return (
    <div id='work' className='m-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='font-mussels-bold text-4xl mb-10 text-center text-dark_gray'>Work</h1>
      {data.map((work, i) => (
        <WorkItem 
          key={i}
          year={work.year}
          title={work.title}
          company={work.company}
          website={work.website}
          duration={work.duration}
          details={work.details}
        />
      ))}
    </div>
  )
}

export default Work