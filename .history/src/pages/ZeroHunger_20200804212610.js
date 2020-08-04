import React, {useState, useContext, useEffect} from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../contexts/context';
import { ZeroHungerModalContext } from '../contexts/ModalContext';
import { ModeContext } from '../contexts/ModeContext';

import ZeroHungerList from '../components/ZeroHungerList';
import Aos from 'aos';
import "aos/dist/aos.css";
import ZeroHungerDetail from '../components/ZeroHungerDetail';


export default function ZeroHunger(){
       useEffect(() => {
        Aos.init({
            duration: 2000
        })
    },[])





    const { zeroHunger } = useContext(ProjectContext);
    
    

    const [zeroModal, setZeroModal] = useState(false);

    let { darkMode } = useContext(ModeContext);


     let [selectedProject, setSelectedProject] = useState(null);

      const onProjectSelect = (project) => {
        setSelectedProject(project);
        
    }

    return (
        <ZeroHungerModalContext.Provider value={{ zeroModal, setZeroModal}}>
            <div className={darkMode ? `dark-mode bg-section2` : `light-mode bg-section2`}>

                <Header />
                <div className="container">
                    <div style={{ color: '#DDA639'}} className="theme-project"><span className={darkMode ? 'color-dark' : 'color-light'}>Theme</span></div>

                    <h2 style={{ color: '#DDA639'}} className="top-projects  my-5">Zero Hunger</h2>

                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <p className={darkMode ? `color-light text-space h3 font-weight-bold` : `color-dark text-space h3 font-weight-bold`}>Goal 2 aims to end hunger and malnutrition by 2030 and to ensure access to safe, nutritious and sufficient food. Our planet has provided us with tremendous resources, but unequal access and inefficient handling leave millions of people malnourished. If we promote sustainable agriculture with modern technologies and fair distribution systems, we can sustain the whole world’s population and make sure that nobody will ever suffer from hunger again.</p>
                        </div>
                    </div>


                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-8 col-sm-12">
                                <h2 className={darkMode ? `font-weight-bold pb-2 color-light` : `font-weight-bold pb-2`}>Problem Statements</h2>
                                <p className={darkMode ? `color-light h3 pb-2` : `h3 pb-2`}>DOUBLE THE PRODUCTIVITY AND INCOMES OF SMALL-SCALE FOOD PRODUCERS.</p>
                                <p style={{ color: '#777' }} className="h4 pb-2">- If your community can double the agricultural production and income of small-scale food producers, in particular women, family farmers, animal and fish farmers, by creating access to land, technical knowledge, financial services, markets, and opportunities, then we can double the productivity and incomes of small-scale food producers. </p>
                                <p style={{ color: '#DDA639' }} className="h4 pb-2">- Build a solution that could help double productivity for small scale food producers(as listed above)in your community. This solution could be financial or allow them access opportunities, bigger markets, etc. </p>
                                <p className={darkMode ? `color-light h3 pb-2` : `h3 pb-2`}>INVEST IN RURAL INFRASTRUCTURE, AGRICULTURAL RESEARCH, TECHNOLOGY.</p>
                                <p style={{ color: '#777' }} className="h4 pb-2">- If we can build tech solutions through increased collaboration from international corporations, towards developing rural infrastructure, agricultural research, and practices-- We can enhance our community's agricultural productive capacity and overall we can reduce hunger by 2030. </p>
                                <p style={{ color: '#DDA639' }} className="h4 pb-2">- Build tech solutions that could help give your local community access to international/advanced farming practices that could assist them to improve their infrastructure or farming practices. </p>
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
                                <Link to="/themes/Zero-Hunger" style={{ background: '#DDA639', boxShadow: darkMode ? `#222 0px 0px 0px 3px, #DDA639 0px 0px 0px 6px` : `#fff 0px 0px 0px 3px, #DDA639 0px 0px 0px 6px` }} className='text-white active-box health font-weight-bold px-2 py-3'>Zero Hunger</Link>
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

                    <div className="container">
                        <div className={darkMode ? `dark-mode` : `light-mode`}>
                            
                            <ZeroHungerDetail project={selectedProject}/>

                            <ZeroHungerList projects={zeroHunger} onProjectSelect={onProjectSelect} />

                        </div>
                    </div>

                </div>
            </div>
        </ZeroHungerModalContext.Provider>
        
    )
}
