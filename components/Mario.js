import React from 'react';
import { Image } from 'react-native';

const Mario = ({marioRight, marioBottom}) => {
  
 return (
   <Image style={{width: 80, height: 80, bottom: marioBottom, right: marioRight, position: 'absolute'}} 
   source={require('../assets/mario.gif')}/>
  );
}

export default Mario;