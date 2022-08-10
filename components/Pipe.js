import React from 'react';
import { Image } from 'react-native';

const Pipe = ({pipeBottom, pipeRight}) => {
 return (
   <Image style={{width: 30, height: 30, bottom: pipeBottom, right: pipeRight, position: 'absolute'}} 
   source={require('../assets/pipe.png')}/>
  );
}

export default Pipe;

