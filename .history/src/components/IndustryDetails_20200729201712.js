import React, {useContext} from 'react';
import '../App.scss';
import ReactPlayer from 'react-player';
import { IndustryModalContext } from '../contexts/ModalContext';



import React from 'react'

export default function IndustryDetails({ project }) {
    
    let { industryModal, setIndustryModal} = useContext(Industr)

    if (!project)
    {

        return (
            <div style={{ display: 'none' }}>Loading...</div>

        )
    }
    
    
    
    return (
        <div>
            
        </div>
    )
}
