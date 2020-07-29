import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import './Projects.scss';
import { ModeContext } from '../contexts/ModeContext';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../contexts/context';
import AllProjectsList from '../components/AllProjectsList';
import Footer from '../components/Footer/Footer';
import AllProjectsDetails from '../components/AllProjectsDetails';



const Projects = () =>{

    let { projects } = useContext(ProjectContext);

    let { darkMode } = useContext(ModeContext);
    let [selectedProject, setSelectedProject] = useState(null);

     const onProjectSelect = (project) => {
        setSelectedProject(project);
        console.log('From the allProject')
    }

    return (
        <div className={darkMode ? `dark-mode bg-section2` : `light-mode bg-section2`}>
            
            <Header />
            <div className="container">

                <h2 className="top-projects  my-5">Top 60 projects page</h2>

                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <p className={darkMode ? `color-light text-space h3 font-weight-bold` : `color-dark text-space h3 font-weight-bold`}>We consider every participant who dedicated their time and skills to #BuildforSDG a winner. That said, our team of health & technical expert judges have spent the past week considering the viability, potential and scalability of submissions to land on the following highlighted projects.</p>
                    </div>
                </div>

                <div className="row my-5">
                    <div className="col">

                        <p className={darkMode ? `color-light h2 text-theme mb-5` : `color-dark h2 text-theme mb-5` }>Explore by theme</p>
                        <div className="themeproject-container">
                            <Link to="/themes/No-Poverty" style={{ background: '#E5243B' }} className=' text-white health font-weight-bold px-2 py-3'>
                                No Poverty
                                </Link>
                            <Link to="/themes/Zero-Hunger" style={{ background: '#DDA639' }} className='text-white  health font-weight-bold px-2 py-3'>Zero Hunger</Link>
                            <Link to="/themes/Patnerships-For-Goals" style={{ background: '#19486A' }} className='text-white health font-weight-bold  px-2 py-3'>Patnership 4Goals</Link>
                            <Link to="/themes/Good-Health-And-Wellbeing" style={{ background: '#4C9F38' }} className='text-white health font-weight-bold px-2 py-3'>Good Health and...</Link>
                            <Link to="/themes/Quality-Education" style={{ background: '#C5192D' }} className='text-white health font-weight-bold px-2 py-3'>Quality-Education</Link>
                            <Link to="/themes/Peace-And-Justice" style={{ background: '#10689D' }} className='text-white health font-weight-bold px-2 py-3'>Peace-And-Justice</Link>
                            <Link to="/themes/Decent-Work" style={{ background: '#A21942' }} className='text-white health font-weight-bold px-2 py-3'>Decent-Work</Link>
                            <Link to="/themes/Industry-innovation" style={{ background: '#FA6926' }} className='text-white health font-weight-bold px-2 py-3'>Industry-Innovation</Link>
                            <Link to="/themes/Sustainable-Cities" style={{ background: '#FB9D24' }} className='text-white health font-weight-bold px-2 py-3'>Sustainable-Cities</Link>
                        </div>
                    </div>
                </div>

                <div>

                </div >

            </div>

            <div className="container">
                <div className={darkMode ? `dark-mode` : `light-mode`}>
                    
                    <AllProjectsDetails allProject={selectedProject} />

                    <AllProjectsList allProjects={projects} onProjectSelect={onProjectSelect} />

                </div>
            </div>
                
            <Footer />

        </div>
    )

}



export default Projects;