import React from "react";
import {
StyleSheet,
View,
ActivityIndicator,
FlatList,
Text,
TouchableOpacity
} from "react-native";

import { ShakeEventExpo } from './shakeDetect';
import { Alert } from 'react-native';
import axios from 'axios';


const detRates = (roadRage, distraction) => {
    if (roadRage > 0.8 && distraction > 0.8) {
      return "Your Insurance Rates will likely see no decrease in value"
    } else if (roadRage > 0.6 && distraction > 0.6) {
      return "Your Insurance Rates will likely see little decrease in value (Expect a 0-1% decrease). Your Road rage value is  " + roadRage + ", and your distraction value is " + distraction + "."
    } else if (roadRage > 0.6 || distraction > 0.6) {
      return "Your Insurance Rates will likely see little decrease in value (Expect a 1-2% decrease). Your Road rage value is  " + roadRage + ", and your distraction value is " + distraction + "."
    } else if (roadRage < 0.3 && distraction < 0.3) {
      return "Your Insurance Rates will likely see a great decrease in value (Expect a 5-7% decrease or more) Your Road rage value is  " + roadRage + ", and your distraction value is " + distraction + "."
    } else {
      return "Your Insurance Rates will likely see a moderate decrease in value (Expect a 4-5% decrease). Your Road rage value is  " + roadRage + ", and your distraction value is " + distraction + "."
    }
  }


export default class Request extends React.Component {
constructor(props) {
 super(props);
 this.state = {
   loading: true,
   dataSource:[]
  };
}

componentDidMount () {
ShakeEventExpo.addListener(() => {

    axios.get('https://1791df63.ngrok.io')
    .then(x => resolve => setTimeout(() => resolve(x), 12000)).then(x => detRates(x.roadRage, x.distraction))
    .then((data) => {
        this.setState({
            loading: false,
            dataSource: data
        })
    }).catch(error => console.log(error)) //To Catch any errors if they happen
});
}

render(){
    const {loading, dataSource} = this.state;
return(

    <React.Fragment>

        {!loading ? (
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 10}}>{dataSource}</Text>
        ) : (<Text style={{color: 'white', fontWeight: 'bold', fontSize: 25}}>Loading...</Text>)}

    </React.Fragment>

)}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
   },
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
   },
  list:{
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#fff"
   }
});
