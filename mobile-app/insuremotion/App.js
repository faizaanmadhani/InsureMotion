import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import AccelerometerSensor from './components/accelerometer'
import { ShakeEventExpo } from './components/shakeDetect';
import { Alert } from 'react-native'
import Request from './components/request'


const axios = require('axios');


export default function App() {


  return (
    <ImageBackground source={require('bg.png')} style={{width: '100%', height: '100%'}}>

    <View style={{position: 'absolute', flex: 1, alignItems: 'center', justifyContent: 'center', top: 0, bottom: 0, left: 0, right: 0}}>
      <View style={{flex: 3, alignItems: 'center', justifyContent: 'center'}}>

                </View>
                <View style={{flex: 2.5, width: 300, height: 100}}>
                  <AccelerometerSensor />
                </View>


                <View style={{flex: 1, width: 300, bottom: 20}}>
                  <Request />
                </View>


    </View>
    </ImageBackground>

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
