import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';

import Aos from 'aos';
import "aos/dist/aos.css";
import Footer from '../components/Footer/Footer';
import { ModeContext } from '../contexts/ModeContext';
import { ModalContext } from '../contexts/ModalContext';
import ProjectList from '../components/ProjectList/ProjectList';
import ProjectDetail from '../components/ProjectDetail/ProjectDetail';
import sdg from '../images/sdg.png';
import andela from '../images/andela.png';


const Home = () => {
    
  

    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    },[])

    let {darkMode} = useContext(ModeContext)

    let [ projects ] = useState([
        {
            id: 1,
            name: 'Safe Haven',
            text: 'lorem orem is simply dummy text of the printing and loem lorem orem loem lorem orem loem lorem orem loem lorem orem loem lorem',
            color: '#4D2CFF',
            theme: 'No Poverty',
            about: 'lorem lorem loem lorem orem loem lorem orem orem is simply dummy text of ',
            members: {
                one: ['Thomas fashola', 'thomas@email.com'],
                two: ['Thomas fashola', 'thomas@email.com'],
                three: ['Thomas fashola', 'thomas@email.com'],
                four: ['Thomas fashola', 'thomas@email.com'],
                five: ['Thomas fashola', 'thomas@email.com'],
                six: ['Thomas fashola', 'thomas@email.com'],
                seven: ['Thomas fashola', 'thomas@email.com'],
                eight: ['Thomas fashola', 'thomas@email.com']
            },  
            videoLink: 'https://www.youtube.com/embed/qAxDk5oljc8',
            inspiration: 'lorem lorem lorem loem lorem orem  lorem lorem loem lorem orem',
            whatitdoes: 'lorem lorem loem lorem orem ',
            stackused: ['Next.js', 'React', 'Tailwind.css'],
            challenges: 'lorem lorem loem lorem orem ',
            proudof: 'lorem lorem loem lorem orem ',
            hostedlink: 'www.facebook.com',
            image: 'https.jpg'


        },
        {
            id: 2,
            name: '#sefan celafaremo(ITALIAN)',
            text: 'second projects lorem orem loem lorem orem is simply dummy text of the printing and loem lorem orem loem lorem orem loem lorem orem loem lorem orem loem lorem',
            color: '#4D2CFF',
            theme: 'No Poverty',
            about: 'lorem lorem loem lorem orem loem lorem orem orem is simply dummy text of ',
            members: {
                one: ['Thomas fashola', 'thomas@email.com'],
                two: ['Thomas fashola', 'thomas@email.com'],
                three: ['Thomas fashola', 'thomas@email.com'],
                four: ['Thomas fashola', 'thomas@email.com'],
                five: ['Thomas fashola', 'thomas@email.com'],
                six: ['Thomas fashola', 'thomas@email.com'],
                seven: ['Thomas fashola', 'thomas@email.com'],
                eight: ['Thomas fashola', 'thomas@email.com']
            },  
            videoLink: 'https://www.youtube.com',
            inspiration: 'lorem lorem lorem loem lorem orem  lorem lorem loem lorem orem',
            whatitdoes: 'lorem lorem loem lorem orem ',
            stackused: ['Next.js', 'React', 'Tailwind.css'],
            challenges: 'lorem lorem loem lorem orem ',
            proudof: 'lorem lorem loem lorem orem ',
            hostedlink: 'www.facebook.com',
            image: 'https.jpg'

        },
        {
            id: 3,
            name: '#sefan celafaremo(ITALIAN)',
            text: 'lorem lorem loem lorem orem loem lorem orem is simply dummy text of the printing and loem lorem orem loem lorem orem loem lorem orem loem lorem orem loem lorem',
            color: '#4D2CFF',
            theme: 'No Poverty',
            about: 'lorem lorem loem lorem orem loem lorem orem orem is simply dummy text of ',
            members: {
                one: ['Thomas fashola', 'thomas@email.com'],
                two: ['Thomas fashola', 'thomas@email.com'],
                three: ['Thomas fashola', 'thomas@email.com'],
                four: ['Thomas fashola', 'thomas@email.com'],
                five: ['Thomas fashola', 'thomas@email.com'],
                six: ['Thomas fashola', 'thomas@email.com'],
                seven: ['Thomas fashola', 'thomas@email.com'],
                eight: ['Thomas fashola', 'thomas@email.com']
            },  
            videoLink: 'https://www.youtube.com',
            inspiration: 'lorem lorem lorem loem lorem orem  lorem lorem loem lorem orem',
            whatitdoes: 'lorem lorem loem lorem orem ',
            stackused: ['Next.js', 'React', 'Tailwind.css'],
            challenges: 'lorem lorem loem lorem orem ',
            proudof: 'lorem lorem loem lorem orem ',
            hostedlink: 'www.facebook.com',
            image: 'https.jpg'

        },
        {
            id: 4,
            name: '#sefan celafaremo(ITALIAN)',
            text: 'lorem lorem loem lorem orem loem lorem orem is simply dummy text of the printing and loem lorem orem loem lorem orem loem lorem orem loem lorem orem loem lorem',
            color: '#4D2CFF',
            theme: 'No Poverty',
            about: 'lorem lorem loem lorem orem loem lorem orem orem is simply dummy text of ',
            members: {
                one: ['Thomas fashola', 'thomas@email.com'],
                two: ['Thomas fashola', 'thomas@email.com'],
                three: ['Thomas fashola', 'thomas@email.com'],
                four: ['Thomas fashola', 'thomas@email.com'],
                five: ['Thomas fashola', 'thomas@email.com'],
                six: ['Thomas fashola', 'thomas@email.com'],
                seven: ['Thomas fashola', 'thomas@email.com'],
                eight: ['Thomas fashola', 'thomas@email.com']
            },  
            videoLink: 'https://www.youtube.com',
            inspiration: 'lorem lorem lorem loem lorem orem  lorem lorem loem lorem orem',
            whatitdoes: 'lorem lorem loem lorem orem ',
            stackused: ['Next.js', 'React', 'Tailwind.css'],
            challenges: 'lorem lorem loem lorem orem ',
            proudof: 'lorem lorem loem lorem orem ',
            hostedlink: 'www.facebook.com',
            image: 'https.jpg'

        },
        {
            id: 5,
            name: '#sefan celafaremo(ITALIAN)',
            text: 'lorem lorem loem lorem orem loem lorem orem is simply dummy text of the printing and loem lorem orem loem lorem orem loem lorem orem loem lorem orem loem lorem',
            color: '#4D2CFF',
            theme: 'No Poverty',
            about: 'lorem lorem loem lorem orem loem lorem orem orem is simply dummy text of ',
            members: {
                one: ['Thomas fashola', 'thomas@email.com'],
                two: ['Thomas fashola', 'thomas@email.com'],
                three: ['Thomas fashola', 'thomas@email.com'],
                four: ['Thomas fashola', 'thomas@email.com'],
                five: ['Thomas fashola', 'thomas@email.com'],
                six: ['Thomas fashola', 'thomas@email.com'],
                seven: ['Thomas fashola', 'thomas@email.com'],
                eight: ['Thomas fashola', 'thomas@email.com']
            },  
            videoLink: 'https://www.youtube.com',
            inspiration: 'lorem lorem lorem loem lorem orem  lorem lorem loem lorem orem',
            whatitdoes: 'lorem lorem loem lorem orem ',
            stackused: ['Next.js', 'React', 'Tailwind.css'],
            challenges: 'lorem lorem loem lorem orem ',
            proudof: 'lorem lorem loem lorem orem ',
            hostedlink: 'www.facebook.com',
            image: 'https.jpg'

        },
        {
            id: 6,
            name: '#sefan celafaremo(ITALIAN)',
            text: 'lorem lorem loem lorem orem loem lorem orem is simply dummy text of the printing and loem lorem orem loem lorem orem loem lorem orem loem lorem orem loem lorem',
            color: '#4D2CFF',
            theme: 'No Poverty',
            about: 'lorem lorem loem lorem orem loem lorem orem orem is simply dummy text of ',
            members: {
                one: ['Thomas fashola', 'thomas@email.com'],
                two: ['Thomas fashola', 'thomas@email.com'],
                three: ['Thomas fashola', 'thomas@email.com'],
                four: ['Thomas fashola', 'thomas@email.com'],
                five: ['Thomas fashola', 'thomas@email.com'],
                six: ['Thomas fashola', 'thomas@email.com'],
                seven: ['Thomas fashola', 'thomas@email.com'],
                eight: ['Thomas fashola', 'thomas@email.com']
            },  
            videoLink: 'https://www.youtube.com',
            inspiration: 'lorem lorem lorem loem lorem orem  lorem lorem loem lorem orem',
            whatitdoes: 'lorem lorem loem lorem orem ',
            stackused: ['Next.js', 'React', 'Tailwind.css'],
            challenges: 'lorem lorem loem lorem orem ',
            proudof: 'lorem lorem loem lorem orem ',
            hostedlink: 'www.facebook.com',
            image: 'https.jpg'

        },
        {
            id: 7,
            name: '#sefan celafaremo(ITALIAN)',
            text: 'lorem lorem loem lorem orem loem lorem orem is simply dummy text of the printing and loem lorem orem loem lorem orem loem lorem orem loem lorem orem loem lorem',
            color: '#4D2CFF',
            theme: 'No Poverty',
            about: 'lorem lorem loem lorem orem loem lorem orem orem is simply dummy text of ',
            members: {
                one: ['Thomas fashola', 'thomas@email.com'],
                two: ['Thomas fashola', 'thomas@email.com'],
                three: ['Thomas fashola', 'thomas@email.com'],
                four: ['Thomas fashola', 'thomas@email.com'],
                five: ['Thomas fashola', 'thomas@email.com'],
                six: ['Thomas fashola', 'thomas@email.com'],
                seven: ['Thomas fashola', 'thomas@email.com'],
                eight: ['Thomas fashola', 'thomas@email.com']
            },  
            videoLink: 'https://youtu.be/qAxDk5oljc8',
            inspiration: 'lorem lorem lorem loem lorem orem  lorem lorem loem lorem orem',
            whatitdoes: 'lorem lorem loem lorem orem ',
            stackused: ['Next.js', 'React', 'Tailwind.css'],
            challenges: 'lorem lorem loem lorem orem ',
            proudof: 'lorem lorem loem lorem orem ',
            hostedlink: 'www.facebook.com',
            image: 'https.jpg'

        },
        {
            id: 8,
            name: '#sefan celafaremo(ITALIAN)',
            text: 'lorem lorem loem lorem orem loem lorem orem is simply dummy text of the printing and loem lorem orem loem lorem orem loem lorem orem loem lorem orem loem lorem',
            color: '#4D2CFF',
            theme: 'No Poverty',
            about: 'lorem lorem loem lorem orem loem lorem orem orem is simply dummy text of ',
            members: {
                one: ['Thomas fashola', 'thomas@email.com'],
                two: ['Thomas fashola', 'thomas@email.com'],
                three: ['Thomas fashola', 'thomas@email.com'],
                four: ['Thomas fashola', 'thomas@email.com'],
                five: ['Thomas fashola', 'thomas@email.com'],
                six: ['Thomas fashola', 'thomas@email.com'],
                seven: ['Thomas fashola', 'thomas@email.com'],
                eight: ['Thomas fashola', 'thomas@email.com']
            },  
            videoLink: 'https://www.youtube.com',
            inspiration: 'lorem lorem lorem loem lorem orem  lorem lorem loem lorem orem',
            whatitdoes: 'lorem lorem loem lorem orem ',
            stackused: ['Next.js', 'React', 'Tailwind.css'],
            challenges: 'lorem lorem loem lorem orem ',
            proudof: 'lorem lorem loem lorem orem ',
            hostedlink: 'www.facebook.com',
            image: 'https.jpg'

        }
        
    ])
    console.log(projects);

    let [selectedProject, setSelectedProject] = useState(null);

    const [showModal, setShowModal] = useState(false)



    const onProjectSelect = (project) => {
        setSelectedProject(project);
    }

    

    return (
        <ModalContext.Provider value={{ showModal, setShowModal }}>
            
            <div >
               
                <div className="bg-header">
                    <div className="page-head">
                        <div className="sponsors">
                            <span style={{ textAlign: 'center' }}> <img className="andela" src={andela} alt="andela" /> </span> <span className="facebook">FACEBOOK</span>
                            
                        </div>
                            
                        <p className="build-container">#BUILDF<span><img className="sdg-small" src={sdg} alt="sdg" />R</span> <span >SDG</span></p>
                        <p className="challenge animate__animated animate__pulse">CHALLENGE <span className="year">2020</span></p>   
                                
                    </div>


                </div>



                
                
                <div className={darkMode ? `dark-mode bg-section2` : `light-mode bg-section2`}>
                    <div className="container ">
                        <div className="row">
                            <div className="col-12 col-lg-9 my-5 intro-container">
                                <p className={darkMode ? `color-light`: `color-dark`}>The <span style={{ color: '#0fddff' }}>#BuildforSDG</span> Challenge is a Facebook and Andela partnership initiative to up-skill developers across Sub-Saharan (Kenya, Uganda, Cameroon, Ghana, Nigeria and South-Africa) through a six-week immersive program where selected developers worked in agile remote teams to innovate on projects relating to the SDGs.</p>
                                <p className={darkMode ? `color-light` : `color-dark`}>The <span style={{ color: '#0fddff' }}>#BuildforSDG</span> program is committed to helping empower you to build real-world, locally and relevant solutions focused on the Sustainable Development Goals(SDGs) while gaining skills you need to advance your career.</p>
                                <p className={darkMode ? `color-light` : `color-dark`}>The <span style={{ color: '#0fddff' }}>Goal of the #BuildforSDG Challenge 2020</span> is to empower developers to build global, high-value, high-impact projects to help improve their market-readiness while learning within the community.</p>
                            </div>
                        </div>

                    </div> 
                </div>

                
                


                <div className={darkMode ? `dark-mode` : `light-mode `}>
                    <div className="container ">
                        <div className="row">
                            <h2 className="top-projects  my-5">Top 60 Projects</h2>
                        </div>
                        <div  className="row">
                            <div className="col-12 col-lg-9 ">
                                <p className={darkMode ? `color-light intro-container ` : `color-dark intro-container`}>With over 175 team projects in the works, the Innovators of the #BuildforSDG Program are building solutions ranging from Food Bank regulators to simulated concepts for SMART city building as well as improved revenue collection tech models for communities and standardized waste collection solutions.</p>
                                <p className={darkMode ? `color-light intro-container` : `color-dark intro-container`}>These innovators while working in teams are building tech solutions that could make life a lot easier for communities across Sub-Saharan Africa battling the Covid-19 Pandemic. Over 160 teams from #BuildforSDG Challenge are leveraging on Open Source Technologies-- Top-picks and go to choices for these Innovators amongst these Open Source technologies include React, React Native, Jest, Flow, Facebook Authentication, and Graph QL.</p>

                            </div>
                        </div>

                    </div>
                </div>
                

                <div className={darkMode ? `dark-mode` : `light-mode`}>
                    <div className="container ">
                        <div className="row">
                            <h2 className={darkMode ? `color-light theme-header my-4` : `color-dark theme-header my-4`}>PROJECTS BY SDG</h2>
                        </div>


                        <div className="themes-container">
                            <Link to="/themes/no-poverty" style={{ background: '#E5243B' }} className=" card  health  ">
                                <div className=" text-white font-weight-bold">NO POVERTY</div>
                            </Link>
                            <Link to="/themes/zero-hunger" style={{ background: '#DDA639' }} className="card health">
                                <div className=" text-white font-weight-bold">ZERO HUNGER</div>
                            </Link>
                            <Link to="/themes/good-health-and-wellbeing" style={{ background: '#4C9F38' }} className="card health">
                                <div className=" text-white font-weight-bold">GOOD Health And Wellbeing</div>
                            </Link>

                            <Link to="/themes/quality-education" style={{ background: '#C5192D' }} className=" card health  ">
                                <div className=" text-white font-weight-bold">Quality Education</div>
                            </Link>
                            <Link to="/themes/peace-and-justice" style={{ background: '#10689D' }} className="card health">
                                <div className=" text-white font-weight-bold">Peace And Justice.</div>
                            </Link>
                            <Link to="/themes/decent-work" style={{ background: '#A21942' }} className="card health">
                                <div className=" text-white font-weight-bold">Decent Work.</div>
                            </Link>

                            <Link to="/themes/industry-innovation" style={{ background: '#FA6926' }} className=" card  health  ">
                                <div className=" text-white font-weight-bold">Industry innovation</div>
                            </Link>
                            <Link to="/themes/sustainable-cities" style={{ background: '#FB9D24' }} className="card  health">
                                <div className=" text-white font-weight-bold">Sustainable Cities.</div>
                            </Link>
                            <Link to="/themes/patnership-for-goals" style={{ background: '#19486A' }} className="card health">
                                <div className=" text-white font-weight-bold">Patnerships For Goals.</div>
                            </Link>

                        </div>
                 
                    </div>
                </div>

                <div className={darkMode ? `dark-mode` : `light-mode`}>
                    <div className="container py-5">
                   
                        
                        <ProjectDetail project={selectedProject} />




                        <ProjectList projects={projects} onProjectSelect={onProjectSelect} />

                    </div>
                </div>    

                <div className={darkMode ? `dark-mode` : `light-mode`}>
                    <div className="container ">
                        <div className="row twobuttons">
                            <div >
                                <Link className="judges-btn" to="/judges">Meet the judges →</Link>
                                <Link className="projects-btn" to="/projects">See all projects →</Link>
                            </div>
                        </div>
                    </div>
                </div>

               
                
               
                <Footer />
                    
                 


            </div>
        </ModalContext.Provider>  


            
        )
}



export default Home;