import React from 'react';
import NoPovertyItem from './NoPovertyItem';

export default function NoPovertyList({projects}) {
    
    const renderedList = projects.map((project,i) => (
            <NoPovertyItem project={project} />
        ))

    return (
        <div className="project-card-container">
            
            {renderedList}
            
        </div>
    )
}
