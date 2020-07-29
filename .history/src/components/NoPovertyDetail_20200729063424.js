import React, { useContext } from 'react';
import '../App.scss';
import ReactPlayer from 'react-player';
import { NoPovertyModalContext } from '../contexts/ModalContext';

const NoPovertyDetail = ({project}) => {
    
    let { noPovertyModal, setNoPovertyModal } = useContext(NoPovertyModalContext);
    if (!project)
    {

        return (
            <div style={{ display: 'none' }}>Loading...</div>

        )
    }

    return (
        <div>
            NoPovertyDetail
        </div>
    )
}

export default NoPovertyDetail