import React from 'react';
import NoPovertyItem from './NoPovertyItem';

export default function NoPovertyList({projects}) {
    return (
        <div>
            <NoPovertyItem />
            {projects.length}
        </div>
    )
}
