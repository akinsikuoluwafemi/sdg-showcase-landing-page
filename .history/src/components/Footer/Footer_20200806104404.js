import React, {useContext} from 'react';
import './Footer.scss';
import { ModeContext } from '../../contexts/ModeContext';
import '../../App.scss';

export default function Footer() {
    let { darkMode } = useContext(ModeContext)

    return (
        <div className={darkMode ? ` dark-footer` : `  light-footer`}>
            <footer className="container">
                
                <div className="row">
                    <div className="col">
                        
                    </div>
                    <div className="col">

                    </div>
                </div>


            </footer>
        </div>

        
        
    )
}
