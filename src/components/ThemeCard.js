import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ThemeCard extends Component {
  
    render(){
        
        return (
            <Link to="/themes/no-poverty" style={{ background: this.props.color }} className=" card health ">
                <div className=" text-white font-weight-bold">{this.props.name}</div>
            </Link>
        )
    }
}

export default ThemeCard;