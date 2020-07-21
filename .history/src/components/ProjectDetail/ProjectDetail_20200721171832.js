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
                        <p className="project-name">{project.name}</p>
                        <p className="theme-name">{project.theme}</p>
                    </div>
                    <div className="icon-modal">
                        <a onClick={() => setShowModal(false)} className="close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                        
                        </a>

                        <a style={{color: 'white'}} className="close-btn" href={project.videoLink} target="_">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
                        </a>
                    </div>

                </div>
                
                

                <div className="inner-content ">
                    
                   
                    <div className="vidd">
                        <div class="iframe-container">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/X4t0JxiBeO0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                   
                    
                    
                </div>
                <div className="text-project">
                    <div className="pt-5">
                        <h2 className="font-weight-bold">About</h2>
                        <p className="h3 info">{project.about}</p>
                    </div>

                    <div>
                        <h2 className="font-weight-bold">Facebook Open source used</h2>
                        <p className="h3 info">{project.stackused.map(stack => stack)}</p>
                    </div>
                    <div>
                        <h2 className="font-weight-bold">Team Members</h2>
                        <p className="h3 info">{
                            project.members.map(item => (
                                <small>{item}</small>
                            ))
                        }</p>
                    </div>
                </div>
                


                

                </div>
            </div>
                    
                    
            

        )
    
    
    
}



// 

