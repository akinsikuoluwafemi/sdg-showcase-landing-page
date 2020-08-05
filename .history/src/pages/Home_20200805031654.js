import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';

import Aos from 'aos';
import "aos/dist/aos.css";
import { ModeContext } from '../contexts/ModeContext';
import { ModalContext } from '../contexts/ModalContext';
import { ProjectContext } from '../contexts/context';

import ProjectList from '../components/ProjectList/ProjectList';
import ProjectDetail from '../components/ProjectDetail/ProjectDetail';

import ThemeContainer from '../components/ThemeContainer';
import andelalogo from '../images/Andelalogo.png';

const Home = () => {
    
    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    },[])

    let { darkMode } = useContext(ModeContext)
    let { featuredProjects: projects } = useContext(ProjectContext);
    
    let [selectedProject, setSelectedProject] = useState(null);

    const [showModal, setShowModal] = useState(false)


    const onProjectSelect = (project) => {
        setSelectedProject(project);

    }

    

    return (
        <ModalContext.Provider value={{ showModal, setShowModal }}>
            
            <div>
               
                <div className="bg-header">
                    <div className="partners-container">
                        <span className="partner-facebook">Facebook</span>
                        &nbsp;&nbsp;<span className="rule">|</span>&nbsp;&nbsp;
                        <img style={{width: '10rem'}} src={andelalogo}/>
                    </div>
                    <div>
                        <span className="build-challenge">BuildforSDG Challenge 2020</span>
                    </div>
                    <div></div>

                </div>

                
                <div className={darkMode ? `dark-mode bg-section2` : `light-mode bg-section2`}>
                    <div className="container ">
                        <div className="row">
                            <div className="col-12 col-lg-9 my-5 intro-container">
                                <p className={darkMode ? `color-light font-weight-bold` : `color-dark font-weight-bold`}>The <span style={{ color: '#0fddff' }}>#BuildforSDG</span> Challenge is a Facebook and Andela partnership initiative to up-skill developers across Sub-Saharan (Kenya, Uganda, Cameroon, Ghana, Nigeria and South-Africa) through a six-week immersive program where selected developers worked in agile remote teams to innovate on projects relating to the SDGs.</p>
                                <p className={darkMode ? `color-light font-weight-bold` : `color-dark font-weight-bold`}>The <span style={{ color: '#0fddff' }}>#BuildforSDG</span> program is committed to helping empower you to build real-world, locally and relevant solutions focused on the Sustainable Development Goals(SDGs) while gaining skills you need to advance your career.</p>
                                <p className={darkMode ? `color-light font-weight-bold` : `color-dark font-weight-bold`}>The <span style={{ color: '#0fddff' }}>Goal of the #BuildforSDG Challenge 2020</span> is to empower developers to build global, high-value, high-impact projects to help improve their market-readiness while learning within the community.</p>
                            </div>
                        </div>

                    </div> 
                </div>

                
                


                <div className={darkMode ? `dark-mode` : `light-mode `}>
                    <div className="container ">
                        <div className="row">
                            <h2 style={{ color: '#0459DF'}} className="px-3 top-projects  my-5">Featured Projects</h2>
                        </div>
                        <div  className="row">
                            <div className="col-12 col-lg-9 ">
                                <p className={darkMode ? `color-light intro-container font-weight-bold ` : `color-dark intro-container font-weight-bold`}>With over 175 team projects in the works, the Innovators of the #BuildforSDG Program are building solutions ranging from Food Bank regulators to simulated concepts for SMART city building as well as improved revenue collection tech models for communities and standardized waste collection solutions.</p>
                                <p className={darkMode ? `color-light intro-container font-weight-bold` : `color-dark intro-container font-weight-bold`}>These innovators while working in teams are building tech solutions that could make life a lot easier for communities across Sub-Saharan Africa battling the Covid-19 Pandemic. Over 160 teams from #BuildforSDG Challenge are leveraging on Open Source Technologies-- Top-picks and go to choices for these Innovators amongst these Open Source technologies include React, React Native, Jest, Flow, Facebook Authentication, and Graph QL.</p>

                            </div>
                        </div>

                    </div>
                </div>
                

                <div className={darkMode ? `dark-mode` : `light-mode`}>
                    <div className="container ">
                        <div className="row">
                            <h2 className={darkMode ? `color-light theme-header my-4` : `color-dark theme-header my-4`}>PROJECTS BY SDG</h2>
                        </div>

                        <ThemeContainer/>
                        
                 
                    </div>
                </div>

                <div className={darkMode ? `dark-mode` : `light-mode`}>
                    <div className="container py-5">

                        
                        <ProjectDetail project={selectedProject} />


                        <ProjectList projects={projects} onProjectSelect={onProjectSelect} />

                    </div>
                </div>    

                <div className={darkMode ? `dark-mode` : `light-mode`}>
                    <div className="container ">
                        <div className="row twobuttons">
                            <div >
                                <Link className="projects-btn" to="/projects">See all projects →</Link>
                            </div>
                        </div>
                    </div>
                </div>

                
               
                    
                 


            </div>
        </ModalContext.Provider>  


            
        )
}



export default Home;