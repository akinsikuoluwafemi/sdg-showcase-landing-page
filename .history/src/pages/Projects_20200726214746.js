import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import './Projects.scss';
import { ModeContext } from '../contexts/ModeContext';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../contexts/context';
import AllProjectsList from '../components/AllProjectsList';
import Footer from '../components/Footer/Footer';
import AllProjectsDetails from '../components/AllProjectsDetails';
import { ModalContext } from '../contexts/ModalContext';


const Projects = () =>{

    let { projects } = useContext(ProjectContext);

    let { darkMode } = useContext(ModeContext);
    let [selectedProject, setSelectedProject] = useState(null);

     const onProjectSelect = (project) => {
        setSelectedProject(project);
        console.log('From the allProject')
     }
    

    return (
        <ModalContext.Provider value={{ showModal, setShowModal }}>

        </ModalContext.Provider>
        
    )

}



export default Projects;