import React from 'react';
import ZeroHungerItem from './ZeroHungerItem';





export default function ZeroHungerList({projects}) {
    
    const renderedList = projects.map(project => (
        <ZeroHungerItem project={project} />
    ))

    return (
        <div className="project-card-container">
            {renderedList}
        </div>
    )
}
