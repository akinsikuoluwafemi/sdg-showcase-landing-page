import React, { useState, useEffect} from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Error from './pages/Error';
import Projects from './pages/Projects';
import Judges from './pages/Judges';
import { ModeContext } from './contexts/ModeContext';
import Nopoverty from './pages/NoPorverty';
import ZeroHunger from './pages/ZeroHunger';
import GoodHealthAndWellbeing from './pages/GoodHealthAndWellbeing';
import QualityEducation from './pages/QualityEducation';
import PatnershipForGoals from './pages/PatnershipForGoals';
import PeaceAndJustice from './pages/PeaceAndJustice';
import DecentWork from './pages/DecentWork';
import IndustryInnovation from './pages/IndustryInnovation';
import SustainableCities from './pages/SustainableCities';




 function App() {
  
   const [darkMode, setDarkMode] = useState(getInitialMode());


   
  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode))

  }, [darkMode])
   
   function getInitialMode() {
     const savedMode = JSON.parse(localStorage.getItem('dark'));
     return savedMode || false;
   }
   
   

   return (
    
    <>
       <ModeContext.Provider value={{ darkMode, setDarkMode }}>
         <button style={{outline: 'none'}} onClick={() => setDarkMode(prevMode => !prevMode)} className={darkMode ? `mode-change grey ` : `mode-change slate `}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></button>
         <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/themes/:theme" component={Nopoverty} />
           
           <Route exact path="/themes/no-poverty" component={Nopoverty} />
           <Route exact path="/themes/zero-hunger" component={ZeroHunger} />
           <Route exact path="/themes/good-health-and-wellbeing" component={GoodHealthAndWellbeing} />
           <Route exact path="/themes/quality-education" component={QualityEducation} />
           <Route exact path="/themes/Patnerships-For-Goals" component={PatnershipForGoals} />
           <Route exact path="/themes/Peace-And-Justice" component={PeaceAndJustice} />
           <Route exact path="/themes/Decent-Work" component={DecentWork} />
           <Route exact path="/themes/Industry-innovation" component={IndustryInnovation} />
           <Route exact path="/themes/Sustainable-Cities" component={SustainableCities} />

           <Route exact path="/judges" component={Judges} />
           <Route exact path="/projects" component={Projects} />

           <Route component={Error} />
         </Switch>

      </ModeContext.Provider>
      

    </>
  )
}


export default App;