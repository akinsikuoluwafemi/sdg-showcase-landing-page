import React from 'react';
import SustainableItem from './SustainableItem';


export default function SustainableList({ projects }) {
    const renderedList = projects.map((project,i) => (
        <SustainableItem key={} project={project} />
    ))
    
    return (
        <div className="project-card-container">

            {renderedList}

        </div>
    )
}
