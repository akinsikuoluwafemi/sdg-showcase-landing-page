import React from 'react';
import HealthItem from './HealthItem';


export default function HealthList({ projects, onProjectSelect  }) {
    const renderedList = projects.map((project,i) => (
        <HealthItem project={project} onProjectSelect={onProjectSelect} />
    ))

    return (
        <div className="project-card-container">

            {renderedList}

        </div>
    )
}
