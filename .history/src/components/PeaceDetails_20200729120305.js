import React, { useContext } from 'react';
import '../App.scss';
import ReactPlayer from 'react-player';
import { PeaceModalContext } from '../contexts/ModalContext';



const PeaceDetails = ({ project }) => {
    
    let { peaceModal, setPeaceModal } = useContext(PeaceModalContext);

     if (!project){

        return (
            <div style={{ display: 'none' }}>Loading...</div>

        )
      }

    

    return (
        <div>

        </div>
    )
}

export default PeaceDetails;