import React, {useContext} from 'react';
import Header from '../components/Header';
import { ModeContext } from '../contexts/ModeContext';



export default function Judges() {
    
    let { darkMode } = useContext(ModeContext);

    
    
    return (
        <div>
            <Header/>
            <div className="container">
                <h2 style={{ color: '#0459DF' }} className="top-projects  my-5">Judges</h2>

                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <p className={darkMode ? `color-light text-space h3 font-weight-bold` : `color-dark text-space h3 font-weight-bold`}>We consider every participant who dedicated their time and skills to #BuildforSDG a winner. That said, our team of health & technical expert judges have spent the past week considering the viability, potential and scalability of submissions to land on the following highlighted projects.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
