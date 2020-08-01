import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { ModalContext } from '../../contexts/ModalContext';


export default function ProjectItem({ project , onProjectSelect }) {
    
    let { setShowModal } = useContext(ModalContext);


    const onShowModal = () => {
        onProjectSelect(project)
        
        setShowModal(true);
        
    }




    
    return (
            <div className=" project-card rounded py-3 px-3" data-aos="fade">

                <Link onClick={() => onShowModal()} to="/" style={{ color: project.color }} className="project-name">{project.name}</Link>
                <p className="mt-3">{project.headline} </p>
            </div>          
           
       
    )
}
