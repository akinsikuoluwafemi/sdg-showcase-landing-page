import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Themes from './pages/Themes';
import Error from './pages/Error';
import Projects from './pages/Projects';
import Judges from './pages/Judges';


function App() {
  return (
    <>
      <button className="mode-change"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></button>
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/themes" component={Themes} />
        {/* <Route exact path="/themes/:slug" component={SingleTheme} /> */}
        <Route exact path="/judges" component={Judges} />
        <Route exact path="/projects" component={Projects} />


        {/* judges projects */}

        
        <Route component={Error} />  
      </Switch>
      
      
      </>
  );
}

export default App;
