import React, {useState} from 'react';
import { ModalContext } from '../contexts/ModalContext';


export default function Themes({match}) {
    const [showModal, setShowModal] = useState(false)
    

    return (
        <ModalContext.Provider>
            
        </ModalContext.Provider>
        <div>
            Themes of theme
        </div>
    )
}
