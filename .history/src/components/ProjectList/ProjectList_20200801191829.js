import React, {useContext} from 'react';
import ProjectItem from '../ProjectItem/ProjectItem';
import { ProjectContext }from '../../contexts/context';
import Loading from '../Loading';



export default function ProjectList({ projects, onProjectSelect}) {
    

    let { loading } = useContext(ProjectContext);
   

    const renderedList =  projects.map((project,index) => {
        
        return (
            
            <ProjectItem  project={project} key={project.id} onProjectSelect={onProjectSelect} />
                                          
        )
        
    })
   

    return (
        <section className={loading ? `d-block` : `project-card-container`}>
            
            {loading ? <Loading/> : renderedList}
        </section>
    )
}
