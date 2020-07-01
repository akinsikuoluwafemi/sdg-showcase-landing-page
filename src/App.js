import React, { useState} from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Themes from './pages/Themes';
import Error from './pages/Error';
import Projects from './pages/Projects';
import Judges from './pages/Judges';
import { ModeContext } from './contexts/ModeContext';
// import Footer from './components/Footer/Footer';
import Nopoverty from './pages/NoPorverty';
import ZeroHunger from './pages/ZeroHunger';
import GoodHealthAndWellbeing from './pages/GoodHealthAndWellbeing';
import QualityEducation from './pages/QualityEducation';
import GenderEquality from './pages/GenderEquality';


 function App() {
  
  const [darkMode, setDarkMode] = useState(false);
  //  console.log(darkMode);
   return (
    
    <>
       <ModeContext.Provider value={{ darkMode, setDarkMode }}>
         <button onClick={() => setDarkMode(prevMode => !prevMode)} className="mode-change"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></button>
         <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/themes" component={Themes} />
           {/* <Route exact path="/themes/:name" /> */}
           <Route exact path="/themes/no-poverty" component={Nopoverty} />
           <Route exact path="/themes/zero-hunger" component={ZeroHunger} />
           <Route exact path="/themes/good-health-and-wellbeing" component={GoodHealthAndWellbeing} />
           <Route exact path="/themes/quality-education" component={QualityEducation} />
           <Route exact path="/themes/gender-equality" component={GenderEquality} />



           
           <Route exact path="/judges" component={Judges} />
           <Route exact path="/projects" component={Projects} />
           {/* <Route exact path="/projects/:id" component={SingleProjects} /> */}

           <Route component={Error} />
         </Switch>

         {/* <Footer/> */}
      </ModeContext.Provider>
      

    </>
  )
}


export default App;