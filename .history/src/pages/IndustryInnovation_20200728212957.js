import React,{useState, useContext, useEffect} from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../contexts/context';
import { ModeContext } from '../contexts/ModeContext';
import { IndustryModalContext } from '../contexts/ModalContext';

import IndustryList from '../components/IndustryList';
import Aos from 'aos';
import "aos/dist/aos.css";


export default function IndustryInnovation() {
       useEffect(() => {
        Aos.init({
            duration: 2000
        })
       }, [])
    
    let { darkMode } = useContext(ModeContext);
    
    let [industryModal, setIndustryModal] = useState(false);
    
    let { industryInno } = useContext(ProjectContext);
    console.log(industryInno);
    

    return (
        <IndustryInnovation value={{ industryModal, setIndustryModal}}>

        </IndustryInnovation>
        
    )
}
