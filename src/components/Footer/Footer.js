import React, { useContext } from 'react';
import './Footer.scss';
import { ModeContext } from '../../contexts/ModeContext';

export default function Footer() {
    
    let { darkMode } = useContext(ModeContext);

    return (
        <div >
            <footer className={darkMode ? `footer dark-mode` : `footer light-mode foot`}>
                <div >
                    <p className={darkMode ? `color-light` : `color-dark`}>This website was built by a Programme Assistant in the <span style={{ color: '#0fddff' }}>#BUILDFORSDG.</span></p>
                    <h2 className={darkMode ? `color-light footer-heading` : `color-dark footer-heading`}>Africans can build amazing products.</h2>
                    <p className={darkMode ? `color-light footer-heading` : `color-dark footer-heading`}>We just need an opportunity.</p>
                </div>
            </footer>
        </div>
        
    )
}
