import React from 'react';
import ProjectItem from '../ProjectItem/ProjectItem';

export default function ProjectList({ projects, onProjectSelect }) {

    const renderedList =  projects.map((project,index) => {
        
        return (
            
            <ProjectItem project={project} key={index} onProjectSelect={onProjectSelect} />
                                          
        )
        
    })


    return (
        <div className="row project-card-container">
            {renderedList}
        </div>
    )
}
