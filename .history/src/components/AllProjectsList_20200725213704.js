import React from 'react';
import AllProjectItem from './AllProjectsItem';

export default function AllProjectsList({allProjects}) {
    console.log(allProjects);

    allProjects.map((project) => (
        <AllProjectItem />
    ))
    
    return (
        <div>
            {allProjects.length}
        </div>
    )
}
