//Six demo of Rotating box like freespy game                                                  /* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable space-infix-ops */
/* eslint-disable no-trailing-spaces */
/* eslint-disable keyword-spacing */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
//import liraries
import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';

// create a component
const App = () => {


  const animation=useSharedValue(0);


  //For scalling pass initial value of 1 inside useSharedValue() as shown below:
  //const animation=useSharedValue(1);
  
  
  
  
  
  
  
  
  const [clicked,setClicked]=useState(true);
  const animatedStyle=useAnimatedStyle(()=>{
    //return {transform:[{translateX:animation.value}] };
    return {transform:[{rotate:`${animation.value}deg`}] };
    //return {transform:[{scale:animation.value}] };
  })
  return (
    <View style={styles.container}>
      {/* This below View tag is our box which is not having anything inside it, but we will use this box to animate it */}
      <Animated.View style={[{width:100,height:100,backgroundColor:'#0b7de7'},animatedStyle]}></Animated.View>
      <TouchableOpacity 
      style={{borderWidth: 1,width:200,height:50,justifyContent: 'center',alignItems:'center',marginTop:30}}
      onFocus={true}
      onPress={()=>{
        if(clicked){



          //animation.value=200;


          animation.value=withSpring(360);

          /*To make the animation faster we can reduce the duration from 500 to 50, this will make animation faster without smoothness */
          //animation.value=withTiming(100, {duration:500});


          //animation.value=withSpring(1);
          
        
        
        
        
        }else{
          
          //animation.value=-200;

          animation.value=withSpring(0);
          //animation.value=withSpring(-100);
          //animation.value=withTiming(-100, {duration:500});


          //animation.value=withSpring(0.5);
                  }
        setClicked(!clicked);
        
        
        }}
      >
        <Text>Start Animation</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default App;