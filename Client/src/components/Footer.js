import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../css/footer.css'

// import AuthServices from "../services/auth.services";

class Footer extends Component {
  constructor(props) {
    super(props);
    // this.authServices = new AuthServices();
  }

  
  render() {
   

      //sesión iniciada
      return (
        <>
        <div className="">
        <div className="main-footer">
                <div className="fixed-title"><span>Home Slider</span></div>
            
                <div className="footer-social">
                    <ul>
                        <Link to href="#" target="_blank"><img src="../img/fb.png"/></Link>
                        <Link to href="#" target="_blank"><img src="../img/ins.png"/></Link>
                        <Link to href="#" target="_blank"><img src="../img/li.png"/></Link>
                        <Link to href="#" target="_blank"><img src="../img/wt.png"/></Link>
        
                    </ul>
                </div>
            </div>
        </div>
         
        </>
      );
    
  }
}
export default Footer;


