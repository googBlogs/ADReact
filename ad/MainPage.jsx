import React from 'react';
import { render } from 'react-dom';

import Banner from './Banner/Banner';



const IMAGE_DATA = [
    {
        src: require('./images/size5(960.380)/1.jpg'),
        alt: 'images-1',
        textHeader:'Banner animation demo',
        textOne:'Today is not another day ,today I will create something beautiful ',
        textTwo:'Study hard , play harder',
        textColor:'#323232',
        textPosition:'upLeft'
    },
    {
        src: require('./images/size5(960.380)/2.jpg'),
        alt: 'images-2',
    },
    {
        src: require('./images/size5(960.380)/3.jpg'),
        alt: 'images-3',
        textHeader:'Banner animation demo picture 3',
        textOne:'Today is not another day ,today I will create something beautiful ',
        textTwo:'Study hard , play harder',
        textColor:'#323232',
        textPosition:'bottomRight'
    },
];

var MainPage=React.createClass({
  render:function(){

    return(
          <Banner
              items={IMAGE_DATA}
              width={'960px'}
              height={'380px'}
              speed={0.6}
              delay={2.6}
              pause={true}
              autoPlay={true}
              dots={true}
              arrows={true}
              animType={"grid"}

              duration={450}
              className={"banner-anim"}
          />
    );
  },
});
module.exports=MainPage;

/*
 * BannerAnim.defaultProps = {

 duration: 450,
 delay: 0,
 ease: 'easeInOutQuad',
 arrow: true,
 thumb: true,
 autoPlaySpeed: 5000,
 dragPlay: true,
 onChange: () => {
 },
 onMouseEnter: () => {
 },
 onMouseLeave: () => {
 },
 };*/
