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

                </div>
            
        
            </div>
                    
                    
            

        )
    
    
    
}



/* 
<div className="grid-container">
    <div className='project-header'>
        <h1 className="project-name">{project.name}</h1>
        <span className="goal-name">No Poverty</span>

        {/* <div>{loading}</div> */}

        <div className="icons">
            <span onClick={() => setShowModal(false)} className="close">&times;</span>

            <a href={project.videoLink} target="_"> <i className="fas fa-external-link-alt fa-2x"></i>  </a>
        </div>
        <div className="project-about">
            <p >{project.text} lorem lorem lorem</p>
        </div>

        <p className="project-image">iMAGE</p>
    </div>

    <div className="">
        <div className="">
            <div className="">
            </div>


        </div>

        <div className="vid">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={project.videoLink} allowFullscreen title="youtube video player"></iframe>
            </div>
        </div>



    </div>


</div>


*// 