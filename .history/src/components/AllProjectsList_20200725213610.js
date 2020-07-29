import React from 'react';
import AllProjectItem from './AllProjectsItem';

export default function AllProjectsList({allProjects}) {
    console.log(allProjects);

    
    
    return (
        <div>
            {allProjects.length}
        </div>
    )
}
