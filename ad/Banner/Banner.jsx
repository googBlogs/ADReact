import React, { Component, PropTypes } from 'react';
import './css/banner.css';
import './css/banner-anim.css';

import Slider from './Animation/SwitchAnim/Slider/Slider';
import Grid from './Animation/SwitchAnim/Grid/Grid';

export default class Banner extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let DATA = {
            items:this.props.items,
            width:this.props.width,
            height:this.props.height,
            delay:this.props.delay,
            duration:this.props.duration,
            autoPlaySpeed:this.props.autoPlaySpeed,
            autoPlay:this.props.autoPlay,
            pause:this.props.pause,
            arrow:this.props.arrow,
            thumb:this.props.thumb
        };

        if(this.props.animType =="slider".toLowerCase() || this.props.animType =="slider".toUpperCase() || this.props.animType =="Slider"){
            return(
                <Slider data={ DATA }>
                </Slider>
            );
        }
        if(this.props.animType =="grid".toLowerCase() || this.props.animType =="grid".toUpperCase() || this.props.animType =="Grid"){
            return(
                <Grid  data={ DATA }>
                </Grid>
            );
        }
    }

}



