import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { ModalContext } from '../contexts/ModalContext';


export default function AllProjectsItem({ allProjects, onProjectSelect }) {
    
    let { setShowModal } = useContext(ModalContext);

     const onShowModal = () => {
        onProjectSelect(allProjects)
        console.log(allProjects);
        setShowModal(true);
        
    }

    return (
        <div className="project-card rounded py-3 px-3" data-aos="fade">

            <Link  onClick={() => onShowModal()} style={{ color: allProjects.color }} className="project-name">{allProjects.name}</Link>
            <p className="mt-3">{allProjects.headline} </p>
        </div>  
    )
}
