import React from 'react';
import NoPovertyItem from './NoPovertyItem';

export default function NoPovertyList({projects}) {
    
    const renderedList = projects.map(project => (
            <NoPovertyItem  />
        ))

    return (
        <div>
            
           {}
        </div>
    )
}
