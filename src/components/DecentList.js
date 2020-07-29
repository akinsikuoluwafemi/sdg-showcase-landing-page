import React from 'react';
import DecentItem from './DecentItem';

export default function DecentList({ projects, onProjectSelect }) {
    const renderedList = projects.map((project,i) => (
        <DecentItem key={i} project={project} onProjectSelect={onProjectSelect} />
    ))
    
    return (
        <div className="project-card-container">

            {renderedList}

        </div>
    )
}
