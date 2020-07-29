import React from 'react';
import NoPovertyItem from './NoPovertyItem';

export default function NoPovertyList({projects}) {
    
    const render    projects.map(project => (
            <NoPovertyItem  />
        ))

    return (
        <div>
            
            {/* <NoPovertyItem project={projects} />
            {projects.length} */}
        </div>
    )
}
