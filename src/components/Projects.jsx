import React from 'react'
import ProjectItem from './ProjectItem'
import RefugeeAidImg from '../assets/RefugeeAid.png'
import LabelLensImg from '../assets/LabelLens.png'
import WhetherSweater from '../assets/whether-sweater.png'
import GenreFi from '../assets/genre-fi.png'

const Projects = ({ soundEnabled, playSound, blipHoverSound, blipClickSound }) => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto xl:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-mussels-bold text-center text-dark_gray'>Projects</h1>
      <p className='font-mussels text-center py-8'>
        Here are some personal and group projects I'd like to highlight. Whether I'm working solo or collaborating, coding is one of my favorite passions. I'm always pushing myself to learn challenging new concepts and technologies. If you'd like to work on a project with me or are interested to learn more about a featured project, don't hesitate to reach out through the contact form below!
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem 
          img={WhetherSweater}
          title='Whether Sweater App'
          framework='React + Vite / / Ruby on Rails'
          belink={'https://github.com/DavisWeimer/whether_sweater_api'}
          felink={'https://github.com/DavisWeimer/whether-sweater-fe'}
          link={'https://whether-sweater-fe.vercel.app/'}
          soundEnabled={soundEnabled} 
          playSound={playSound} 
          blipHoverSound={blipHoverSound} 
          blipClickSound={blipClickSound}
          />
        <ProjectItem 
          img={GenreFi}
          title='Genre-Fi'
          framework='React'
          link={'https://genre-fi.vercel.app/'}
          felink={'https://github.com/DavisWeimer/genre-fi'}
          soundEnabled={soundEnabled} 
          playSound={playSound} 
          blipHoverSound={blipHoverSound} 
          blipClickSound={blipClickSound}
        />
        <ProjectItem 
          img={RefugeeAidImg}
          title='Refugee Aid'
          framework='React / / Ruby on Rails'
          belink={'https://github.com/Refugee-Aid-Capstone/refugee_aid_be'}
          felink={'https://github.com/Refugee-Aid-Capstone/refugee-aid-fe'}
          soundEnabled={soundEnabled} 
          playSound={playSound} 
          blipHoverSound={blipHoverSound} 
          blipClickSound={blipClickSound}
        />
        <ProjectItem 
          img={LabelLensImg}
          title='Label Lens'
          framework='Ruby on Rails'
          belink={'https://github.com/Label-Lens/label_lens_be'}
          felink={'https://github.com/Label-Lens/label_lens_fe'}
          soundEnabled={soundEnabled} 
          playSound={playSound} 
          blipHoverSound={blipHoverSound} 
          blipClickSound={blipClickSound}
          />
      </div>
    </div>
  )
}

export default Projects