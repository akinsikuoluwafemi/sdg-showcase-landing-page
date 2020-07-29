import React, {useState, useContext, useEffect} from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { ProjectContext } from '../contexts/context';
import { ModeContext } from '../contexts/ModeContext';
import { ZeroHungerModalContext } from '../contexts/ModalContext';

import ZeroHungerList from '../components/ZeroHungerList';
import Aos from 'aos';
import "aos/dist/aos.css";



export default function ZeroHunger(){
       useEffect(() => {
        Aos.init({
            duration: 2000
        })
    },[])


    let { darkMode } = useContext(ModeContext);



    const { zeroHunger } = useContext(ProjectContext);
    console.log(zeroHunger);
    // console.log(ProjectContext);

    const [zeroModal, setZeroModal] = useState(false);

    return (
        <ZeroHungerModalContext value={{ zeroModal, setZeroModal}}>

        </ZeroHungerModalContext>
        
    )
}
