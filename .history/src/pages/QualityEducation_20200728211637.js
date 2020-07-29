import React, {useState, useContext, useEffect} from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../contexts/context';
import { ModeContext } from '../contexts/ModeContext';
import QualityList from '../components/QualityList';
import Aos from 'aos';
import "aos/dist/aos.css";
import { QualityModalContext } from '../contexts/ModalContext';


export default function QualityEducation() {
       useEffect(() => {
        Aos.init({
            duration: 2000
        })
       }, [])
    
    let { darkMode } = useContext(ModeContext);

    let [qualityModal, setQualityModal] = useState(false);
    
    let { qualityEdu } = useContext(ProjectContext);
    console.log(qualityEdu);
    
    
    return (
        <QualityModalContext.Provider value={{ qualityModal, setQualityModal}}>

        </QualityModalContext.Provider>
        
    )
}
