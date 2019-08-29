import React from 'react';
import { Parallax, Background } from 'react-parallax';

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

  const image0 =
    "https://a-cero.com/wp-content/uploads/2017/04/a-cero-projects-5-5.jpg";
  const image1 =
    "https://a-cero.com/wp-content/uploads/2017/04/a-cero-projects-1-15.jpg";
  const image2 =
    "https://a-cero.com/wp-content/uploads/2017/04/a-cero-projects-2-13.jpg";
  const image3 =
    "https://a-cero.com/wp-content/uploads/2017/04/a-cero-projects-3-14.jpg";
  const image4 =
    "https://a-cero.com/wp-content/uploads/2017/04/a-cero-projects-4-12.jpg";
  const image5 =
    "https://a-cero.com/wp-content/uploads/2017/04/a-cero-projects-7-4.jpg";
  const MyComponent = () => (
    <div style={styles}>
        <Parallax bgImage={image0} strength={500}
         renderLayer={percentage => (
            <div>
              <div
                style={{
                  position: "absolute",
                  background: `rgba(38, 38, 38, ${percentage * 1})`,
                  left: "50%",
                  top: "50%",
                  borderRadius: "2%",
                  transform: "translate(-50%,-50%)",
                  transitionDelay:2,
                  transition:escape,
                  width: percentage * 500,
                  height: percentage * 500
                }}
              />
            </div>
          )}>
        <div style={{ height: 600 }}>
        <div style={insideStyles}>Casa Martin</div>
        </div>
        </Parallax>
        <Parallax bgImage={image1} strength={500}>
        <div style={{ height: 600 }}>
          <div style={insideStyles}> but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </div>
        </div>
      </Parallax>
      <Parallax bgImage={image2} strength={500}>
        <div style={{ height: 600 }}>
          <div style={insideStyles}>Libertad en el diseño </div>
        </div>
      </Parallax>
      
      <Parallax bgImage={image3} strength={500}>
        <div style={{ height: 600 }}>
          <div style={insideStyles}>Diseño único</div>
        </div>
      </Parallax>
     
      <Parallax 
      bgImage={image4} 
      strength={100}
      renderLayer={percentage => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(38, 38, 38, ${percentage * 1})`,
              left: "50%",
              top: "50%",
              borderRadius: "2%",
              transform: "translate(-50%,-50%)",
              width: percentage * 500,
              height: percentage * 500
            }}
          />
        </div>
      )}>
        <div style={{ height: 600 }}>
          <div style={insideStyles}>Actualidad arquitectónica</div>
        </div>
      </Parallax>
      
      <Parallax
        bgImage={image5}
        strength={200}
        renderLayer={percentage => (
          <div>
            <div
              style={{
                position: "absolute",
                background: `rgba(38, 38, 38, ${percentage * 1})`,
                left: "50%",
                top: "50%",
                borderRadius: "50%",
                transform: "translate(-50%,-50%)",
                width: percentage * 500,
                height: percentage * 500
              }}
            />
          </div>
        )}
      >
        <div style={{ height: 600 }}>
          <div style={insideStyles}>TecArch</div>
        </div>
      </Parallax>
      
    </div>
  );
  
export default MyComponent;