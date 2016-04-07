import React, { Component } from 'react';
import Grid from '../../utils/hex-create';
import _ from 'lodash';

class BuildArea extends Component {

    constructor (props) {
        super(props);
    }

    componentWillReceiveProps (nextProps) {
        if(nextProps.selected !== this.props.selected) {
            this.grid.updateSelected(nextProps);
        }
    }

    shouldComponentUpdate (nextProps) {
        if ((nextProps.game.id !== this.props.game.id) && nextProps.game.id === '') {
            this.grid.cleanGrid();  
        }
        return false;
    }

    componentDidMount () {

        const opts = {
            width: 1028,
            height: 768,
            radius: 22
        };

        this.grid = new Grid(_.merge(opts,{
            target: '#grid',
            isBuilder: true
        }), this.props);

        this.grid.createGrid();

    }

    render() {
        return (
            <div id="grid" className="layers"></div>
        );

    }
}

export default BuildArea;