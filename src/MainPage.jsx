import React from 'react';
import { render } from 'react-dom';

import Slider from './Slider/Slider';



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
          <Slider
              items={IMAGE_DATA}
              size={"size5"}
              speed={0.4}
              delay={2.1}
              pause={true}
              autoplay={true}
              dots={true}
              arrows={true}
          />
    );
  },
});
module.exports=MainPage;