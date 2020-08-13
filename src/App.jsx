import React from 'react';

import classNames from 'classnames';
import {makeStyles} from '@material-ui/core/styles';

//icons

import {Camera, Palette, Favorite} from '@material-ui/icons'

//components
import Header from '../src/components/Header/Header.jsx';
import HeaderLinks from '../src/components/Header/HeaderLinks.jsx';
import Parallax from '../src/components/Parallax/Parallax.jsx'
import GridContainer from "../src/components/Grid/GridContainer.jsx"
import GridItem from "../src/components/Grid/GridItem.jsx"

import styles from '../src/styles/profilePageStyle.jsx'

const useStyles = makeStyles(styles);

function App() {
  
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
        
      />
      <h1>rendering something</h1>
    </div>
  );
}

export default App;
