import React, {useState} from 'react';
import { ModalContext } from '../contexts/ModalContext';


export default function Themes({match}) {
    const [showModal, setShowModal] = useState(false)
    

    return (
        <ModalContext.Provider value={{ showModal, setShowModal }}>
            <div>
                Themes of theme
            </div>
        </ModalContext.Provider>
        
    )
}
