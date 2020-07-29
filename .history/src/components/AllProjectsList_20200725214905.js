import React from 'react';
import AllProjectItem from './AllProjectsItem';
import {ModalContext} from '../'

export default function AllProjectsList({allProjects}) {
    console.log(allProjects);

    const renderedList = allProjects.map((allProjects) => (
       <AllProjectItem allProjects={allProjects} />
    ))
    
    return (
        <div>
            {renderedList}
        </div>
    )
}
