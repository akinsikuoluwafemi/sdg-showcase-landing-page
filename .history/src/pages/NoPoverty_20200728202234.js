import React, {useContext, useEffect} from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../contexts/context';
import NoPovertyList from '../components/NoPovertyList';
import { ModeContext } from '../contexts/ModeContext';

import Aos from 'aos';
import "aos/dist/aos.css";

export default function NoPoverty() {
   useEffect(() => {
        Aos.init({
            duration: 2000
        })
    },[])

    let { darkMode } = useContext(ModeContext);

    const { noPoverty } = useContext(ProjectContext);
    console.log(noPoverty);
    
    return (
        <NoPovertyModalContext.Provider>

        </NoPovertyModalContext.Provider>
        
    )
}
