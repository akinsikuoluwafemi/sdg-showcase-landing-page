import React, { useContext } from 'react';
import '../App.scss';
import ReactPlayer from 'react-player';
import { QualityModalContext } from '../contexts/ModalContext';


export default function QualityDetails({ project }) {
    
    let { qualityModal, setQualityModal } = useContext(Quali);

      if (!project){

        return (
            <div style={{ display: 'none' }}>Loading...</div>

        )
      }
    
    const closeModal = () =>{
         setHealthModal(false)

    }


    return (
        <div>
            
        </div>
    )
}
