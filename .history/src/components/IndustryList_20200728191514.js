import React from 'react';
import IndustryItem from './IndustryItem';



export default function IndustryList({ projects }) {
    const renderedList = projects.map(project => (
        <HealthItem project={project} />
    ))
    
    return (
        <div>
            {projects.length}
        </div>
    )
}
