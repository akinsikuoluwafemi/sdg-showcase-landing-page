import React, {useContext} from 'react';
import './Footer.scss';
import { ModeContext } from '../../contexts/ModeContext';
import '../../App.scss';

export default function Footer() {
    let { darkMode } = useContext(ModeContext)

    return (
        <div>
            <footer className="footer foote">
                
                <div className={darkMode ? `  dark-footer` : ` footer-background light-footer`}>
                    <div className="footer-text">
                        
                    </div>
                </div>


            </footer>
        </div>

        
        
    )
}
