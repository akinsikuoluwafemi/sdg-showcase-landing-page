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
                    
                    <div className="col-lg-8 col-sm-12">
                        <h2 className={darkMode ? `color-light h1 font-weight-bold mb-4` : ` h1 color-dark font-weight-bold  mb-4`}>Pitch-A-Thon</h2>
                        <p className={darkMode ? `color-light text-space h3 font-weight-bold` : `color-dark text-space h3 font-weight-bold`}>The goal of the pitch-a-thon was to showcase innovation by our participants in the BUildforSDG Cohort 1 and in turn have them get feedback on how they can improve on their developer skills and application of technology from a team of expert judges.</p>
                    
                        <p className="h3 my-4">The pitch-a-thon involved selecting a team of expert judges that make up some of the brightest minds in our ecosystem. Each team project was judged based on three criteria communicated to them at the start of the cohort;</p>
                        
                        <div className="h2">
                            <ol>
                                <li>Quality of the Idea(project concept)</li>
                                <li>Implementation of the Idea</li>
                                <li>Potential Impact on the SDG.</li>
                            </ol>
                        </div>


                    </div>

                </div>

                <div className="row my-3">
                    <div className="col-lg-8 col-sm-12">
                        <h2 className={darkMode ? `color-light h1 font-weight-bold ` : ` h1 color-dark font-weight-bold`}>Number of teams that participated</h2>
                        <p className="h3">60 teams</p>
                    </div>

                </div>


                <div className="row my-3">

                    <div className="col-lg-8 col-sm-12">
                        <h2 className={darkMode ? `color-light h1 font-weight-bold mb-3` : `mb-3 h1 color-dark font-weight-bold`}>How we scored and judges</h2>
                        <p className={darkMode ? `color-light text-space h3 font-weight-bold mb-3` : `mb-3 color-dark text-space h3 font-weight-bold`}>The team’s projects were judged based on these three criteria.</p>

                        <div className="h2">
                            <ol>
                                <li><span>Quality of the Idea</span>: The creativity, authenticity, and originality of the idea was tested and this criterion had a score of 30%</li>
                                <li>Implementation of the Idea: How well the idea was executed by the innovators was the next criterion to be tested. This had an overall score of 50%</li>
                                <li>Potential Impact on the SDG: The impact the product could have in its stated SDG and the team members community.  was the final criterion for scoring. This ha a score of 20%</li>
                            </ol>
                        </div>

                        <p className={darkMode ? `color-light text-space h3  mb-3` : `mb-3 color-dark text-space h3`}>With the total score equating to 100%, the teams had to pitch their projects to a panel of expert judges.</p>

                    </div>

                </div>


                <div className="row my-3">

                    <div className="col-lg-8 col-sm-12">
                        <h2 className={darkMode ? `color-light h1 font-weight-bold mb-3` : `mb-3 h1 color-dark font-weight-bold`}>Process for pitching</h2>
                        <p className={darkMode ? `color-light text-space h3 font-weight-bold mb-3` : `mb-3 color-dark text-space h3 font-weight-bold`}>The pitch-a-thon had a number of steps required by the team’s TTL to perform, they are </p>

                        <div className="h2">
                            <ol>
                                <li><span>Quality of the Idea</span>: The creativity, authenticity, and originality of the idea was tested and this criterion had a score of 30%</li>
                                <li>Implementation of the Idea: How well the idea was executed by the innovators was the next criterion to be tested. This had an overall score of 50%</li>
                                <li>Potential Impact on the SDG: The impact the product could have in its stated SDG and the team members community.  was the final criterion for scoring. This ha a score of 20%</li>
                            </ol>
                        </div>

                        <p className={darkMode ? `color-light text-space h3  mb-3` : `mb-3 color-dark text-space h3`}>With the total score equating to 100%, the teams had to pitch their projects to a panel of expert judges.</p>

                    </div>

                </div>










            </div>
        </div>
    )
}
