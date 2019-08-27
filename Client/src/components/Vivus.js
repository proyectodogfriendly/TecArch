import React from 'react';
import ReactVivus from 'react-vivus';
import svg from '../img/casa-croquis.svg';
 
import '../css/footer.css'

const MyComponent = () => (
  <ReactVivus
    id="foo"
    option={{
      file: svg,
      animTimingFunction: 'EASE',
      type: 'oneByOne',
      onReady: console.log
    }}
    style={{ height: '532px', width: '750px', top:'60px' , position: 'relative', margintop:'40px' , marginright: '0px', marginbottom: '0px',marginleft: '45vw' }}
    callback={console.log}
  />
);
export default MyComponent;

