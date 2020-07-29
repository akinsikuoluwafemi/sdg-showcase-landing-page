import React from 'react';
import SustainableItem from './SustainableItem';


export default function SustainableList({ projects, onProjectSelect }) {
    const renderedList = projects.map((project,i) => (
        <SustainableItem key={i} projects={project} onProjectSelect={onProjectSelect} />
    ))
    
    return (
        <div className="project-card-container">

            {renderedList}

        </div>
    )
}
