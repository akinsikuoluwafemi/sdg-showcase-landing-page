import React from 'react';
import QualityItem from './QualityItem';


export default function QualityList({ projects, onProjectSelect }) {
    const renderedList = projects.map(project => (
        <QualityItem project={project} />
    ))
    
    
    return (
        <div className="project-card-container">

            {renderedList}

        </div>
    )
}
