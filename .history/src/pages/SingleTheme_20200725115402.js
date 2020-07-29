import React, { Component} from 'react';
import { ProjectContext } from '../contexts/context';
import '../App.scss'
import {Link} from 'react-router-dom'
import { ModalContext } from '../contexts/ModalContext';


class SingleTheme extends Component {
    constructor(props){
        super(props);
        this.state = {
            theme: this.props.match.params.theme
        }
    }


    static contextType = ProjectContext;

    // static contextType = ModalContext;


    render(){
        
        const {getTheme} = this.context;
        
        const theme = getTheme(this.state.theme);
        console.log(theme);

    
       

        const renderedTheme = theme.map(project => {
            return (
                <div className=" project-card rounded py-3 px-3" data-aos="fade">
                    <Link  to="/" style={{ color: project.color }} className="project-name">{project.name}</Link>
                    <p className="mt-3">{project.headline} </p>
                </div>   
            )
        })
            
        
        

        return (
            <ModalContext.Provider>

            </ModalContext.Provider>
            
        )
    }
}


export default SingleTheme;