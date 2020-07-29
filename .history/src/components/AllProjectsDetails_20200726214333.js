import React, {useContext} from 'react';
import '../App.scss';
import { ModalContext } from '../contexts/ModalContext';
import ReactPlayer from 'react-player';
import { ProjectContext } from '../contexts/context';



export default function AllProjectsDetails({ allProject }) {
    
    let { showModal, setShowModal } = useContext(ModalContext);


    return (
        <div>
            {allProjects.name}
        </div>
    )
}
