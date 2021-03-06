import React from 'react';
import ZeroHungerItem from './ZeroHungerItem';





export default function ZeroHungerList({ projects, onProjectSelect}) {
    
    const renderedList = projects.map((project, i) => (
        <ZeroHungerItem key={} project={project} onProjectSelect={onProjectSelect} />
    ))

    return (
        <div className="project-card-container">
            {renderedList}
        </div>
    )
}
