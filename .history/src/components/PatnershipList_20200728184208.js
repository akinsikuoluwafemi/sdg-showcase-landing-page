import React from 'react';
import PatnershipItem from './PatnershipItem';



export default function PatnershipList({ projects }) {
    const renderedList = projects.map(project => (
        <PatnershipItem project={project} />
    ))
    
    return (
        <div>
            {projects.length}
        </div>
    )
}
