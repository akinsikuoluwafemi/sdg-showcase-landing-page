import React, { Component } from 'react';
import '../App.scss';
import ThemeCard from './ThemeCard';
import { ProjectContext } from '../contexts/context';
import {Link} from 'react-router-dom'

class ThemeContainer extends Component {
    
    state = {
        themes: [
            {
                color: "#E5243B",
                name: "No-Poverty"
            },
            {
                color: "#DDA639",
                name: "Zero-Hunger"
            },
            {
                color: "#19486A",
                name: "Patnerships-For-Goals"
            },
            {
                color: "#4C9F38",
                name: "Good-Health-And-Wellbeing"
            },
            {
                color: "#C5192D",
                name: "Quality-Education"
            },
            {
                color: "#10689D",
                name: "Peace-And-Justice"
            },
            {
                color: "#A21942",
                name: "Decent-Work"
            },
            {
                color: "#FA6926",
                name: "Industry-innovation"
            },
            {
                color: "#FB9D24",
                name: "Sustainable-Cities"
            },

        ]
    }

    static contextType = ProjectContext;

    

   render(){
       const {projects} = this.context;
       console.log(projects);

      

       
       return (
           <section className="themes-container">
               {/* {this.state.themes.map((item,index) => {
                   return (
                       <ThemeCard key={index} color={item.color} name={item.name} />
                   )
               })} */}
               <Link to="/themes/No-Poverty" style={{ background: '#E5243B'}}  className=" card health ">
                   <div className=" text-white font-weight-bold font-italic">No Poverty</div>
               </Link>

               <Link to="/themes/Zero-Hunger" style={{ background: '#DDA639' }} className=" card health ">
                   <div className=" text-white font-weight-bold font-italic">Zero-Hunger</div>
               </Link>

               <Link to="/themes/Patnerships-For-Goals" style={{ background: '#19486A' }} className=" card health ">
                   <div className=" text-white font-weight-bold font-italic">Patnerships-For-Goals</div>
               </Link>

               <Link to="/themes/Good-Health-And-Wellbeing" style={{ background: '#4C9F38' }} className=" card health ">
                   <div className=" text-white font-weight-bold font-italic">Good-Health-And-Wellbeing</div>
               </Link>

               <Link to="/themes/Quality-Education" style={{ background: '#C5192D' }} className=" card health ">
                   <div className=" text-white font-weight-bold font-italic">Quality-Education</div>
               </Link>
               
               <Link to="/themes/Peace-And-Justice" style={{ background: '#10689D' }} className=" card health ">
                   <div className=" text-white font-weight-bold font-italic">Peace-And-Justice</div>
               </Link>
               <Link to="/themes/Peace-And-Justice" style={{ background: '#A21942' }} className=" card health ">
                   <div className=" text-white font-weight-bold font-italic">Decent-Work</div>
               </Link>
               <Link to="/themes/Decent-Work" style={{ background: '#FA6926' }} className=" card health ">
                   <div className=" text-white font-weight-bold font-italic">Industry-innovation</div>
               </Link>
               <Link to="/themes/Industry-innovation" style={{ background: '#FB9D24' }} className=" card health ">
                   <div className=" text-white font-weight-bold font-italic">Sustainable-Cities</div>
               </Link>
              


           </section>
       )
   }
}

export default ThemeContainer;
