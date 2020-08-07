import React from 'react';
import HealthItem from './HealthItem';


export default function HealthList({ projects, onProjectSelect  }) {
    const renderedList = projects.map((project,i) => (
        <HealthItem key={i} project={project} onProjectSelect={onProjectSelect} />
    ))

    return (
        <div className="">

            {renderedList}

        </div>
    )
}
