import React, { Component } from 'react';
import Header from '../components/Header';
import './Projects.scss';



class Projects extends Component {
    render(){

        return (
            <>
            <Header/>
                <div className="container">
                    <p>Top 60 projects page</p>
                    <h2 className="top-projects  my-5">Featured Projects</h2>

                </div>
            </>
        )
        
    }
   
}

export default Projects;