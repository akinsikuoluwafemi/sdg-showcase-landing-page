import React from 'react';
import '../../App.scss';

export default function ProjectDetail({project}) {
    
   

    if (!project) {
        return <div style={{display:'none'}}>Loading...</div>
    } 
        return (
                <div className=" modal">
                <div className="shadow-lg  modal-content">
                    <h1>{project.name}</h1>

                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p style={{fontSize: '2rem'}}>{project.text}</p>

                            </div>
                        </div>
                        <div className="row">
                            <div  className="vid">
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe  class="embed-responsive-item" src={project.videoLink} allowfullscreen autoplay title="content"></iframe>
                                </div>
                            </div>

                        </div>
                    </div>



                    </div>
                </div>
                
            

        )
    
    
    
}
