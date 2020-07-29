import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../contexts/context';
import { ModeContext } from '../contexts/ModeContext';
import { SustainableModalContext } from '../contexts/ModalContext';
import SustainableList from '../components/SustainableList';
import Aos from 'aos';
import "aos/dist/aos.css";


export default function SustainableCities() {
       useEffect(() => {
        Aos.init({
            duration: 2000
        })
       }, [])

    let { darkMode } = useContext(ModeContext);
    
    let [sustainModal, setSustainModal] = useState(false);
    
    let { sustainableCities } = useContext(ProjectContext);
    console.log(sustainableCities)
    
    return (
        <SustainableModalContext.Provider value={{ sustainModal, setSustainModal}}>

        </SustainableModalContext.Provider>
        
    )
}
