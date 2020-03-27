import React from 'react';
import HomeImg from '../images/home4.jpg'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';


export default function Intro() {
  return(
    <div>
      <Zoom slow>
        <img src="https://www.ableelec.com/wp-content/uploads/2018/06/light-is-beautiful-TC_slide_1920x680-1.jpg" style={styles.image}/>
      </Zoom>
      <Fade left delay={500}>
        <div className="intro-border">
          <img width="500" style={styles.header} src="https://www.ableelec.com/wp-content/uploads/2018/06/Able-logo.png"/>
          <Fade left delay={1000}>
            <h4 style={styles.font}><i>Proudly making a difference since 1992</i></h4>
          </Fade>
        </div>
      </Fade>
    </div>
  )
}

const styles ={
  image: {
    display: 'block',
    position: 'absolute',
    left: '0px',
    top: '0px',
    zIndex: -1,
    width: '100%',
    // height: '100vh',
    // filter: 'brightness(60%)',

  },
  header: {
    paddingTop: 40,
    marginLeft: 200,
    color: 'white',
    textAlign: 'left',
    fontSize: 120,
    fontFamily: 'Raleway',
  },
  font: {
    marginLeft: 230,
    color: 'white',
    textAlign: 'left',
    paddingTop: 35,
    paddingBottom: 50,
  },
}
