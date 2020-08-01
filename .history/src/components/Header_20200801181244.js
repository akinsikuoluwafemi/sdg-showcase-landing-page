import React from 'react';
import sdg from '../images/sdg.png';
import { Link } from 'react-router-dom';
import { ModeContext } from '../contexts/ModeContext';

export default function Header() {
    
    
    return (
        <nav class="header-nav container mb-3">
            <Link to="/"><img class="navbar-brand sdg-logo" src={sdg} alt="" /></Link>

            <ul class="header-list">
                <li class="nav-item ">
                    <Link to="/projects" className={darkMode ? `dark-list nav-link` : `color-white nav-link`} href="#">Projects</Link>
                </li>
               
            </ul>
        </nav>
    )
}
