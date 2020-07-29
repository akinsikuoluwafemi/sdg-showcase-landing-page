import React, {useState, useContext, useEffect} from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../contexts/context';
import { ModeContext } from '../contexts/ModeContext';
import { HealthModalContext } from '../contexts/context';
import HealthList from '../components/HealthList';
import Aos from 'aos';
import "aos/dist/aos.css";


export default function GoodHealthAndWellbeing() {
    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    }, [])

    let { darkMode } = useContext(ModeContext);
    
    let [ healthModal, setHealthModal ] = useState(false);
    
    let { goodHealth } = useContext(ProjectContext);
    
    return (
        <HealthModalContext value={{ healthModal, setHealthModal }}>

        </HealthModalContext>
        
    )
}
