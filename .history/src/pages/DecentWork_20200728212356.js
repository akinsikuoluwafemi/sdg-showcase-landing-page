import React, {useState, useContext, useEffect} from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../contexts/context';
import DecentList from '../components/DecentList';
import { ModeContext } from '../contexts/ModeContext';
import { DecentModalContext } from '../contexts/ModalContext';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function DecentWorks() {
    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])

    let { darkMode } = useContext(ModeContext);
    
    let [ decentModal, setDecentModal ] = useState(false);

    let { decentWork } = useContext(ProjectContext);

    return (
        <DecentModalContext.Provider value={{ decentModal, setDecentModal}}>

        </DecentModalContext.Provider>
        
    )
}
