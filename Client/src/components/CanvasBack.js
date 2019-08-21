
import React, { Component } from 'react'
import Services from '../services/competition.services'
// import ReactCanvas from 'react-canvas'



// import '../js/scripts.js'
// import '../js/plugins.js'
// import '../js/jquery.min.js'


// let Surface = ReactCanvas.Surface

class CanvasBack extends Component {

    constructor(props) {
        super(props);
        // this.Surface = ReactCanvas.Surface


        // this.canvasRef = React.createRef()
       
      }
      render() {
        return (
        
                <>
                <div className="container"> 
                    {/* <div class="partcile-dec" data-parcount="70">
                        <canvas ref={this.canvasRef} width="1905" height="850" style="display: block;">   
                        </canvas>
                    </div>  */}
                </div>
                </>
        );
      }

    // componentDidMount() {
    //     this.services.getAllCompetitions()
    //         .then(response => {
    //             console.log(response)
    //             this.setState({ competitions: response.data })
    //         })
    //         .catch(err => console.log(err))
    // }
    // componentDidMount() {
    //     const canvas = this.canvasRef.current;
    //     const context = canvas.getContext('2d');
    //     context.fillRect(0, 0, canvas.width, canvas.height);
    //   }

}


export default CanvasBack