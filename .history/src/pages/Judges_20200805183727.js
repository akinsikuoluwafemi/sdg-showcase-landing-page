import React, {useContext} from 'react';
import Header from '../components/Header';
import { ModeContext } from '../contexts/ModeContext';



export default function Judges() {
    
    let { darkMode } = useContext(ModeContext);

    
    
    return (
        <div className={darkMode ? `dark-mode bg-section2` : `light-mode bg-section2`}>
            <Header/>
            <div className="container">
                <h2 style={{ color: '#0459DF' }} className="top-projects  my-5">Judges</h2>

                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <h2 className={darkMode ? `color-light font-weight-bold mb-3` : `color-dark font-weight-bold v`}>Pitch-A-Thon</h2>
                        <p className={darkMode ? `color-light text-space h3 font-weight-bold` : `color-dark text-space h3 font-weight-bold`}>The goal of the pitch-a-thon was to showcase innovation by our participants in the BUildforSDG Cohort 1 and in turn have them get feedback on how they can improve on their developer skills and application of technology from a team of expert judges.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
