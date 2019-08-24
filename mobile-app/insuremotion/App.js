import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AccelerometerSensor from './components/accelerometer'
import { ShakeEventExpo } from './components/shakeDetect';
import { Alert } from 'react-native'


export default function App() {

  ShakeEventExpo.addListener(() => {
/*    fetch('http://8e134d89.ngrok.io/', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    firstParam: 'roadRage',
    secondParam: 'Distraction',
  }), */


function detRates(roadRage, distraction) {
    if (roadRage > 0.8 && distraction > 0.8) {
      return "Your Insurance Rates will likely see no decrease in value"
    } else if (roadRage > 0.6 && distraction > 0.6) {
      return "Your Insurance Rates will likely see little decrease in value (Expect a 0-1% decrease)"
    } else if (roadRage > 0.6 || distraction > 0.6) {
      return "Your Insurance Rates will likely see little decrease in value (Expect a 1-2% decrease)"
    } else if (roadRage < 0.3 && distraction < 0.3) {
      return "Your Insurance Rates will likely see a great decrease in value (Expect a 5-7% decrease or more)"
    } else {
      return "Your Insurance Rates will likely see a moderate decrease in value (Expect a 4-5% decrease)"
    }

  }
  Alert.alert(detRates(1, 2));


   });

  return (
    <View style={styles.container}>
      <Text>InsurEmotion, drive calm and get lower insurance. </Text>

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
