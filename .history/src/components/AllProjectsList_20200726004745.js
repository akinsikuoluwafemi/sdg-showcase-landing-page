import React, {useState, useEffect} from 'react';
import AllProjectItem from './AllProjectsItem';
import { ModalContext } from '../contexts/ModalContext';
import Aos from 'aos';
import "aos/dist/aos.css";


export default function AllProjectsList({ allProjects, onProjectSelect}) {
    
     useEffect(() => {
        Aos.init({
            duration: 2000
        })
    },[])



    const [showModal, setShowModal] = useState(false);

    const renderedList = allProjects.map((allProjects) => (
        <AllProjectItem onProjectSelect={onProjectSelect} allProjects={allProjects} />
    ))
    
    return (
        <ModalContext.Provider value={{ showModal, setShowModal }}>

            <div className="project-card-container">
                {renderedList}
            </div>
        </ModalContext.Provider>
    )
}
