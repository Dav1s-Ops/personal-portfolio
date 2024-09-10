import React from 'react';
import ProjectItem from './ProjectItem';
import projectList from '../assets/project-data';

const Projects = ({ soundEnabled, playSound, blipHoverSound, blipClickSound }) => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto xl:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-mussels-bold text-center text-dark_gray'>Projects</h1>
      <p className='font-mussels text-center py-8'>
        Here are some personal and group projects I'd like to highlight. Whether I'm working solo or collaborating, coding is one of my favorite passions. I'm always pushing myself to learn challenging new concepts and technologies. If you'd like to work on a project with me or are interested to learn more about a featured project, don't hesitate to reach out through the contact form below!
      </p>
      <div className='grid sm:grid-cols-2 gap-12'>
        {projectList.map((project, index) => (
          <ProjectItem
            key={index}
            img={project.img}
            title={project.title}
            framework={project.framework}
            belink={project.belink}
            felink={project.felink}
            link={project.link}
            soundEnabled={soundEnabled}
            playSound={playSound}
            blipHoverSound={blipHoverSound}
            blipClickSound={blipClickSound}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;