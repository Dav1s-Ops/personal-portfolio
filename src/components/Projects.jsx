import React from 'react'
import ProjectItem from './ProjectItem'
import RefugeeAidImg from '../assets/RefugeeAid.png'
import LabelLensImg from '../assets/LabelLens.png'
import CodingImg from '../assets/coding.avif'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-mussels-bold text-center text-dark_gray'>Projects</h1>
      <p className='font-mussels text-center py-8'>
        Here are some personal and group projects I'd like to highlight. Whether I'm working solo or collaborating, coding is one of my favorite passions. I'm always pushing myself to learn challenging new concepts and technologies. If you'd like to work on a project with me or are interested to learn more about a project below, don't hesitate to reach out through the contact form below!
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        <ProjectItem 
          img={RefugeeAidImg}
          title='Refugee Aid'
          framework='React JS'
          link='https://refugee-aid-fe.vercel.app/'
        />
        <ProjectItem 
          img={LabelLensImg}
          title='Label Lens'
          framework='Ruby on Rails'
          link={'https://label-lens.onrender.com/'}
          />
        <ProjectItem 
          img={CodingImg}
          title='Sweater Whether API'
          framework='Ruby on Rails'
          link={'https://github.com/DavisWeimer/whether_sweater_api'}
          />
        <ProjectItem 
          img={CodingImg}
          title='Simple MB Compressor'
          framework='C++'
          link={'https://github.com/DavisWeimer/SimpleMBComp'}
        />
      </div>
    </div>
  )
}

export default Projects