import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/inicio.css";
import MyComponent from "./Vivus";
// import AuthServices from "../services/auth.services";

import Myparallax from "../components/Myparallax";
import Map from "../components/Map";
import MyComponentInicio from "../components/MyparallaxInicio";



import myvideo from '../video/video-intro.mp4'

// import Example from "../components/Myparallax";
class Inicio extends Component {
  constructor(props) {
    super(props);
    // this.authServices = new AuthServices();
  }

  render() {
    //sesión iniciada
    return (
      <>
        <div className="">
          <div className="container-fluid">
            <div className="ini">
              <MyComponent className="ini2" />
            </div>
            <div className="wrapper">
              <div className="pos text" />
              <div className="pos plano1" />
              <div className="pos plano3" />
              <div className="pos plano4" />
              <div className="pos plano5" />
              <div className="pos2 plano6" />
            </div>
          </div>
        </div>
        <br></br><br></br><br></br><br></br><br></br>
        <div id="section04" class="demo">
          
          <a href="#section05"><span></span></a>
        </div>
        <div className="container-fluid espacio">
          <div className="container-fluid bg-video">
              <div style={{ height: 600}}>
                  <video playsinline="" autoplay="" loop="" muted="" class="fill fullscreen">
                      <source src={myvideo} type="video/mp4"/>
                  </video>
              </div>
          </div>
        </div> 
        <div className="container-fluid espacio">
        <MyComponentInicio/>
        </div> 
      </>
    );
  }
}
export default Inicio;
// import { ParallaxProvider } from 'react-scroll-parallax';
 
// class AppContainer extends Component {
//     render() {
//         return (
//             <ParallaxProvider>
//                 <App />
//             </ParallaxProvider>
//         );
//     }
// }