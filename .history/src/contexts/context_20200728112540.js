import React, { Component, createContext } from 'react';
import items  from '../data';



const ProjectContext = createContext();


 
class ProjectProvider extends Component {
    state = {
        
        loading: true,
        projects: [],
        sortedProjects: [],
        featuredProjects: [],
        noPoverty: [],
        zeroHunger: [],
        patnership: [],
        goodHealth: [],
        qualityEdu: [],
        peaceAndJustice: [],
        decentWork: [],
        industryInno: [],
        sustainableCities: []


    }

    componentDidMount() {
        console.log(items);
        let projects = this.formatData(items);
        let featuredProjects = projects.filter(project => project.featured === true);
        let noPoverty = projects.filter(project => project.theme === 'No-Poverty');
        let zeroHunger = projects.filter(project => project.theme === 'Zero Hunger');
        let patnership = projects.filter(project => project.theme === 'Patnerships for goals');
        let goodHealth = projects.filter(project => project.theme === 'Good Health and Well-being');
        let qualityEdu = projects.filter(project => project.theme === 'Quality Education');
        let peaceAndJustice = projects.filter(project => project.theme === 'Peace-And-Justice');
        let decentWork = projects.filter(project => project.theme === 'Decent-Work');
        



        this.setState({
            projects : projects,
            featuredProjects: featuredProjects,
            sortedProjects: projects,
            loading: false,
            noPoverty: noPoverty,
            zeroHunger: zeroHunger,
            patnership: patnership,
            goodHealth: goodHealth,
            qualityEdu: qualityEdu,
            peaceAndJustice: peaceAndJustice


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

    getTheme = (theme) => {
        let tempProjects = [...this.state.projects];
        const project = tempProjects.filter(project => project.theme === theme)
        return project;
    }



     render() {
         return (
             <>
                 <ProjectContext.Provider value={{...this.state, getTheme: this.getTheme}}>

                     {this.props.children}

                 </ProjectContext.Provider>
             </>
         )
     }
 }
 

const ProjectConsumer = ProjectContext.Consumer;

export { ProjectProvider, ProjectConsumer, ProjectContext };
