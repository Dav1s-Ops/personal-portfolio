import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { IoMdSchool } from 'react-icons/io';
import { FaBriefcase } from 'react-icons/fa';

const WorkItem = ({
  year,
  title,
  duration,
  details,
  company,
  website,
  list,
  inSchool,
}) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: 'linear-gradient(to bottom, #3c3c3c, #303030)',
        padding: '20px',
        borderRadius: '24px',
        border: '3px solid #A4F236',
        boxShadow:
          '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
      }}
      contentArrowStyle={{ borderRight: '13px solid #A4F236' }}
      lineColor={'#A4F236'}
      date={
        <span className="text-xl lg:text-dark_gray text-alien_green">
          {year}
        </span>
      }
      iconStyle={{ background: '#303030', color: '#A4F236' }}
      icon={inSchool ? <IoMdSchool /> : <FaBriefcase />}
      iconClassName="bg-dark_gray shadow-lg shadow-gray-400 outline outline-alien_green outline-4"
    >
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <a
        className="mt-4 cursor-pointer text-alien_green hover:scale-105 ease-in duration-200 hover:text-underlined"
        href={website}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        {company}
      </a>
      <h5 className="my-1 text-sm font-normal leading-none text-stone-400">
        {duration}
      </h5>
      <p className="text-stone-300">{details}</p>
      {list && (
        <div className="flex justify-start items-center">
          <img className="mt-4 w-40" src={list} alt="languages/tech" />
        </div>
      )}
    </VerticalTimelineElement>
  );
};

export default WorkItem;