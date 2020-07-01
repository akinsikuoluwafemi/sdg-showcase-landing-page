import React from 'react';
import { Link } from 'react-router-dom';


export default function ProjectItem({ project , onProjectSelect}) {
    

    const displayModal = () => {
        onProjectSelect(project)
    }

    return (
        
            <div className="col project-card rounded py-4 px-4" data-aos="fade">


                <Link onClick={displayModal} to="/" style={{ color: project.color }} className="project-name">{project.name}</Link>


                <p className="mt-3">{project.text} </p>
            </div>
       
    )
}
