import React, {useContext} from 'react';
import './Footer.scss';
import { ModeContext } from '../../contexts/ModeContext';
import '../../App.scss';

export default function Footer() {
    let { darkMode } = useContext(ModeContext)
    console.log(darkMode)

    return (
        <div className={darkMode ? `dark-mode` : `light-mode`}>
            <footer className="footer foote">
                
                <div className={darkMode ? `dark-mode` : `light-mode footer-background`}>
                    <div className="footer-text">
                        <p>This website was built by  <a style={{ color: '#000' }} href="https://www.google.com/">Femi</a>, a Programme Assistant in the <span style={{ color: '#0fddff' }}>#BUILDFORSDG.</span></p>
                        <h2 className="footer-heading">Africans can build amazing products.</h2>
                        <p className="footer-heading">We just need opportunities...</p>
                    </div>
                </div>


            </footer>
        </div>

        
        
    )
}
