import React, {useState, useContext, useEffect } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../contexts/context';
import { SustainableModalContext } from '../contexts/ModalContext';
import SustainableList from '../components/SustainableList';
import Aos from 'aos';
import "aos/dist/aos.css";
import SustainableDetails


export default function SustainableCities() {
       useEffect(() => {
        Aos.init({
            duration: 2000
        })
       }, [])

    
    let [sustainModal, setSustainModal] = useState(false);
    
    let { sustainableCities } = useContext(ProjectContext);
    console.log(sustainableCities)
    
    return (
        <SustainableModalContext.Provider value={{ sustainModal, setSustainModal}}>
            <div>
                <Header />
                <div className="container">
                    <div className="theme-project">Theme</div>

                    <h2 className="top-projects  my-5">Sustainable Cities</h2>

                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <p className="text-space h3 font-weight-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Du</p>
                        </div>
                    </div>

                    <div className="row my-5">
                        <div className="col">

                            <p className="h2 text-theme mb-5">Explore by theme</p>
                            <div className="themeproject-container">
                                <Link to="/themes/No-Poverty" style={{ background: '#E5243B' }} className=' text-white health font-weight-bold px-2 py-3'>
                                    No Poverty
                                </Link>
                                <Link to="/themes/Zero-Hunger" style={{ background: '#DDA639' }} className='text-white active-box health font-weight-bold px-2 py-3'>Zero Hunger</Link>
                                <Link to="/themes/Patnerships-For-Goals" style={{ background: '#19486A' }} className='text-white health font-weight-bold  px-2 py-3'>Partnership 4Goals</Link>
                                <Link to="/themes/Good-Health-And-Wellbeing" style={{ background: '#4C9F38' }} className='text-white health font-weight-bold px-2 py-3'>Good Health and...</Link>
                                <Link to="/themes/Quality-Education" style={{ background: '#C5192D' }} className='text-white health font-weight-bold px-2 py-3'>Quality-Education</Link>
                                <Link to="/themes/Peace-And-Justice" style={{ background: '#10689D' }} className='text-white health font-weight-bold px-2 py-3'>Peace-And-Justice</Link>
                                <Link to="/themes/Decent-Work" style={{ background: '#A21942' }} className='text-white health font-weight-bold px-2 py-3'>Decent-Work</Link>
                                <Link to="/themes/Industry-innovation" style={{ background: '#FA6926' }} className='text-white health font-weight-bold px-2 py-3'>Industry-Innovation</Link>
                                <Link to="/themes/Sustainable-Cities" style={{ background: '#FB9D24', boxShadow: '#fff 0px 0px 0px 3px, #FB9D24 0px 0px 0px 6px' }} className='text-white health font-weight-bold px-2 py-3'>Sustainable-Cities</Link>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <SustainableList projects={sustainableCities} />
                    </div>

                </div>
            </div>
        </SustainableModalContext.Provider>
        
    )
}
