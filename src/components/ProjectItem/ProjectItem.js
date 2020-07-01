import React from 'react';
import { Link } from 'react-router-dom';
// import '../UI/Modal/Modal.css';
// import Modal from '../UI/Modal/Modal';

export default function ProjectItem({ project , onProjectSelect}) {
    // console.log(props)

    // let [showModal, setShowModal] = useState(false);

    const displayModal = () => {
        onProjectSelect(project)
        // setShowModal(true);
    }

    return (
        // <div data-aos="fade" className="row project-card-container ">
        
        // <Modal>
            <div className="col project-card rounded py-4 px-4" data-aos="fade">


                <Link onClick={displayModal} to="/" style={{ color: project.color }} className="project-name">{project.name}</Link>


                <p className="mt-3">{project.text} </p>
            </div>
        // </Modal>
        

            // <div data-aos="fade" className="col project-card rounded py-4 px-4 mt-5">
            //     <Link to="/" style={{ color: '#4D2CFF' }} className="project-name" >#CELAFAREMO (ITALIAN)</Link>
            //     <p className="mt-3">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a</p>
            // </div>
        // </div>
    )
}
