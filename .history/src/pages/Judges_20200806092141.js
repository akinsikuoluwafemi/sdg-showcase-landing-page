import React, {useContext} from 'react';
import Header from '../components/Header';
import { ModeContext } from '../contexts/ModeContext';
import ReactPlayer from 'react-player';



export default function Judges() {
    
    let { darkMode } = useContext(ModeContext);

    
    
    return (
        <div className={darkMode ? `dark-mode bg-section2` : `light-mode bg-section2`}>
            <Header/>
            <div className="container">
                <h2 style={{ color: '#0459DF' }} className="top-projects  my-5">Judging</h2>

                <div className="row">
                    
                    <div className="col-lg-8 col-sm-12">
                        <h2 className={darkMode ? `color-light h1 font-weight-bold mb-4` : ` h1 color-dark font-weight-bold  mb-4`}>Pitch-A-Thon</h2>
                        <p className={darkMode ? `color-light text-space h3 font-weight-bold` : `color-dark text-space h3 font-weight-bold`}>The goal of the pitch-a-thon was to showcase innovation by our participants in the BUildforSDG Cohort 1 and in turn have them get feedback on how they can improve on their developer skills and application of technology from a team of expert judges.</p>
                    
                        <p className={darkMode ? `color-orange h3 my-4` : `h3 my-4`}>The pitch-a-thon involved selecting a team of expert judges that make up some of the brightest minds in our ecosystem. Each team project was judged based on three criteria communicated to them at the start of the cohort;</p>
                        
                        <div className="h2">
                            <ol className={darkMode ? `color-orange h3 my-4` : `h3 my-4`}>
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
                        <p className={darkMode ? `h3 color-orange` : `h3`}>60 teams</p>
                    </div>

                </div>


                <div className="row my-3">

                    <div className="col-lg-8 col-sm-12">
                        <h2 className={darkMode ? `color-light h1 font-weight-bold mb-3` : `mb-3 h1 color-dark font-weight-bold`}>How we scored and judged</h2>
                        <p className={darkMode ? `color-light text-space h3 font-weight-bold mb-3` : `mb-3 color-dark text-space h3 font-weight-bold`}>The team’s projects were judged based on these three criteria.</p>

                        <div className="h2">
                            <ol className={darkMode ? `color-orange h3 my-4` : `h3 my-4`}>
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
                            <ul className={darkMode ? `color-orange h3 my-4` : `h3 my-4`}>
                                <li>Select an available and convenient date for your pitch</li>
                                <li>Prepare a slide deck</li>
                                <li>Ensure they received  comms on the availability of their selected date</li>
                                <li>Set a reminder at 15 mins before the project pitch was to begin</li>
                                <li>Talk about who was on the call(i.e PA, 2 judges and BuildforSDG Team)</li>
                                <li>Time duration which was 15 minutes</li>
                                <li>Opportunity for feedback</li>      
                           
                            </ul>
                        </div>

                    </div>
                </div>


                <div className="row my-3">

                    <div className="col-lg-8 col-sm-12">
                        <h2 className={darkMode ? `color-light h1 font-weight-bold mb-3` : `mb-3 h1 color-dark font-weight-bold`}>Judging Process</h2>

                        <div className="h2">
                            <ol className={darkMode ? `color-orange h3 my-4` : `h3 my-4`}>
                                <li>Introduction: Ask the Innovator to introduce themselves, team, professional experience</li>
                                <li>Project details: In this section, Innovator will brief you on their SDG goal selected and the impact their solution hopes to make in their community</li>
                                <li>Live demo: Innovator will be required to share the link to their live project with you(optional) They should also walk you through the project functionality and use through a shared screen</li>
                                <li>Feedback: Here you are required to give comments and share feedback on the project. Feel free to share ways the project could be better or what could have been done differently</li>
                                <li>End session: Be sure to end the session at the exact time allocated to the team which must be between 15-20 minutes</li>     

                            </ol>
                        </div>

                    </div>
                </div>


                <div className="row py-3">

                    <div className="col-lg-8 col-sm-12">
                        <h2 className={darkMode ? `color-light h1 font-weight-bold mb-3` : `mb-3 h1 color-dark font-weight-bold`}>Results</h2>
                        <p className={darkMode ? `color-light text-space h3 font-weight-bold mb-3` : `mb-3 color-dark text-space h3 font-weight-bold`}>After rigorous scoring and judging, The pitch-a-thon session ended with the judges selecting 15 teams which scored the highest in their pitching session </p>

                        <div className="h2">
                            <p className={darkMode ? `color-light text-space h3  mb-3` : `mb-3 color-dark text-space h3 `}>The 15 teams that qualified for the next phase are </p>
                            
                            <ul className={darkMode ? `color-orange h3 my-4` : `h3 my-4`}>
                                <li>Team 247 (Donate A seed)</li>
                                <li>Team-236 (Swiftana)</li>
                                <li>Team-273 (Farmer's Expand)</li>
                                <li>Team-085 (VoiceOut)</li>
                                <li>Team-203 (TranSafe)</li>
                                <li>Team-106 (DevData)</li>
                                <li>Team-067 (SmeVest)</li>
                                <li>Team-052 (Response 52)</li>
                                <li>Team-183 (Chicken-Farm-Ke)</li>
                                <li>Team-132 (goOrganic)</li>
                                <li>Team-075 (Emergency Response System)</li>
                                <li>Team-055 (MindCare)</li>
                                <li>Team-003 (RoadMaster)</li>
                                <li>Team-133 (Food Network)</li>    

                            </ul>
                        </div>

                    </div>
                </div>

                <div className="row ">
                    <div className="col-12">
                        <p className={darkMode ? `color-light font-weight-bold text-space h3 text-center ` : `font-weight-bold text-center color-dark text-space h3 `}>Also, a video containing the top 15 teams can be viewed below </p>

                        <div className='player-wrapper'>

                            <ReactPlayer
                                // playing={sustainModal ? true : false}
                                className='react-player'
                                url={project.videoLink}
                                width='100%'
                                height='100%'
                                controls={true}
                            />
                        </div>
                    </div>

                </div>












            </div>
        </div>
    )
}
