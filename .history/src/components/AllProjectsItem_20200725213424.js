import React from 'react';

export default function AllProjectsItem(props) {
    return (
        <div className=" project-card rounded py-3 px-3" data-aos="fade">

            <Link onClick={() => onShowModal()} to="/" style={{ color: project.color }} className="project-name">{project.name}</Link>
            <p className="mt-3">{project.headline} </p>
        </div>  
    )
}
