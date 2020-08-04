import React, {useState, useContext, useEffect} from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../contexts/context';
import DecentList from '../components/DecentList';
import { DecentModalContext } from '../contexts/ModalContext';
import Aos from 'aos';
import "aos/dist/aos.css";
import DecentDetails from '../components/DecentDetails';
import { ModeContext } from '../contexts/ModeContext';



export default function DecentWorks() {
    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])

    
    let [ decentModal, setDecentModal ] = useState(false);

    let { decentWork } = useContext(ProjectContext);

    let { darkMode } = useContext(ModeContext);


    let [selectedProject, setSelectedProject] = useState(null);

      const onProjectSelect = (project) => {
        setSelectedProject(project);
        
    }

    return (
        <DecentModalContext.Provider value={{ decentModal, setDecentModal}}>
            <div className={darkMode ? `dark-mode bg-section2` : `light-mode bg-section2`}>
                <Header />
                <div className="container">
                    <div style={{ background: '#A21942' }} className="theme-project"><span className={darkMode ? 'color-dark' : 'color-light'}>Theme</span></div>

                    <h2 style={{ color: '#A21942'}} className="top-projects  my-5">Decent Work</h2>

                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <p className={darkMode ? `color-light text-space h3 font-weight-bold` : `color-dark text-space h3 font-weight-bold`}>Goal 8 reflects on global unemployment which is forecasted to rise to 5.8% in 2017, representing 201 million people out of work – the majority of whom are young people.</p>
                        </div>
                    </div>

                    <div className="container py-5">
                        <div className="row">
                            <div className="col-lg-8 col-sm-12">
                                <h2 className={darkMode ? `font-weight-bold pb-2 color-light` : `font-weight-bold pb-2`}>Problem Statements</h2>
                                <p className={darkMode ? `color-light h3 pb-2` : `h3 pb-2`}>END MODERN SLAVERY, TRAFFICKING, AND CHILD LABOUR.</p>
                                <p style={{ color: '#777' }} className="h4 pb-2">- Tech solutions could provide great support in tackling and preventing one of the most terrifying and anti-human criminal activities - trafficking and abuse of children. Almost 90% of human trafficking investigators use social media and other communication tools for their work. In the cases dealing with trafficking in children, the lack of direct interaction from the victim itself makes it more difficult for investigators to provide support. In most cases, kids are unaware of what’s happening, while their parents are also involved to some extent. </p>
                                <p style={{ color: '#A21942' }} className="h4 pb-2">- Try to find a solution that could help both parents and children to spot the danger.</p>
                                <p className={darkMode ? `color-light h3 pb-2` : `h3 pb-2`}>UNIVERSAL ACCESS TO BANKING, INSURANCE, AND FINANCIAL SERVICES.</p>
                                <p style={{ color: '#777' }} className="h4 pb-2">- With the growing increase and ease of technology device the power of the media most directly social media is unstoppable. This advancement is creating rapidly a world where information and communication can no longer be controlled. False reports and hate speeches have overtime been the rising cause of insurgencies and insecurities in our communities. </p>
                                <p style={{ color: '#A21942' }} className="h4 pb-2">- If given the opportunity, how would you solve this leveraging on technology solutions, Help build a solution and impress us? </p>
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
                                <Link to="/themes/Peace-And-Justice" style={{ background: '#10689D' }} className='text-white health font-weight-bold px-2 py-3'>Peace-And-Justice</Link>
                                <Link to="/themes/Decent-Work" style={{ background: '#A21942', boxShadow: darkMode ? `#222 0px 0px 0px 3px, #A21942 0px 0px 0px 6px` : `#fff 0px 0px 0px 3px, #A21942 0px 0px 0px 6px` }} className='text-white health font-weight-bold px-2 py-3'>Decent-Work</Link>
                                <Link to="/themes/Industry-innovation" style={{ background: '#FA6926' }} className='text-white health font-weight-bold px-2 py-3'>Industry-Innovation</Link>
                                <Link to="/themes/Sustainable-Cities" style={{ background: '#FB9D24' }} className='text-white health font-weight-bold px-2 py-3'>Sustainable-Cities</Link>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="">
                            <DecentDetails project={selectedProject} />
                           
                            <DecentList projects={decentWork} onProjectSelect={onProjectSelect} />
                        </div>
                    </div>

                </div>
            </div>
        </DecentModalContext.Provider>
        
    )
}
