import React,{ useContext} from 'react';
import '../../App.scss';
import { ModalContext } from '../../contexts/ModalContext';



export default function ProjectDetail({project}) {


    let { showModal, setShowModal } = useContext(ModalContext);
    console.log(showModal +'from detail');
    // console.log(loading)
    if (!project) {

        return (
                <div style={{ display: 'none' }}>Loading...</div>

        ) 
    } 


    return (

            <div className={showModal ? `modal` : `hide-modal`}>
            <div className="shadow-lg  modal-content">
                <div className="header-modal">
                    <div className="header-modal-text">
                        <p className="project-na">Mind Care</p>
                        <p className="theme-name">No Poverty</p>
                    </div>

                    <div className="icon-modal">
                        <div className="icon-round">

                        </div>

                        <a className="close-btn" href={project.videoLink} target="_"> <i className="fas fa-external-link-alt fa-2x"></i>  </a>
                    </div>

                </div>
                
                

                <div className="inner-content ">
                    
                   
                    <div className="vidd">
                        <div class="iframe-container">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/X4t0JxiBeO0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                   
                    
                    
                </div>
                <h1 className="">About</h1>
                <h1 className="">Name of video</h1>


                

                </div>
            </div>
                    
                    
            

        )
    
    
    
}



// 

