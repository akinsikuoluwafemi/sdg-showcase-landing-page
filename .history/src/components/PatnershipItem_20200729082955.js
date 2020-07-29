import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { PatnershipModalContext } from '../contexts/ModalContext';


export default function PatnershipItem({ project, onProjectSelect}) {
    

    let { setPatnerModal} = useContext(patner)
    
    
    return (
        <div className=" project-card rounded py-3 px-3" data-aos="fade">
            <Link to="/" style={{ color: project.color }} className="project-name">{project.name}</Link>
            <p className="mt-3">{project.headline} </p>
        </div>
    )
}
