import React from 'react';

import classNames from 'classnames';
import {makeStyles} from '@material-ui/core/styles';

//icons

import {Camera, Palette, Favorite} from '@material-ui/icons'

import profile from '../src/images/profilePic.jpg'

//components
import Header from '../src/components/Header/Header.jsx';
import HeaderLinks from '../src/components/Header/HeaderLinks.jsx';
import Parallax from '../src/components/Parallax/Parallax.jsx'
import GridContainer from "../src/components/Grid/GridContainer.jsx"
import GridItem from "../src/components/Grid/GridItem.jsx"
import Button from "../src/components/Button/Button.jsx"
import backgroundImage from '../src/images/bg7.jpg'

import styles from '../src/styles/profilePageStyle.jsx'


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
      <Parallax small filter image={require("../src/images/bg7.jpg")}/>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
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
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
