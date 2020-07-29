import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SustainableModalContext } from '../contexts/ModalContext';




export default function SustainableItem({ project, onProjectSelect}) {
   

     
    let { setSustainModal } = useContext(ZeroHungerModalContext);
   
     const onShowSustainModal = () => {
        onProjectSelect(project);
        // console.log(project);
         setSustainModal(true);

    }
   
   
    return (
        <div className=" project-card rounded py-3 px-3" data-aos="fade">
            <Link onClick={onShowSustainModal} style={{ color: project.color }} className="project-name">{project.name}</Link>
            <p className="mt-3">{project.headline} </p>
        </div>
    )
}
