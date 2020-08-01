import React, {useState, useContext, useEffect} from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../contexts/context';
import QualityList from '../components/QualityList';
import Aos from 'aos';
import "aos/dist/aos.css";
import { QualityModalContext } from '../contexts/ModalContext';
import QualityDetail from '../components/QualityDetails';
import { ModeContext } from '../contexts/ModeContext';



export default function QualityEducation() {
       useEffect(() => {
        Aos.init({
            duration: 2000
        })
       }, [])
    

    let [qualityModal, setQualityModal] = useState(false);
    
    let [selectedProject, setSelectedProject] = useState(null);
    
    let { darkMode } = useContext(ModeContext);

    let { qualityEdu } = useContext(ProjectContext);
    
      const onProjectSelect = (project) => {
        setSelectedProject(project);
        console.log('From the noProject', project)
    }

    
    return (
        <QualityModalContext.Provider value={{ qualityModal, setQualityModal}}>
            <div className={darkMode ? `dark-mode bg-section2` : `light-mode bg-section2`}>
                <Header />
                <div className="container">
                    <div className="theme-project"><span className={darkMode ? 'color-dark' : 'color-light'}>Theme</span></div>

                    <h2 className="top-projects  my-5">Quality Education</h2>

                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <p className={darkMode ? `color-light text-space h3 font-weight-bold` : `color-dark text-space h3 font-weight-bold`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Du</p>
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
                                <Link to="/themes/Quality-Education" style={{ background: '#C5192D', boxShadow: darkMode ? `#222 0px 0px 0px 3px, #C5192D 0px 0px 0px 6px` : `#fff 0px 0px 0px 3px, #4C9F38 0px 0px 0px 6px` }} className='text-white health font-weight-bold px-2 py-3'>Quality-Education</Link>
                                <Link to="/themes/Peace-And-Justice" style={{ background: '#10689D' }} className='text-white health font-weight-bold px-2 py-3'>Peace-And-Justice</Link>
                                <Link to="/themes/Decent-Work" style={{ background: '#A21942' }} className='text-white health font-weight-bold px-2 py-3'>Decent-Work</Link>
                                <Link to="/themes/Industry-innovation" style={{ background: '#FA6926' }} className='text-white health font-weight-bold px-2 py-3'>Industry-Innovation</Link>
                                <Link to="/themes/Sustainable-Cities" style={{ background: '#FB9D24' }} className='text-white health font-weight-bold px-2 py-3'>Sustainable-Cities</Link>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="">
                            <QualityDetail project={selectedProject} />

                            <QualityList projects={qualityEdu} onProjectSelect={onProjectSelect} />

                        </div>

                    </div>

                </div>
            </div>
        </QualityModalContext.Provider>
        
    )
}
