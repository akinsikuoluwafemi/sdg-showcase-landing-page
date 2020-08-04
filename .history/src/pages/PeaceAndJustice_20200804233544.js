import React, {useState, useContext, useEffect} from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../contexts/context';
import { PeaceModalContext } from '../contexts/ModalContext';
import PeaceList from '../components/PeaceList';
import Aos from 'aos';
import "aos/dist/aos.css";
import PeaceDetails from '../components/PeaceDetails';
import { ModeContext } from '../contexts/ModeContext';



export default function PeaceAndJustice() {
       useEffect(() => {
        Aos.init({
            duration: 2000
        })
       }, [])
    
    
    const [peaceModal, setPeaceModal] = useState(false);

    let { darkMode } = useContext(ModeContext);


    let { peaceAndJustice } = useContext(ProjectContext);
    

     let [selectedProject, setSelectedProject] = useState(null);

      const onProjectSelect = (project) => {
        setSelectedProject(project);
        
    }
    
    return (
        <PeaceModalContext.Provider value={{ peaceModal, setPeaceModal}}>
            <div className={darkMode ? `dark-mode bg-section2` : `light-mode bg-section2`}>
                <Header />
                <div className="container">
                    <div style={{ background: '#10689D' }} className="theme-project"><span className={darkMode ? 'color-dark' : 'color-light'}>Theme</span></div>

                    <h2 style={{ color: '#10689D'}} className="top-projects  my-5">Peace And Justice</h2>

                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <p className={darkMode ? `color-light text-space h3 font-weight-bold` : `color-dark text-space h3 font-weight-bold`}>Goal 16 is focused on promoting peaceful and inclusive societies for sustainable development, providing access to justice for all and build effective, accountable and inclusive institutions at all levels.</p>
                        </div>
                    </div>

                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-8 col-sm-12">
                                <h2 className={darkMode ? `font-weight-bold pb-2 color-light` : `font-weight-bold pb-2`}>Problem Statements</h2>
                                <p className={darkMode ? `color-light h3 pb-2` : `h3 pb-2`}>PROMOTE MENTAL HEALTH.</p>
                                <p style={{ color: '#777' }} className="h4 pb-2">- The stigma and scrutiny that comes with being associated with mental illness is one of the rising cause of this illness. People who may have noticed a difference in behavioral attitude desist from evaluating further just because of this stigma. </p>
                                <p style={{ color: '#10689D' }} className="h4 pb-2">- Help find and build innovative ways that could link mental health specialists to people in your community. </p>
                                <p className={darkMode ? `color-light h3 pb-2` : `h3 pb-2`}>REDUCE ROAD INJURIES AND DEATHS.</p>
                                <p style={{ color: '#777' }} className="h4 pb-2">- By 2030, half the number of global deaths and injuries from road traffic accidents can be reduced starting from an innovative solution that could work in your community. </p>
                                <p style={{ color: '#10689D' }} className="h4 pb-2">- Help think and build  a solution from two perspectives(victim & response side) that could avoid, alert, inform, monitor and report road injuries and deaths. </p>
                            </div>

                        </div>
                    </div>

                    <div className="row my-5">
                        <div className="col">

                            <p className={darkMode ? `color-light font-weight-bold h2 text-theme mb-5` : `color-dark font-weight-bold h2 text-theme mb-5`}>Explore by theme</p>
                            <div className="themeproject-container">
                                <Link to="/themes/No-Poverty" style={{ background: '#E5243B' }} className=' text-white health font-weight-bold px-2 py-3'>
                                    No Poverty
                                </Link>
                                <Link to="/themes/Zero-Hunger" style={{ background: '#DDA639' }} className='text-white active-box health font-weight-bold px-2 py-3'>Zero Hunger</Link>
                                <Link to="/themes/Patnerships-For-Goals" style={{ background: '#19486A' }} className='text-white health font-weight-bold  px-2 py-3'>Partnership 4Goals</Link>
                                <Link to="/themes/Good-Health-And-Wellbeing" style={{ background: '#4C9F38' }} className='text-white health font-weight-bold px-2 py-3'>Good Health and...</Link>
                                <Link to="/themes/Quality-Education" style={{ background: '#C5192D' }} className='text-white health font-weight-bold px-2 py-3'>Quality-Education</Link>
                                <Link to="/themes/Peace-And-Justice" style={{ background: '#10689D', boxShadow: darkMode ? `#222 0px 0px 0px 3px, #10689D 0px 0px 0px 6px` : `#fff 0px 0px 0px 3px, #10689D 0px 0px 0px 6px` }} className='text-white health font-weight-bold px-2 py-3'>Peace-And-Justice</Link>
                                <Link to="/themes/Decent-Work" style={{ background: '#A21942' }} className='text-white health font-weight-bold px-2 py-3'>Decent-Work</Link>
                                <Link to="/themes/Industry-innovation" style={{ background: '#FA6926' }} className='text-white health font-weight-bold px-2 py-3'>Industry-Innovation</Link>
                                <Link to="/themes/Sustainable-Cities" style={{ background: '#FB9D24' }} className='text-white health font-weight-bold px-2 py-3'>Sustainable-Cities</Link>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="">
                            <PeaceDetails project={selectedProject} />

                            <PeaceList projects={peaceAndJustice} onProjectSelect={onProjectSelect} />

                        </div>
                    </div>

                </div>
            </div>
        </PeaceModalContext.Provider>
        
    )
}
