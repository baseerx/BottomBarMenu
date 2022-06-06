import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar'
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './navigation/MyTabs';

const App = () => {
  const myIcon = <Icon name="home" size={40} color="maroon" />;

  return (
     <NavigationContainer>
       <MyTabs/>
     </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  }
});
