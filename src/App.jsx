import React from 'react';

import classNames from 'classnames';
import {makeStyles} from '@material-ui/core/styles';

//icons



import profile from '../src/images/profpic2.jpg'

//components
import Header from '../src/components/Header/Header.jsx';
import HeaderLinks from '../src/components/Header/HeaderLinks.jsx';
import Parallax from '../src/components/Parallax/Parallax.jsx'
import GridContainer from "../src/components/Grid/GridContainer.jsx"
import GridItem from '../src/components/Grid/GridItem.jsx'
import Button from '../src/components/Button/Button.jsx'
import Tooltip from "@material-ui/core/Tooltip"

import styles from '../src/styles/profilePageStyle.jsx'

// pictures
import LordOfRingsOthello from '../src/images/lordofringsothelloResize.png'
import Nutrifacts from '../src/images/nutri-factsResize.png'
import SafeHouse from  '../src/images/safe-houseResize.png'



const useStyles = makeStyles(styles);

// to do set up basic layout, bring in three js and set up backgroud image 
//write some about me info
// link up projects
//link social media , Linkedin Facebook Twitter  Insta

function App(props) {
  const classes = useStyles();
  const { ...rest } = props
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div className="App">
      <Header
        color="transparent"
        brand="Joseph Alvarenga Beech"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
     
      <Parallax autoplay="true" playsinline="" loop="true" >
      <video class="bg_video"  autoplay="true" playsinline="" loop="true" style={{display: "block"}} data-bm="42">
      <source src={require("../src/images/bg-video.mp4")} type="video/mp4" ></source>
      </video>
      </Parallax>
      {/* <video autoplay muted loop id="myVideo">
        <source src={require("../src/images/bg-video.mp4")} type="video/mp4" ></source>
      </video>
       */}
      <div className={classNames(classes.main, classes.mainRaised)}>
        
        <div ClassName={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={profile} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>Joseph Alvarenga Beech</h3>
                  <h6>Full Stack Software engineer</h6>
                  <Button justIcon link className={classes.margin5}
                    href="https://www.linkedin.com/in/joseph-beech/"
                    target="_blank"
                  >
                    
                    <i className={"fab fa-linkedin-in"} />
                  </Button>
                  <Button justIcon link className={classes.margin5}
                    href="https://twitter.com/BeechNathaniel"
                    target="_blank"
                  >
                    
                    <i className={"fab fa-twitter"} />
                  </Button>
                  <Button justIcon link className={classes.margin5}
                    href="https://www.instagram.com/joseph_n.b/"
                    target="_blank"
                  >
                    <i className={"fab fa-instagram"} />
                  </Button>
                  <Button justIcon link className={classes.margin5}
                    href="https://www.facebook.com/joseph.alvarenga"
                    target="_blank"
                  >
                    <i className={"fab fa-facebook"} />
                  </Button>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classes.description}>
            <p>
            I'm fascinated with learning and exploring technological, socioeconomic, geopolitical, and environmental  trends.
              To explorer and predict possibilities about the future. More precisely how stratification of
              those trends will affect human well being. As we continue into the future technology will be an
              ever increasing part of our lives. I love that through programming I can Bring Ideas to life
              and while at it i enjoy maximizing ease of use and comfort  for the users..{" "}
            </p>
          </div>
          <br/>
          <div className={classes.profile}>
            <h3 className={classes.title}>Projects</h3>
          </div>
          <br/>
          <br/>
          <GridContainer justify="center">
            
            <GridItem xs={12} sm={12} md={4}>
            <Tooltip
              title="Nutri-Facts, Nutritional contents checker, Meal Logger">
                <Button
                  color="transparent"
                  href="https://nutri-facts.herokuapp.com/"
                  target="_blank">
                  <img
                    alt="an app to Check the nutritional content of foods , and meal logger"
                    src={Nutrifacts}
                    className={navImageClasses}
                  />
                </Button>
              </Tooltip>
              <Tooltip
              title="Lord of the Rings Theamed Othello ">
                  <Button
                  color="transparent"
                  href="https://mothergoose31.github.io/OthelloV3/"
                  target="_blank">
                  <img
                    alt="Lord of the Rings Theamed Othello Game"
                    src={LordOfRingsOthello}
                    className={navImageClasses}
                  />
                  </Button>
              </Tooltip>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Tooltip
              title=" Check Earthquake Safety for houses in the Seattle Area">
                <Button
                  color="transparent"
                  href="https://epic-shaw-f54583.netlify.com/"
                  target="_blank">
                  <img
                    alt="Safe House, an app to check houses that are at risk of collapse in the seattle area"
                    src={SafeHouse}
                    className={navImageClasses}
                  />
                </Button>
              </Tooltip>
              
            </GridItem>
          </GridContainer>
        </div>
      
      </div>
    </div>
  );
}

export default App;
