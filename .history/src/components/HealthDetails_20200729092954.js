import react, {useContext} from 'react';
import '../App.scss';
import ReactPlayer from 'react-player';
import { HealthModalContext } from '../contexts/ModalContext';


export default function HealthDetails({ project }) {
    
    let { healthModal, setHealthModal } = useContext(HealthModalContext);
    
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
