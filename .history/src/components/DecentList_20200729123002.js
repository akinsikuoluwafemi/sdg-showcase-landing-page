import React from 'react';
import DecentItem from './DecentItem';

export default function DecentList({ projects, onProjectSelect }) {
    const renderedList = projects.map((project,i) => (
        <DecentItem project={project} />
    ))
    
    return (
        <div className="project-card-container">

            {renderedList}

        </div>
    )
}
