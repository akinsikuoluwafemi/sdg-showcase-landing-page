import React from 'react';
import PeaceItem from './PeaceItem';

export default function PeaceList({ projects }) {
    const renderedList = projects.map(project => (
        <PeaceItem project={project} />
    ))
    
    return (
        <div>
            {projects.length}
        </div>
    )
}
