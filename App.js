import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Read from "./Screens/Read"
import Write from "./Screens/Write"
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'


export default class App extends React.Component {
  render(){
    return (
    <AppContainer></AppContainer>
  )}  

  
}

const TabNavigator= createBottomTabNavigator({
  Read:{screen:Read},
  Write:{screen:Write}
},{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Write"){
        return(
          <Image
          source={require("./assets/Pencil.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "Read"){
        return(
          <Image
          source={require("./assets/book.png")}
          style={{width:40, height:40}}
        />) 
        
      }
    }
  })
}
);

const AppContainer= createAppContainer(TabNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
