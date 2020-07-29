import React from 'react';
import DecentItem from './DecentItem';

export default function DecentList({ projects }) {
    const renderedList = projects.map(project => (
        <DecentItem project={project} />
    ))
    
    return (
        <div className="project-card-container">

            {renderedList}

        </div>
    )
}
