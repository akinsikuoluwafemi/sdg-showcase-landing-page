import React, {useState, useContext, useEffect} from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../contexts/context';
import PatnershipList from '../components/PatnershipList';
import { ModeContext } from '../contexts/ModeContext';
import { PatnershipModalContext } from '../contexts/ModalContext';


import Aos from 'aos';
import "aos/dist/aos.css";


export default function PatnershipForGoals() {
    
       useEffect(() => {
        Aos.init({
            duration: 2000
        })
    },[])

    let { darkMode } = useContext(ModeContext);

    const [patnerModal, setPatnerModal] = useState(false);

    let { patnership } = useContext(ProjectContext);
    console.log(patnership);
    
    
    return (
        <PatnershipModalContext value={{ patnerModal, setPatnerModal}}>

        </PatnershipModalContext>
        
    )
}
