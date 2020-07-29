import React from 'react';
import AllProjectItem from './'

export default function AllProjectsList({allProjects}) {
    console.log(allProjects);
    
    return (
        <div>
            {allProjects.length}
        </div>
    )
}
