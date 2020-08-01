import React, {useState, useContext, useEffect} from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../contexts/context';
import NoPovertyList from '../components/NoPovertyList';
import { NoPovertyModalContext } from '../contexts/ModalContext';
import NoPovertyDetail from '../components/NoPovertyDetail';
import { ModeContext } from '../contexts/ModeContext';

import Aos from 'aos';
import "aos/dist/aos.css";

export default function NoPoverty() {
   useEffect(() => {
        Aos.init({
            duration: 2000
        })
    },[])


    const [noPovertyModal, setNoPovertyModal] = useState(false);

    let { darkMode } = useContext(ModeContext);

    const { noPoverty } = useContext(ProjectContext);
    
    let [selectedProject, setSelectedProject] = useState(null);

      const onProjectSelect = (project) => {
        setSelectedProject(project);
        console.log('From the noProject', project)
    }

    return (
        <NoPovertyModalContext.Provider value={{ noPovertyModal, setNoPovertyModal}}>
            <div className={darkMode ? `dark-mode bg-section2` : `light-mode bg-section2`}>
                <Header />
                <div className="container">
                    <div className="theme-project">Theme</div>

                    <h2 className="top-projects  my-5">No Poverty</h2>

                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <p className={darkMode ? `color-light text-space h3 font-weight-bold` : `color-dark text-space h3 font-weight-bold`}>Eradicating poverty in all its forms remains one of the greatest challenges facing humanity. While the number of people living in extreme poverty dropped by more than half between 1990 and 2015, too many are still struggling for the most basic human needs.</p>
                        </div>
                    </div>

                    <div className="row my-5">
                        <div className="col">
                            
                            <p className={darkMode ? `color-light h2 text-theme mb-5` : `color-dark h2 text-theme mb-5`}>Explore by theme</p>

                            <div className="themeproject-container">

                                <Link to="/themes/No-Poverty" style={{ background: '#E5243B', boxShadow: '#fff 0px 0px 0px 3px, #E5243B 0px 0px 0px 6px' }} className='povactive text-white health font-weight-bold px-2 py-3'>
                                    No Poverty
                                </Link>
                                <Link to="/themes/Zero-Hunger" style={{ background: '#DDA639' }} className='text-white  health font-weight-bold px-2 py-3'>Zero Hunger</Link>
                                <Link to="/themes/Patnerships-For-Goals" style={{ background: '#19486A' }} className='text-white health font-weight-bold  px-2 py-3'>Partnership 4Goals</Link>
                                <Link to="/themes/Good-Health-And-Wellbeing" style={{ background: '#4C9F38' }} className='text-white health font-weight-bold px-2 py-3'>Good Health and...</Link>
                                <Link to="/themes/Quality-Education" style={{ background: '#C5192D' }} className='text-white health font-weight-bold px-2 py-3'>Quality-Education</Link>
                                <Link to="/themes/Peace-And-Justice" style={{ background: '#10689D' }} className='text-white health font-weight-bold px-2 py-3'>Peace-And-Justice</Link>
                                <Link to="/themes/Decent-Work" style={{ background: '#A21942' }} className='text-white health font-weight-bold px-2 py-3'>Decent-Work</Link>
                                <Link to="/themes/Industry-innovation" style={{ background: '#FA6926' }} className='text-white health font-weight-bold px-2 py-3'>Industry-Innovation</Link>
                                <Link to="/themes/Sustainable-Cities" style={{ background: '#FB9D24' }} className='text-white health font-weight-bold px-2 py-3'>Sustainable-Cities</Link>
                            </div>
                        </div>
                    </div>


                    <div className="container">
                        <div className={darkMode ? `dark-mode` : `light-mode`}>
                            
                            <NoPovertyDetail project={selectedProject}/>
                            
                            <NoPovertyList projects={noPoverty} onProjectSelect={onProjectSelect} />

                        </div>
                    </div>

                </div>
            </div>
        </NoPovertyModalContext.Provider>
        
    )
}
