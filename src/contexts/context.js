import React, { Component, createContext } from 'react';
import items  from '../data';



const ProjectContext = createContext();


 
class ProjectProvider extends Component {
    state = {
        
        loading: true,
        projects: [],
        sortedProjects: [],
        featuredProjects: []

    }

    componentDidMount() {
        console.log(items);
        let projects = this.formatData(items);
        let featuredProjects = projects.filter(project => project.featured === true);
        this.setState({
            projects : projects,
            featuredProjects: featuredProjects,
            sortedProjects: projects,
            loading: false
        })
    }
    
    formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url);
            
            
            let project = {...item.fields, images, id}
            return project;

        })
        return tempItems;
    }









     render() {
         return (
             <>
                 <ProjectContext.Provider value={{...this.state}}>

                     {this.props.children}

                 </ProjectContext.Provider>
             </>
         )
     }
 }
 

const ProjectConsumer = ProjectContext.Consumer;

export { ProjectProvider, ProjectConsumer, ProjectContext };