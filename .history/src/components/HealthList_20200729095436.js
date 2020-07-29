import React from 'react';
import HealthItem from './HealthItem';


export default function HealthList({ projects, onProjectSelect  }) {
    const renderedList = projects.map(project => (
        <HealthItem project={project} />
    ))

    return (
        <div className="project-card-container">

            {renderedList}

        </div>
    )
}
