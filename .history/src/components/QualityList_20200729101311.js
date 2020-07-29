import React from 'react';
import QualityItem from './QualityItem';


export default function QualityList({ projects, onProjectSelect }) {
    const renderedList = projects.map((project,i) => (
        <QualityItem project={project} onProjectSelect={onProjectSelect} key={i} />
    ))
    
    
    return (
        <div className="project-card-container">

            {renderedList}

        </div>
    )
}
