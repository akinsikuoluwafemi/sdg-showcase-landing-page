import React, { useEffect, Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';
import Aos from 'aos';
import "aos/dist/aos.css";
import Footer from '../components/Footer/Footer';
import { ModeContext }from '../contexts/ModeContext';

const Home = () => {
    
  

    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    },[])

    let {darkMode} = useContext(ModeContext)


        return (
            <Fragment>
                <header className="page-header">
                    <article className="container">
                        <div className="">
                            <div className={darkMode ? `page-header-time my-4 dark-mode` : `page-header-time my-4 light-mode`}>Apr 26-30,2020</div>
                            <h1 className={darkMode ? `page-header-heading m-auto color-dark` : `page-header-heading m-auto`}>
                                <span > <span className={darkMode ? `kbd kbddark` : `kbd`}>18,000+</span> INNOVATORS</span> <br/>
                                <span>FROM <span className={darkMode ? `kbd kbddark` : `kbd`}>175</span> COUNTRIES</span> <br/>
                                <span>CREATED <span className={darkMode ? `kbd kbddark` : `kbd`}>1,560</span> PROJECTS TO</span> <br/>
                                <span className="last-span">#BUILDFORSDG</span>
                            </h1>
                        </div> 
                    </article>
                </header>
                
                <div className="bg-section2">
                    <div className="container ">
                        <div className="row">
                            <div className="col-12 col-lg-8 my-5 intro-container">
                                <p>The <span style={{ color: '#0fddff' }}>#BuildforSDG</span> text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Let</p>
                                <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using </p>
                                <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using </p>

                            </div>
                        </div>

                    </div> 
                </div>



                <div className="container">
                    <div className="row">       
                        <h2 className="top-projects my-5">Top 60 Projects</h2>    
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <p className="intro-container">We consider every participant who dedicated their time and skills to #BuildforCOVID19 a winner. That said, our team of health & technical expert judges have spent the past week considering the viability, potential and scalability of submissions to land on the following highlighted projects.</p>
                        </div>
                    </div> 

                </div>

                <div className="container ">
                    <div className="row">
                        <h2 className="theme-header my-4">EXPLORE BY THEME</h2>
                    </div>


                    <div className="row theme-container">
                        <Link to="/" style={{ background: '#F90F65' }} className=" card col-sm-12 col-md-6 col-lg-3 health  ">
                            <div className="h4 text-white">Health</div>
                        </Link>
                        <Link to="/" style={{ background: '#F81A8C' }} className="card col-sm-12 col-md-6 col-lg-3 health">
                            <div className="h4 text-white">Health Education.</div>
                        </Link>
                        <Link to="/" style={{ background: '#F81FC7' }} className="card col-sm-12 col-md-6 col-lg-3 health">
                            <div className="h4 text-white">Business.</div>
                        </Link>

                        <Link to="/" style={{ background: '#E71DFF' }} className="card col-sm-12 col-md-6 col-lg-3 health ">
                            <div className="h4 text-white">Community.</div>
                        </Link>
                        <Link to="/" style={{ background: '#E71DFF' }} className="card col-sm-12 col-md-6 col-lg-3 health">
                            <div className="h4 text-white">Entertainment.</div>
                        </Link>
                        <Link to="/" style={{ background: '#971DFF' }} className="card col-sm-12 col-md-6 col-lg-3 health">
                            <div className="h4 text-white">Entertainment.</div>
                        </Link>

                    </div>

                </div>


                <div className="container my-5">
                    
                    <div className="row project-card-container ">
                        <div data-aos="fade" className=" col project-card rounded py-4 px-4">
                            <Link to="/" style={{ color: '#F81A8C'}} className="project-name">#CELAFAREMO (ITALIAN)</Link>
                            <span className="flag" role="img" aria-label="flag">🇺🇸</span>
                            <p className="mt-3">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a</p>
                        </div>
                        
                        <div data-aos="fade" className="col project-card rounded py-4 px-4 mt-5">
                            <Link to="/" style={{ color: '#4D2CFF'}} className="project-name" >#CELAFAREMO (ITALIAN)</Link>
                            <span className="flag" role="img" aria-label="flag">🇸🇬</span>
                            <p className="mt-3">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a</p>
                        </div>
                    </div>

                    <div data-aos="fade" className="row project-card-container ">
                        <div className="col project-card rounded py-4 px-4">
                            <Link to="/" style={{ color: '#F81A8C' }} className="project-name">#CELAFAREMO (ITALIAN)</Link>
                            <span className="flag" role="img" aria-label="flag">🇸🇬</span>
                            <p className="mt-3">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a</p>
                        </div>

                        <div data-aos="fade" className="col project-card rounded py-4 px-4 mt-5">
                            <Link to="/" style={{ color: '#4D2CFF' }} className="project-name" >#CELAFAREMO (ITALIAN)</Link>
                            <span className="flag" role="img" aria-label="flag">🇸🇬</span>
                            <p className="mt-3">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a</p>
                        </div>
                    </div>

                    <div data-aos="fade" className="row project-card-container ">
                        <div className="col project-card rounded py-4 px-4 ">
                            <Link to="/" style={{ color: '#F81A8C' }} className="project-name">#CELAFAREMO (ITALIAN)</Link>
                            <span className="flag" role="img" aria-label="flag">🇸🇬</span>
                            <p className="mt-3">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a</p>
                        </div>

                        <div data-aos="fade" className="col project-card rounded py-4 px-4 mt-5">
                            <Link to="/" style={{ color: '#4D2CFF' }} className="project-name" >#CELAFAREMO (ITALIAN)</Link>
                            <span className="flag" role="img" aria-label="flag">🇸🇬</span>
                            <p className="mt-3">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a</p>
                        </div>
                    </div>


                </div>

                <div className="container">
                    <div className="row twobuttons">
                        <div >
                            <Link className="judges-btn" to="/judges">Meet the judges →</Link>
                            <Link className="projects-btn" to="/projects">See all projects →</Link>
                        </div>
                    </div>
                </div>
               
            
                 <Footer/>


            </Fragment>

            
        )
}



export default Home;