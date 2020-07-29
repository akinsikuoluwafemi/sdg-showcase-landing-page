import React from 'react';
import HealthItem from './HealthItem';


export default function HealthList({ projects }) {
    const renderedList = projects.map(project => (
        <HealthItem project={project} />
    ))

    return (
        <div>
            {projects.length}
        </div>
    )
}
