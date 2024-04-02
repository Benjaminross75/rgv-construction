import React from 'react';
import '../styles/Project.css'
import {constructionList} from '../helpers/ServiceList';
import ProjectItem from '../components/ProjectItem';
function Services() {
  return (
    <div className='services'>
      <h1 className='servicesTitle'>Our Services</h1>
      <div className='serviceList'>
         {constructionList.map((project, key) =>{
            return <ProjectItem
             key={key}
             image={project.image}
             name={project.name}
             price={project.price}/>
         })}
      </div>
    </div>
  );
}

export default Services;
