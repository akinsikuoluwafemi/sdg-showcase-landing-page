import React, { useContext } from 'react';
import Header from '../components/Header';
import './Projects.scss';
import { ModeContext } from '../contexts/ModeContext';



const Projects = () => {
    

        return (
            <>
            <Header/>
                <div className="container">
                    
                    <h2 className="top-projects  my-5">Top 60 projects page</h2>

                    <div className="row">
                        <div className="col-lg-6 col-sm-12">
                            <p className="h3 font-weight-bold">We consider every participant who dedicated their time and skills to #BuildforCOVID19 a winner. That said, our team of health & technical expert judges have spent the past week considering the viability, potential and scalability of submissions to land on the following highlighted projects.</p>
                        </div>
                    </div>


                </div>
            </>
        )
        
    }
   


export default Projects;