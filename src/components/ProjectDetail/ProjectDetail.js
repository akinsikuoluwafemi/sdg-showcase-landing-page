import React from 'react';
import '../../App.scss';

export default function ProjectDetail({project}) {
    
   

    if (!project) {
        return <div style={{display:'none'}}>Loading...</div>
    } 
        return (
                <div className="overlay-content">
                    <div className="shadow-lg overlay">
                    
                    {project.name}

                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p>{project.text}</p>

                            </div>
                        </div>
                    </div>



                    </div>
                </div>
                
            

        )
    
    
    
}
