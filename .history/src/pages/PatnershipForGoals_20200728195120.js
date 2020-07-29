import React, {useContext, useEffect} from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../contexts/context';
import PatnershipList from '../components/PatnershipList';
import { ModeContext } from '../contexts/ModeContext';

import Aos from 'aos';
import "aos/dist/aos.css";


export default function PatnershipForGoals() {
    
       useEffect(() => {
        Aos.init({
            duration: 2000
        })
    },[])

    let { darkMode } = useContext(ModeContext);
    

    let { patnership } = useContext(ProjectContext);
    console.log(patnership);
    
    
    return (
        <>
            <Header/>
            <div className="container">
                <div className="theme-project">Theme</div>

                <h2 className="top-projects  my-5">Patnership for Goals</h2>

                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <p className="text-space h3 font-weight-bold">The SDGs can only be realized with strong global partnerships and cooperation. Official Development Assistance remained steady but below target, at US$147 billion in 2017. While humanitarian crises brought on by conflict or natural disasters continue to demand more financial resources and aid.</p>
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
                            <Link to="/themes/Patnerships-For-Goals" style={{ background: '#19486A', boxShadow: '#fff 0px 0px 0px 3px, #19486A 0px 0px 0px 6px' }} className='text-white health font-weight-bold  px-2 py-3'>Patnership 4Goals</Link>
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
                    <PatnershipList projects={patnership}/>
                </div>

            </div>
        </>
    )
}
