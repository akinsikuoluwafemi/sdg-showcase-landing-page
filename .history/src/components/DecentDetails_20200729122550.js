import React, {useContext} from 'react';
import '../App.scss';
import ReactPlayer from 'react-player';
import { DecentModalContext } from '../contexts/ModalContext';



export default function DecentDetails({ project }) {
    

    let { decentModal, setDecentModal } = useContext(DecentModalContext);

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
