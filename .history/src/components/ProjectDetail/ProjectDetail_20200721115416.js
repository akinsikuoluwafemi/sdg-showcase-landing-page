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
?
