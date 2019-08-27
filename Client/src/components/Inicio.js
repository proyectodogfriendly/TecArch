import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/inicio.css'
import MyComponent from "./Vivus";
// import AuthServices from "../services/auth.services";


import Map from './Map.js'



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
                  <MyComponent className="ini2"></MyComponent>
                </div>
                <div className="wrapper">
                    <div className="pos text"></div>
                    <div className="pos plano1"></div>
                    
                    <div className="pos plano3"></div>
                    <div className="pos plano4"></div>
                    <div className="pos plano5"></div>
                    <div className="pos plano6"></div>
                  
                </div>
            </div> 
            <div className="container-fluid">
          
            <Map/>

            </div>    
        </div>
         
        </>
      );
    
  }
}
export default Inicio;


