import React, { useContext } from 'react';
import '../App.scss';
import ReactPlayer from 'react-player';
import { NoPovertyModalContext } from '../contexts/ModalContext';

const NoPovertyDetail = ({project}) => {
    
    let { noPovertyModal, setNoPovertyModal } = useContext(NoPovertyModalContext);
    if (!project){

        return (
            <div style={{ display: 'none' }}>Loading...</div>

        )
    }

    const closeModal = () =>{
        setNoPovertyModal(false)


    }

    return (
        // <div className="modal">
        //     <div className="modal-content">
        //         {project.name}

        //     </div>
        // </div>


        <div className={allProjectModal ? `modal` : `hide-modal`}>

            <div style={{ background: `${allProject.color}` }} className="shadow-lg  modal-content">
                <div className="header-modal">
                    <div className="header-modal-text">
                        <p className="project-name">{allProject.name}</p>
                        <p style={{ color: allProject.color }} className="theme-name">{allProject.theme}</p>
                    </div>
                    <div className="icon-modal">
                        <span style={{ color: 'white' }} onClick={closeModal} className="close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>

                        </span>

                        <a style={{ color: 'white' }} className="close-btn" href={allProject.hostedlink} target="_">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
                        </a>
                    </div>

                </div>

                <div className="inner-content">

                    {allProject.videoLink.length === 0 ? <div className=" small-img big-image img-responsive" style={{ backgroundImage: `url(${allProject.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'top' }}></div> :

                        <div className='player-wrapper'>

                            <ReactPlayer
                                playing={allProjectModal ? true : false}
                                className='react-player'
                                url={allProject.videoLink}
                                width='100%'
                                height='100%'
                                controls={true}
                            />
                        </div>

                    }


                </div>


                <div className="text-project">
                    <div className="pt-5">
                        <h2 className="font-weight-bold">About :</h2>
                        <p className="h3 info">{allProject.about}</p>
                    </div>

                    <div>
                        <h2 className="font-weight-bold">Facebook Open source used :</h2>
                        <p className="h3 info">{allProject.stackused.map(stack => stack)}</p>
                    </div>
                    <div>
                        <h2 className="font-weight-bold">Nationality :</h2>
                        <p className="h3 info">{allProject.nationality.map((country, i) => <li key={i}>{country}</li>)}</p>
                    </div>
                    <div>
                        <h2 className="font-weight-bold">Team Members :</h2>
                        <p className="h3 info">{
                            allProject.members.map((item, i) => (
                                <ul key={i}>
                                    <li >{item}</li>
                                </ul>
                            ))
                        }</p>
                        <a href={`mailto:${allProject.email}`} style={{ cursor: 'pointer', fontSize: '2rem' }} className="btn-info font-weight-bold btn-lg">Email the builder</a>
                    </div>
                </div>








            </div>
        </div>
    )
}

export default NoPovertyDetail