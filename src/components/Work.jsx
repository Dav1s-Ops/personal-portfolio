import React from 'react'
import WorkItem from './WorkItem'

const data = [
  {
    year: '2023 - Present',
    title: 'Software Engineer',
    company: 'Coming soon...',
    duration: 'Current',
    details: 'Beginning my journey into Fullstack Software Engineering after completing the Backend Engineering program at Turing School of Software & Design.',
    list: ['Languages: HTML5, CSS3, Ruby, JavaScript, C++', 'Frameworks/Technology: Rails, React PostgreSQL, GraphQL, Node.js, Bootstrap, Vite, Tailwind', 'Development Tools: VSCode, Git, Postman']
  },
  {
    year: 2022,
    title: 'Integration Technician',
    company: 'Brown Note Productions',
    website: 'https://brownnote.com/integration/services/',
    duration: '1 year',
    details: 'I returned to Brown Note Productions and joined the Integration Department. My role involved a variety of responsibilities including networking, AVL shipping and receiving, and AVL rack building and design. My primary focus was on optimizing these designs and hardware environments. Additionally, I oversaw on-site deployment, successfully managing hardware and software installations.',
    list: ['Networking: Designed efficient communication solutions.', 'AVL Shipping/Receiving: Ensured timely component delivery for project deadlines.', 'AVL Rack Building/Design: Optimized software hardware environments.', 'On-Site Deployment: Managed successful hardware and software installations.']
  },
  {
    year: 2021,
    title: 'Studio Engineer',
    company: 'Evergroove Studio',
    website: 'https://www.evergroove.com/',
    duration: '2 years',
    details: 'I had the opportunity to work with Brad Smalling at his Recording Studio in Evergreen, CO. During my time there, I played a key role in upgrading the studio to a comprehensive Audio over IP (AoIP) Dante Atmos system. My responsibilities also included ensuring high-quality recording sessions in Pro Tools. I enjoyed connecting with the artists and actively giving and recieving feedback during the mixing/recording process. My experience extended to working with different audio codecs, including both stereo and advanced formats like Dolby Atmos (7.1.4).',
    list: ['Pro Tools: Ensured high-quality recording sessions, leading to successful project executions.', 'Feedback: Enhanced project outcomes by soliciting and incorporating client feedback during mixing.', 'Audio Technology: Experience with different Audio Codecs, including stereo and Dolby Atmos (7.1.4)']
  },
  {
    year: 2020,
    company: 'Itchy-O',
    website: 'https://itchyo.com/',
    title: 'FOH Engineer',
    duration: '2 years',
    details: "During the pandemic, I collaborated with Itchy-O to organize and run audio for 'Drive-in' Sypherlot performances around Denver. This unique project also involved recording, mixing, and mastering the Sypherlot shows. My role was crucial in RF coordination, where I used WB6 to scan, deploy, and monitor over 20 channels of audio RF. Additionally, I handled the soundcheck and mixed the shows, as well as managed monitor mixes for the musicians, which was always a blast since the shows were wildy unpredictable at times!",
    list: ['RF Coordination: Used WB6 to scan, deploy and monitor 20+ channels of audio RF.', 'Mixing: Handle soundcheck and mixed shows as well as monitor mixes for musicians.'] 
  },
  {
    year: 2018,
    company: 'Brown Note Productions',
    website: 'https://brownnote.com/',
    title: 'A2 - Audio Technician',
    duration: '2 years',
    details: "I specialized in Audio and had the opportunity to work at both local and national festivals and shows, including notable events like the X Games, Global Dance, and Chicago Open Air. My expertise was utilized in various areas, starting with repairing and testing speakers under tight deadlines. I also built professional audio packages, tailored specifically to each client, incorporating equipment preferences when available. On site, I flew line-array systems and helped time align the system before the shows.",
    list: ['Repaired speakers: Enhanced sound quality by resolving audio issues in speakers.', 'Built comprehensive Audio Packages: Increased client satisfaction through tailored Audio Packages.', 'Loaded / unloaded trucks: Improved setup times and productivity in equipment logistics.', 'Flew Line-array systems: Optimized audience audio experience with PA system positioning.'] 
  }
]

const Work = () => {
  return (
    <div id='work' className='max-w-[1440px] m-auto xl:pl-20 p-4 py-16'>
      <h1 className='font-mussels-bold text-4xl mb-10 text-center text-dark_gray'>Work // Skills</h1>
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
      <div className='flex flex-col gap-4 m-auto lg:flex-row justify-evenly text-lg lg:text-xl'>
        <div className='flex flex-col items-center justify-evenly p-4 text-white bg-dark_gray rounded-l-3xl rounded outline outline-alien_green outline-3 shadow-xl shadow-gray-400'>
          <div className='flex items-center justify-start gap-2'>
          <h4 className='font-mussels'>Languages</h4>
            <img src="https://skillicons.dev/icons?i=ruby,js,cpp" alt="My languages"/>
          </div>
        </div>
        <div className='flex flex-col items-center justify-evenly p-4 text-white bg-dark_gray rounded-tl-3xl rounded-br-3xl lg:rounded outline outline-alien_green outline-3 shadow-xl shadow-gray-400'>
          <div className='flex items-center justify-start gap-2'>
            <h4 className='font-mussels'>Technologies</h4>
            <img src="https://skillicons.dev/icons?i=rails,react,postgres,graphql,nodejs,bootstrap,vite,tailwind&perline=4" alt="My frameworks"/>
          </div>
        </div>
        <div className='flex flex-col items-center justify-evenly p-4 text-white bg-dark_gray rounded-r-3xl rounded outline outline-alien_green outline-3 shadow-xl shadow-gray-400'>
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