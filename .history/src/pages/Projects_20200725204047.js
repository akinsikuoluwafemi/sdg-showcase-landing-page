import React, { useContext } from 'react';
import Header from '../components/Header';
import './Projects.scss';
import { ModeContext } from '../contexts/ModeContext';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../contexts/context';

const Projects = () => {

    let { projects } = useContext(ProjectContext);
    console.log(pro)

        return (
            <>
            <Header/>
                <div className="container">
                    
                    <h2 className="top-projects  my-5">Top 60 projects page</h2>

                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <p className="text-space h3 font-weight-bold">We consider every participant who dedicated their time and skills to #BuildforSDG a winner. That said, our team of health & technical expert judges have spent the past week considering the viability, potential and scalability of submissions to land on the following highlighted projects.</p>
                        </div>
                    </div>

                    <div className="row my-5">
                        <div className="col">
                            
                            <p className="h2 text-theme mb-5">Explore by theme</p>
                            <div className="themeproject-container">
                                <Link to="/themes/No-Poverty" style={{ background: '#E5243B' }} className=' text-white health font-weight-bold px-2 py-2'>
                                    No Poverty      
                                </Link>
                                <Link to="/themes/Zero-Hunger" style={{ background: '#DDA639' }} className='text-white  health font-weight-bold px-2 py-2'>Zero Hunger</Link>
                                <Link to="/themes/Patnerships-For-Goals" style={{ background: '#19486A' }} className='text-white health font-weight-bold  px-2 py-2'>Patnership 4Goals</Link>
                                <Link to="/themes/Good-Health-And-Wellbeing" style={{ background: '#4C9F38' }} className='text-white health font-weight-bold px-2 py-2'>Good Health and...</Link>
                                <Link to="/themes/Quality-Education" style={{ background: '#C5192D' }} className='text-white health font-weight-bold px-2 py-2'>Quality-Education</Link>
                                <Link to="/themes/Peace-And-Justice" style={{ background: '#10689D' }} className='text-white health font-weight-bold px-2 py-2'>Peace-And-Justice</Link>
                                <Link to="/themes/Decent-Work" style={{ background: '#A21942' }} className='text-white health font-weight-bold px-2 py-2'>Decent-Work</Link>
                                <Link to="/themes/Industry-innovation" style={{ background: '#FA6926' }}  className='text-white health font-weight-bold px-2 py-2'>Industry-Innovation</Link>
                                <Link to="/themes/Sustainable-Cities" style={{ background: '#FB9D24' }} className='text-white health font-weight-bold px-2 py-2'>Sustainable-Cities</Link>
                            </div>






                        </div>
                    </div>


                </div>
            </>
        )
        
    }
   


export default Projects;