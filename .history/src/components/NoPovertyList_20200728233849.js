import React from 'react';
import NoPovertyItem from './NoPovertyItem';

export default function NoPovertyList({ projects, onProjectSelect}) {
    
    const renderedList = projects.map((project,i) => (
            <NoPovertyItem key={i} project={project} />
        ))

    return (
        <div className="project-card-container">
            
            {renderedList}
            
        </div>
    )
}
