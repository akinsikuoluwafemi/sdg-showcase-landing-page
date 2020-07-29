import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { HealthModalContext } from '../contexts/ModalContext';



export default function HealthItem({ project, onProjectSelect }) {
    
    let { setHealthModal } = useContext(HealthModalContext);

      const onShowPovertyModal = () => {
        onProjectSelect(project);
        // console.log(project);
          setHealthModal(true);

    }

    return (
        <div className=" project-card rounded py-3 px-3" data-aos="fade">
            <Link onClick={onShowPovertyModal} style={{ color: project.color }} className="project-name">{project.name}</Link>
            <p className="mt-3">{project.headline} </p>
        </div>
    )
}
