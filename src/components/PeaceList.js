import React from 'react';
import PeaceItem from './PeaceItem';

export default function PeaceList({ projects, onProjectSelect }) {
    const renderedList = projects.map((project,i) => (
        <PeaceItem project={project} onProjectSelect={onProjectSelect} key={i} />
    ))
    
    return (
        <div className="project-card-container">

            {renderedList}

        </div>
    )
}
