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
    }

    
    return (
        <QualityModalContext.Provider value={{ qualityModal, setQualityModal}}>
            <div className={darkMode ? `dark-mode bg-section2` : `light-mode bg-section2`}>
                <Header />
                <div className="container">
                    <div style={{ background: '#C5192D'}} className="theme-project"><span className={darkMode ? 'color-dark' : 'color-light'}>Theme</span></div>

                    <h2 style={{ color: '#C5192D'}} className="top-projects  my-5">Quality Education</h2>

                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <p className={darkMode ? `color-light text-space h3 font-weight-bold` : `color-dark text-space h3 font-weight-bold`}>Goal 4 aims to provide inclusive, equitable and quality education for all people, globally. Its targets span a variety of challenges related to the inclusion of marginalized populations at multiple levels of education and in the workforce. Some of the key areas that we can affect change include</p>
                        </div>
                    </div>

                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-8 col-sm-12">
                                <h2 className={darkMode ? `font-weight-bold pb-2 color-light` : `font-weight-bold pb-2`}>Problem Statements</h2>
                                <p className={darkMode ? `color-light h3 pb-2` : `h3 pb-2`}>INCREASE THE SUPPLY OF QUALIFIED TEACHERS IN DEVELOPING COUNTRIES.</p>
                                <p style={{ color: '#C5192D' }} className="h4 pb-2">- Try building a solution that could substantially increase the supply of qualified teachers in your community. You can include a plan to integrate or collaborate with international cooperations for teachers to be trained in developing countries.. </p>
                                <p className={darkMode ? `color-light h3 pb-2` : `h3 pb-2`}>UNIVERSAL LITERACY AND NUMERACY(Data Based).</p>
                                <p style={{ color: '#777' }} className="h4 pb-2">- Is there a possibility for universal literacy, A situation where all youth and a substantial proportion of adults, both men and women, achieve literacy and numeracy. If you agree. </p>
                                <p style={{ color: '#C5192D' }} className="h4 pb-2">- Think of a solution that could allow literacy statistics to be tracked across developing and underdeveloped communities year on year. </p>
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
                                <Link to="/themes/Quality-Education" style={{ background: '#C5192D', boxShadow: darkMode ? `#222 0px 0px 0px 3px, #C5192D 0px 0px 0px 6px` : `#fff 0px 0px 0px 3px, #C5192D 0px 0px 0px 6px` }} className='text-white health font-weight-bold px-2 py-3'>Quality-Education</Link>
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
