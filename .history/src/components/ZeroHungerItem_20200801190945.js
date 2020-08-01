import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { ZeroHungerModalContext } from '../contexts/ModalContext';


export default function ZeroHungerItem({ project, onProjectSelect}) {
   
    let { setZeroModal } = useContext(ZeroHungerModalContext);
   
     const onShowZeroModal = () => {
        onProjectSelect(project);
        
         setZeroModal(true);

    }
   
    return (
        <div className=" project-card rounded py-3 px-3" data-aos="fade">
            <Link onClick={onShowZeroModal} style={{ color: project.color }} className="project-name">{project.name}</Link>
            <p className="mt-3">{project.headline} </p>
        </div>
    )
}


