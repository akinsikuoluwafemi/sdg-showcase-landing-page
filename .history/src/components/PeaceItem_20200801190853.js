import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PeaceModalContext } from '../contexts/ModalContext';





export default function PeaceItem({ project, onProjectSelect }) {
    
    let { setPeaceModal } = useContext(PeaceModalContext);


    const onShowPeaceModal = () => {
        onProjectSelect(project);
        
        setPeaceModal(true);

    }
    
    return (
        <div className=" project-card rounded py-3 px-3" data-aos="fade">
            <Link onClick={onShowPeaceModal}  style={{ color: project.color }} className="project-name">{project.name}</Link>
            <p className="mt-3">{project.headline} </p>
        </div>
    )
}
