import React, { Component } from 'react';
import { createBackgroundGrid, createMovementGrid, createAssetGrid} from '../../utils/hex-create';
import backgrounds from '../../utils/hex-backgrounds';
import assets from '../../utils/hex-assets';
import _ from 'lodash';
import classnames from 'classnames';

class GameArea extends Component {

    constructor (props) {
        super(props);
        this.state = {
            selected: this.props.selected || backgrounds[0],
            area: 'backgrounds',
            open: true
        }
        this.eventSelectBackground = this.eventSelectBackground.bind(this);
        this.eventSelectAsset = this.eventSelectAsset.bind(this);
        this.eventArea = this.eventArea.bind(this);
        this.eventOpen = this.eventOpen.bind(this);
    }

    eventSelectBackground (e) {
        const selected =  _.find(backgrounds,{ id : e.target.id});
        this.props.addSelected(_.merge(selected,{type:'backgrounds'}));
        this.setState({
            selected : selected
        })
    }

    eventSelectAsset (e) {
        const selected =  _.find(assets,{ id : e.target.id});
        this.props.addSelected(_.merge(selected,{type:'assets'}));
        this.setState({
            selected : selected
        })
    }

    eventArea (e) {
        const area = e.target.innerText.toLowerCase();
        const selected = (area === 'backgrounds') ? backgrounds[0] : assets[0];
        this.setState({
            area : area,
            selected : selected
        });
    }

    eventOpen (e) {
        const text = e.target.innerText.toLowerCase();
        const value = (text === 'open') ? true : false;
        this.setState({
            open : value
        });
    }

    render() {

        const openClass = (this.state.open) ? 'controls' : 'controls hide';

        const Backgrounds = backgrounds.map((item,i) => {
            const cname = (item.id === this.state.selected.id) ? 'selected' : '';
            return (
                <li key={i} className={cname}>
                    <div className="tile">
                        <svg>
                            <polygon onClick={this.eventSelectBackground} id={item.id} className={item.id} transform="rotate(30,10,20)" points="30,15 22.5,28 7.5,28 0,15 7.5,2 22.5,2"></polygon>
                        </svg>
                    </div>
                    <div className="info">
                        <h4>{item.name}</h4>
                        <p>
                            m : {item.movement} s : {item.movement}
                        </p>
                    </div>
                </li>
            )
        });

        const Assets = assets.map((item,i) => {
            const cname = (item.id === this.state.selected.id) ? 'selected' : '';
            return (
                <li key={i} className={cname}>
                    <div className="tile-asset">
                        <div onClick={this.eventSelectAsset} id={item.id} className={item.id}></div>
                    </div>
                    <div className="info">
                        <h4>{item.name}</h4>
                        <p>
                            m : {item.movement} a : {item.attack} d : {item.defend}
                        </p>
                    </div>
                </li>
            )
        });

        return (
            <div className={openClass}>
                <ul className={this.state.area}>
                    <li onClick={this.eventArea}>Backgrounds</li>
                    <li onClick={this.eventArea}>T-Assets</li>
                </ul>
                <ul className="tile-list">
                {this.state.area === 'backgrounds' &&
                    {Backgrounds}
                }
                {this.state.area === 't-assets' &&
                    {Assets}
                }
                </ul>
                {this.state.open &&
                    <div onClick={this.eventOpen} className="controls-tab">Close</div>
                }
                {!this.state.open &&
                    <div onClick={this.eventOpen} className="controls-tab">Open</div>
                }
            </div>
        );

    }
}

/**
<svg id="color-fill">
    <circle cx="25" cy="25" r="24" fill="#ccc" />
    <polygon class="hex" transform="translate(8,7) rotate(30,10,20)" points="30,15 22.5,28 7.5,28 0,15 7.5,2 22.5,2"></polygon>
</svg>
**/

export default GameArea;