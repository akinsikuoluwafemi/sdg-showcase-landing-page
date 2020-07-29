import React, {useContext} from 'react';
import '../App.scss';
import ReactPlayer from 'react-player';
import { SustainableModalContext } from '../contexts/ModalContext';




export default function SustainableDetails({ project }) {
    
    let { sustainModal, setSustainModal } = useContext(SustainableModalContext);
    
        if (!project){

        return (
            <div style={{ display: 'none' }}>Loading...</div>

        )
      }
    
    const closeModal = () =>{
        setSustainModal(false);

    }




    return (
        <div>
            
        </div>
    )
}
