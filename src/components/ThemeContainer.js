import React, { Component } from 'react';
import '../App.scss';
import ThemeCard from './ThemeCard';

class ThemeContainer extends Component {
    
    state = {
        themes: [
            {
                color: "#E5243B",
                name: "NO POVERTY"
            },
            {
                color: "#DDA639",
                name: "ZERO HUNGER"
            },
            {
                color: "#19486A",
                name: "Patnerships For Goals"
            },
            {
                color: "#4C9F38",
                name: "GOOD Health And Wellbeing"
            },
            {
                color: "#C5192D",
                name: "Quality Education"
            },
            {
                color: "#10689D",
                name: "Peace And Justice"
            },
            {
                color: "#A21942",
                name: "Decent Work"
            },
            {
                color: "#FA6926",
                name: "Industry innovation"
            },
            {
                color: "#FB9D24",
                name: "Sustainable Cities"
            },

        ]
    }



   render(){

       return (
           <section className="themes-container">
               {this.state.themes.map((item,index) => {
                   return (
                       <ThemeCard key={index} color={item.color} name={item.name} />
                   )
               })}


           </section>
       )
   }
}

export default ThemeContainer;
