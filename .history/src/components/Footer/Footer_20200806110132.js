import React, {useContext} from 'react';
import './Footer.scss';
import { ModeContext } from '../../contexts/ModeContext';
import '../../App.scss';
import andelaLogo from '../../images/and-logo.png';


export default function Footer() {
    let { darkMode } = useContext(ModeContext)

    return (
        <div className={darkMode ? `px-5 py-5 dark-footer` : `px-5 py-5 light-footer`}>
            <footer className="">
                
                <div className="">
                    <div className="">
                        <h1>FACEBOOK Developer Circles</h1>
                        <p className="h3">Developer Circles from Facebook is a program designed to create locally organized communities for developers. These communities are meant to educate and provide a forum for discussion and knowledge sharing around topics that are top-of-mind for developers in a particular market.</p>
                    </div>
                    <div className="">
                        <img src={andelaLogo} alt=""/>
                    </div>
                </div>


            </footer>
        </div>

        
        
    )
}
