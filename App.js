import React from 'react';
import {Alert} from "react-native";
import Loading from './Loading';
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "198e5d625b96da2777e9518b06bc91b7";


export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async (latitude,longitude) => {
    const { data: {main : {temp},
                  weather} } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=imperial`);
    this.setState(
      {isLoading:false, 
        condition: weather[0].main, 
        temp }
      );
  };

  getLocation = async () => {
    try{
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      //send api and get weather
    
      this.getWeather(latitude, longitude)

      
      this.setState({isLoading: false});
      console.log(longitude,latitude);
    }catch(error) {
      Alert.alert("Can't find you.", "So sad");  
    }
  };

  componentDidMount(){
    this.getLocation();
  };

  render(){
    const { isLoading,temp,condition } = this.state;
    console.log(condition);
    return isLoading? <Loading /> : <Weather temp={Math.round(temp)} condition={"Mist"} />;
  };
}