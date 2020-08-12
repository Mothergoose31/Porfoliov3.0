import React from 'react';

import classNames from 'classnames';
import {makeStyles} from '@material-ui/core/styles';

//icons

import {Camera, Palette, Favorite} from '@material-ui/icons'

//components
import Header from '../src/components/Header/Header.jsx';
import HeaderLinks from '../src/components/Header/HeaderLinks.jsx';

function App() {
  
  return (
    <div className="App">
      <Header
        color="transparent"
        brand="Material Kit React"
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
