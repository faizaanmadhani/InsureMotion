import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AccelerometerSensor from './components/accelerometer'
import { ShakeEventExpo } from './components/shakeDetect';
import { Alert } from 'react-native'


export default function App() {

  ShakeEventExpo.addListener(() => {
    Alert.alert('Shaking!!!');
    fetch ('')
   });
  
  return (
    <View style={styles.container}>
      <Text>InsurEmotion, drive calm and get lower insurance.</Text>

      <AccelerometerSensor />




    </View>
    );
  }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
