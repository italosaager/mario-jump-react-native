import React from 'react';
import { Image } from 'react-native';

const Clouds = ({cloudsBottom, cloudsRight}) => {
 return (
   <Image style={{width: 240, height: 110, bottom: cloudsBottom, right: cloudsRight, position: 'absolute'}} 
   source={require('../assets/clouds.png')}/>
  );
}

export default Clouds;