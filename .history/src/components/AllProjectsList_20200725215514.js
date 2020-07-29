import React, {useState} from 'react';
import AllProjectItem from './AllProjectsItem';
import { ModalContext } from '../contexts/ModalContext';
import Aos from 'aos';
import "aos/dist/aos.css";


export default function AllProjectsList({allProjects}) {
    console.log(allProjects);

    const [showModal, setShowModal] = useState(false);

    const renderedList = allProjects.map((allProjects) => (
       <AllProjectItem allProjects={allProjects} />
    ))
    
    return (
        <ModalContext.Provider value={{ showModal, setShowModal }}>

            <div>
                {renderedList}
            </div>
        </ModalContext.Provider>
    )
}
