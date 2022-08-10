import React from 'react';
import { Image } from 'react-native';

const MarioOver = ({marioRight, marioBottom, fonte}) => {
  
 return (
   <Image style={{width: 60, height: 60, bottom: marioBottom, right: marioRight, position: 'absolute'}} 
   source={require('../assets/marioOver.png')}/>
  );
}

export default MarioOver;