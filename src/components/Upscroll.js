import React, { Component } from 'react'
import './Footer/Footer.scss';
import arr from '../images/long-arrow.png';
import { animateScroll as scroll } from "react-scroll";
import Aos from 'aos';



export default class Upscroll extends Component {
    constructor(props) {
        super(props);

        this.scrollRef = React.createRef();
    }

     scrollToTop = () => {
        scroll.scrollToTop(); 
        };
     
     componentDidMount() {
        Aos.init({
            duration: 2000
        })
     }

    render() {
        return (
            <div className="arrow-container">
                <img ref={this.scrollRef} onClick={this.scrollToTop} className="shake animate__animated arrow-image" src={arr} alt="scrollup" />

            </div>
        )
    }
}
