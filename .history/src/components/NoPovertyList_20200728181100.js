import React from 'react';
import NoPovertyItem from './NoPovertyItem';

export default function NoPovertyList({projects}) {
    
    projects.map(project => (
        <NoPovertyItem  />
    ))

    return (
        <div>
            
            {/* <NoPovertyItem project={projects} />
            {projects.length} */}
        </div>
    )
}
