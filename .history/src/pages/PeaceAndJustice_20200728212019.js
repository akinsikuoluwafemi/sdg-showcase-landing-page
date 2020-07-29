import React, {useState, useContext, useEffect} from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../contexts/context';
import { ModeContext } from '../contexts/ModeContext';
import { PeaceModalContext } from '../contexts/ModalContext';
import PeaceList from '../components/PeaceList';
import Aos from 'aos';
import "aos/dist/aos.css";



export default function PeaceAndJustice() {
       useEffect(() => {
        Aos.init({
            duration: 2000
        })
       }, [])
    
    let { darkMode } = useContext(ModeContext);
    
    const [peaceModal, setPeaceModal] = useState(false);

    let { peaceAndJustice } = useContext(ProjectContext);
    console.log(peaceAndJustice);
    
    return (
        <PeaceModalContext.Provider value={{ peaceModal, setPeaceModal}}>

        </PeaceModalContext.Provider>
        
    )
}
