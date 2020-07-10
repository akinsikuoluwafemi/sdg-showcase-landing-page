import React from 'react';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../contexts/context';



const ThemeCard = ({name,color}) => {
    return (
        <Link to={`/themes/${name}`} style={{ background: color }} className=" card health ">
            <div className=" text-white font-weight-bold font-italic">{name}</div>
        </Link>
    )
}


export default ThemeCard;