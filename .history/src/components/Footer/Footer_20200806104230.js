import React, {useContext} from 'react';
import './Footer.scss';
import { ModeContext } from '../../contexts/ModeContext';
import '../../App.scss';

export default function Footer() {
    let { darkMode } = useContext(ModeContext)

    return (
        <div>
            <footer className="footer-background">
                
                <div className={darkMode ? ` dark-footer` : `  light-footer`}>
                    <div className="container">
                        
                    </div>
                </div>


            </footer>
        </div>

        
        
    )
}
