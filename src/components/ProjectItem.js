import React from 'react';

function ProjectItem({image, name, price}) {
  return (
    <div className='projectItem'>
      <div style={{backgroundImage: `url(${image})`}}></div>
      <h1>{name}</h1>
      <p>${price}</p>
    </div>
  );
}

export default ProjectItem;
