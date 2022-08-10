import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Dimensions,} from 'react-native';
import { set } from 'react-native-reanimated';
import Clouds from './components/Clouds';
import Mario from './components/Mario';
import MarioOver from './components/MarioOver';
import Pipe from './components/Pipe';

export default function App() {

  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;

  const [marioBottom, setMarioBottom] = useState(screenHeight - screenHeight + 10);
  const marioRight = screenWidth / 1.6;

  const pipeBottom = screenHeight - screenHeight;
  const [pipeRight, setPipeRight] = useState(screenWidth - screenWidth - 60);

  const cloudsBottom = screenHeight / 1.5;
  const [cloudsRight, setCloudsRight] = useState(screenWidth - screenWidth - 240);

  const [isGameOver, setIsGameOver] = useState(false);

  const [score, setScore] = useState(0);


  const gravity = 10;
  let fall;
  let pipeMovement;
  let cloudsMovement;
  let jumping;


//make pipe move from right to left
  useEffect(()=>{
    if (pipeRight < screenWidth + 30 ){
      pipeMovement = setInterval(()=>{
        setPipeRight(pipeRight => pipeRight + 5)
      }, 10)

      return () => {
        clearInterval(pipeMovement)
      }
    } else {
      setPipeRight(pipeRight - screenWidth -60)
      setScore(score => score + 1)
    }
  },[pipeRight])
  
//make clouds move from right to left
  useEffect(()=>{
    if (cloudsRight < screenWidth + 240 ){
      cloudsMovement = setInterval(()=>{
        setCloudsRight(cloudsRight => cloudsRight + 0.5)
      }, 10)

      return () => {
        clearInterval(cloudsMovement)
      }
    } else {
      setCloudsRight(cloudsRight - screenWidth - 480)
    }
  },[cloudsRight])

  //adding gravity in order to make mario fall after his jump
  useEffect(() => {
    if (marioBottom > 0) {
      fall = setInterval(() => {
        setMarioBottom(marioBottom => marioBottom - gravity)
      },30)
  
      return () => {
        clearInterval(fall)
      }
    }
  }, [marioBottom])

  //check for collisions
  useEffect(()=>{
    if(marioBottom < 30 && (pipeRight > marioRight - 15 && pipeRight < marioRight + 70)){
      gameOver()
    }
  })

  const gameOver = () => {
    clearInterval(pipeMovement)
    clearInterval(fall)
    clearInterval(cloudsMovement)
    setIsGameOver(true) 
  }

  const jump = () =>{
    if(!isGameOver && (marioBottom == 0 ) ){
        jumping =  setMarioBottom(marioBottom => marioBottom + 150)
      }

      }
    
  const reset = () => {
    if(isGameOver == true)
    setPipeRight(screenWidth - screenWidth - 60)
    setCloudsRight(screenWidth - screenWidth - 240)
    setScore(0)
    setMarioBottom(0)
    setIsGameOver(false)
  }

  return (

    <TouchableWithoutFeedback onPress={jump} onLongPress={reset} >
          <View style={!isGameOver ? styles.container : styles.container2}>
          <StatusBar style="auto" />

         {isGameOver && <Text style={{color: '#fff', fontSize: 40, fontWeight: 'bold'}}>
            GAME OVER
          </Text>}

          <Text style={{color: '#fff', fontSize: 40, fontWeight: 'bold'}}>{score}</Text>

          {isGameOver && <Text style={{color: '#fff', fontSize: 20, fontWeight: 'bold'}}>
             {'\n'}Pressione e segure para reiniciar
             </Text>}

             {!isGameOver ? 
             <Mario marioBottom={marioBottom} marioRight={marioRight}/> :
            <MarioOver marioBottom={marioBottom} marioRight={marioRight}/>   }
          

          <Pipe
            pipeBottom={pipeBottom}
            pipeRight={pipeRight}
          />

          <Clouds
          cloudsRight={cloudsRight}
          cloudsBottom={cloudsBottom}
          />
          
      </View>
    </TouchableWithoutFeedback>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87cefa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
/*
 const [jump, setJump] = useState(new Animated.Value(0));
  const [canJump, setCanJump] = useState(true);

  //function that makes mario jump
  const jumping = () => {
  
    if(canJump) {

        setCanJump(false);
        setTimeout(()=> setCanJump(true), 1100);

        Animated.sequence([
          Animated.timing(jump, {
          toValue: 80,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(jump, {
          toValue: 80,
          duration: 100,
          useNativeDriver: false,
        }), Animated.timing(jump, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        })
      ]).start(); 
    }
}

*/