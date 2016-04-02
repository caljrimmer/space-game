import React, { Component } from 'react';
import BuildArea from '../containers/build/BuildArea';
import BuildControls from '../containers/build/BuildControls';
import assets from '../utils/hex-assets'

class Build extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
        <div id="game">
            <BuildArea />
            <BuildControls />
        </div>
    );
  }
}

export default Build;