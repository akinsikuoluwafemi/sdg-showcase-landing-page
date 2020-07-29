import React from 'react';
import { Link } from 'react-router-dom';


const ThemeCard = ({name,color}) => {
    return (
        <div>
            <Link to="/themes/no-poverty" style={{ background: color }} className=" card health ">
                <div className=" text-white font-weight-bold font-italic">{name}</div>
            </Link>
            <Link to="/themes/zero-hunger" style={{ background: color }} className=" card health ">
                <div className=" text-white font-weight-bold font-italic">{name}</div>
            </Link>
        </div>
      
    )
}

export default ThemeCard;