import React from 'react';
import QualityItem from './QualityItem';


export default function QualityList({ projects }) {
    const renderedList = projects.map(project => (
        <QualityItem project={project} />
    ))
    
    
    return (
        <div>
            {projects.length}
        </div>
    )
}
