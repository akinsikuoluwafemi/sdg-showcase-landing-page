import React from 'react';
import '../../App.scss';


export default function ProjectDetail({project, showModal}) {
    

    if (!project) {

        return <div style={{display:'none'}}>Loading...</div>
    } 

    console.log(showModal + 'from detail page')

    return (
            <div  className="modal">
                <div className ="shadow-lg  modal-content">
                <h1>{project.name}</h1>
                    <span onClick={() => console.log('closed')} class="close">&times;</span>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p style={{ fontSize: '2rem' }}>{project.text}</p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="vid">
                                <div className="embed-responsive embed-responsive-16by9">
                                    <iframe className="embed-responsive-item" src={project.videoLink} allowFullscreen autoPlay title="content"></iframe>
                                </div>
                            </div>

                        </div>
                    </div>



                </div>
            </div>
                
                
            

        )
    
    
    
}
