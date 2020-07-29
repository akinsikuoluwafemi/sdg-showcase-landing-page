import React from 'react';
import DecentItem from './DecentItem';

export default function DecentList({ projects }) {
    const renderedList = projects.map(project => (
        <HealthItem project={project} />
    ))
    
    return (
        <div>
            {projects.length}
        </div>
    )
}
