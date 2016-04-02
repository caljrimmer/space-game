import { bindActionCreators } from 'redux';
import React, { Component} from 'react';
import { connect } from 'react-redux';
import BuildArea from '../../components/build/BuildArea';
import * as BuildActions from '../../actions/buildActions';

function mapStateToProps(state) {
    return {
        assets : state.assets,
        backgrounds : state.backgrounds,
        selected : state.selected
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(BuildActions, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BuildArea);