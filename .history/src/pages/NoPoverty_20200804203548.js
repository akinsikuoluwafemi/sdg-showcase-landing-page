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
        
    }

    return (
        <NoPovertyModalContext.Provider value={{ noPovertyModal, setNoPovertyModal}}>
            <div className={darkMode ? `dark-mode bg-section2` : `light-mode bg-section2`}>
                <Header />
                <div className="container">
                    <div className="theme-project"><span className={darkMode ? 'color-dark' : 'color-light'}>Theme</span></div>

                    <h2 className="top-projects  my-5">No Poverty</h2>

                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <p className={darkMode ? `color-light text-space h3 font-weight-bold` : `color-dark text-space h3 font-weight-bold`}>Goal 1 aims to end all forms of poverty, including extreme poverty (those living under $1.25 per day) and relative poverty (defined at a national level). Eradicating poverty is not a task of charity, it is an act of justice and the key to unlocking an enormous human potential. Still, nearly half of the world’s population lives in poverty, and lack of food and clean water is killing thousands every single day of the year.</p>
                        </div>
                    </div>




                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-8 col-sm-12">
                                <h2 className="font-weight-bold pb-2">Problem Statements</h2>
                                <p className="h3 pb-2">IMPLEMENT POLICIES BY MOBILIZING RESOURCES TOWARDS ENDING  POVERTY.</p>
                                <p style={{ color: '#777' }} className="h4 pb-2">- If we can implement policies to ensure resources are organized and create programs that will end poverty in all its dimensions, we can bring Poverty across developing and under-developing countries to a halt. </p>
                                <p style={{ color: '#F90F65' }} className="h4 pb-2">Build a tech solution that could be implemented to help reduce poverty in your community. (First of think about the major causes of poverty in your community) </p>
                                <p className="h3 pb-2">EQUAL RIGHTS TO OWNERSHIP, BASIC SERVICES, TECHNOLOGY AND ECONOMIC RESOURCES.</p>
                                <p style={{ color: '#777' }} className="h4 pb-2">Imagine a world where all men and women, in particular the poor and the vulnerable, have equal rights to economic resources, as well as access to basic services, ownership and control over land and other forms of property, inheritance, natural resources, appropriate new technology and financial services, including microfinance. </p>
                            
                            
                            </div>
                            
                        </div>
                    </div>



                    <div className="row my-5">
                        <div className="col">
                            
                            <p className={darkMode ? `color-light h2 text-theme mb-5` : `color-dark h2 text-theme mb-5`}>Explore by theme</p>

                            <div className="themeproject-container">

                                <Link to="/themes/No-Poverty" style={{ background: '#E5243B', boxShadow: darkMode ? `#222 0px 0px 0px 3px, #E5243B 0px 0px 0px 6px` : `#fff 0px 0px 0px 3px, #E5243B 0px 0px 0px 6px` }} className='povactive text-white health font-weight-bold px-2 py-3'>
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
