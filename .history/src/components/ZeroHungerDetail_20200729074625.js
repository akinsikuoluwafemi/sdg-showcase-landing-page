import React, {useContext} from 'react';
import '../App.scss';
import ReactPlayer from 'react-player';
import { ZeroHungerModalContext } from '../contexts/ModalContext';


const  ZeroHungerDetails = ({project}) => {
    
    let { zeroModal, setZeroModal} = useContext(ZeroHungerModalContext)
    
    return (
        <div>

        </div>
    )
}

export default ZeroHungerDetails;