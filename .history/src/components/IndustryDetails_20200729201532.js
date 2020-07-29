import React from 'react';
import '../App.scss';
import ReactPlayer from 'react-player';
import { IndustryModalContext } from '../contexts/ModalContext';



import React from 'react'

export default function IndustryDetails({ project }) {
    

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
