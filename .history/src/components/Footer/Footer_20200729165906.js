import React, {useContext} from 'react';
import './Footer.scss';
import { ModeContext } from '../../contexts/ModeContext';
import '../../App.scss';

export default function Footer() {
    let { darkMode } = useContext(ModeContext)
    console.log(darkMode)

    return (
        <div>
            <footer className="footer foote">
                
                <div className={darkMode ? ` footer-background dark-footer` : ` footer-background light-footer`}>
                    <div className="footer-text">
                        <p>This website was built by  <a target="_" style={{ color: '#35DDFF' }} href="https://femiakin.com/">Femi</a>, a Programme Assistant in the <span style={{ color: '#0fddff' }}>#BUILDFORSDG.</span></p>
                        <h2 className="footer-heading">Africans can build amazing products.</h2>
                        <p className="footer-heading">We just need opportunities...</p>
                    </div>
                </div>


            </footer>
        </div>

        
        
    )
}
