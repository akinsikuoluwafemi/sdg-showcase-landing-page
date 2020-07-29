import React from 'react';
import NoPovertyItem from './NoPovertyItem';

export default function NoPovertyList({projects}) {
    return (
        <div>
            proje
            <NoPovertyItem project={projects} />
            {projects.length}
        </div>
    )
}
