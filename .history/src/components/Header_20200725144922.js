import React from 'react';
import sdg from '../images/sdg'

export default function Header() {
    return (
        <nav class="header-nav container ">
            <a class="navbar-brand" href="#">Navbar</a>

            <ul class="header-list">
                <li class="nav-item">
                    <a class="nav-link" href="#">Projects</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Judges</a>
                </li>
            </ul>
        </nav>
    )
}
