import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { QualityModalContext } from '../contexts/ModalContext';



export default function QualityItem({ project, onProjectSelect }) {
    
    let { setQualityModal } = useContext(QualityModalContext);
    
       const onShowModal = () => {
        onProjectSelect(project);
        // console.log(project);
        setQualityModal(true);

    }


    return (
        <div className=" project-card rounded py-3 px-3" data-aos="fade">
            <Link onClick={onShowModal}  style={{ color: project.color }} className="project-name">{project.name}</Link>
            <p className="mt-3">{project.headline} </p>
        </div>
    )
}
