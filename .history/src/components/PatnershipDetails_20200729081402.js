import React, {useContext} from 'react';
import { PatnershipModalContext } from '../contexts/ModalContext';



export default function PatnershipDetails({project}) {
    
    let { patnerModal, setPatnerModal } = useContext(PatnershipModalContext);

     if (!project){

        return (
            <div style={{ display: 'none' }}>Loading...</div>

        )
     }
    
     const closeModal = () =>{
         setZeroModal(false)

    }
    
    
    
    return (
        <div>
            
        </div>
    )
}


