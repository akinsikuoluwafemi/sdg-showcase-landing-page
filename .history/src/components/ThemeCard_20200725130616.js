import React from 'react';
import { Link } from 'react-router-dom';


const ThemeCard = ({name,color}) => {
    return (
        <Link to="/themes/no-poverty" style={{ background: color }} className=" card health ">
            <div className=" text-white font-weight-bold font-italic">{name}</div>
        </Link>
    )
}

export default ThemeCard;