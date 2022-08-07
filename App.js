import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image, Animated} from 'react-native';



export default function App() {

  const [move, setMove] = useState(new Animated.Value(-50));

  Animated.loop(
    Animated.timing(move, {
      toValue: 350,
      duration: 2500, 
      useNativeDriver: false,
    })
  ).start()

  return (

      <View style={styles.container}>
             <StatusBar style="auto" />

          <Animated.Image style={{width: 30, height: 30, bottom:0, right: move, position: 'absolute'}}
           source={require('./assets/pipe.png')} />

          <Animated.Image style={{width: 80, height: 80, bottom:0, right: 250, position: 'absolute'}}
           source={require('./assets/mario.gif')} />
 
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    padding: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    borderColor: 'grey',
    borderWidth: 1
  },
  pipe:{
    width: 30,
    height: 30,
    position: 'absolute',
    bottom: 0,
  }
});