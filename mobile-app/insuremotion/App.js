import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AccelerometerSensor from './components/accelerometer'
import { ShakeEventExpo } from './components/shakeDetect';
import { Alert } from 'react-native'
import Request from './components/request'

const axios = require('axios');


export default function App() {


  return (
    <View style={styles.container}>
      <Text style={styles.text}>InsurEmotion, drive calm and get lower insurance TODAY. </Text>

      <AccelerometerSensor />
      
      <Request />

    
    </View>
    );
  }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'

  }
});
