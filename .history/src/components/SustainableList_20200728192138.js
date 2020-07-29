import React from 'react';
import SustainableItem from './SustainableItem';


export default function SustainableList({ projects }) {
    const renderedList = projects.map(project => (
        <QualityItem project={project} />
    ))
    
    return (
        <div>
            {projects.length}
        </div>
    )
}
