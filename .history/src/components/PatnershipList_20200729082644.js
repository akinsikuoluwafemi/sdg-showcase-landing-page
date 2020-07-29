import React from 'react';
import PatnershipItem from './PatnershipItem';



export default function PatnershipList({ projects, onProjectSelect }) {
    const renderedList = projects.map(project,i) => (
        <PatnershipItem project={project} onProjectSelect={onProjectSelect} />
    ))
    
    return (
        <div className="project-card-container">

            {renderedList}

        </div>
    )
}
