import React from 'react';
import { Parallax, Background } from 'react-parallax';


import Map from "../components/Map";
import Particles from "react-particles-js";

import imgrebeca from '../img/galeria/rebeca.png'
import imgjosue from '../img/galeria/josue.png'
import fondo1 from '../img/galeria/back1.png'


const styles = {
    fontFamily: 'Questrial',
    textAlign: "center"
  };
  const insideStyles = {
    background: "rgba(255,255,255,0.6)",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    fontSize: "22px",
    transform: "translate(-50%,-50%)"
  };
  const insideStyles2 = {
    background: "rgba(255,255,255,0.8)",
    padding: 20,
    color:"#363636",
    position: "absolute",
    top: "75%",
    left: "50%",
    fontSize: "22px",
    transform: "translate(-50%,-50%)"
  };
 
  const image1 =
  "https://a-cero.com/wp-content/uploads/2017/04/a-cero-projects-3-8.jpg";
  const image2 =
    "https://signocomunicacion.es/2017/wp-content/uploads/2013/01/Fondo-gris-claro-contraste-slider.jpg";
  const image3 =
    "https://a-cero.com/wp-content/uploads/2017/04/a-cero-projects-4-8.jpg";
  const image4 =
    "https://a-cero.com/wp-content/uploads/2017/04/a-cero-projects-4-12.jpg";
  const image5 =
    "https://a-cero.com/wp-content/uploads/2017/04/a-cero-projects-7-4.jpg";
  
const MyComponentInicio = () => (
    <div style={styles}>
       <Parallax bgImage={image1} strength={500}>
        <div style={{ height: 600,backgroundImage:{fondo1} }}>
          <div style={insideStyles}> 
          TecArch es una plataforma online que recoge las propuestas
          públicas y privadas de proyectos de Arquitectura, a nivel nacional.
          Ponemos a tu alcance todos los concursos de Arquitectura para que puedas 
          participar en los procesos.
          </div>
        </div>
        </Parallax>
        <Parallax bgImage={image3} strength={500}>
            <div style={{ height: 600 }}>
            <div style={insideStyles}>
                    <div className="row justify-content-center">
                        <div className="col-6">
                            <img src={imgjosue}/>
                        </div>
                        <div className="col-6">
                            <img src={imgrebeca}/>
                        </div>
                    </div>
                    
            </div>
            <div style={insideStyles2}> 
                <p>
                Gracias a tod@s los que habéis hecho posible
                este proyecto y la gran experiencia de IronHack.<b></b><b></b>
                Forever Ironhackers  
                </p>
            </div>
            </div>
        </Parallax>
        <Parallax>
       
            
            
        </Parallax>
        <Parallax>
            <div style={{ height: 500 }}>
                <Map/>
            </div>
            
        </Parallax>
        
     
      
      
    </div>
  );
  
export default MyComponentInicio;