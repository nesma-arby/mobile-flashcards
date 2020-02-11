
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
// import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { white, purple, gray } from "./src/utils/colors";
import { setLocalNotification } from "./src/utils/helpers";
// import {FontAwesome , Ionicons}  from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

// imports for redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./src/reducer";

// import all components
import Decks from "./src/components/Decks";
import AddDeck from "./src/components/AddDeck";
import AddCard from "./src/components/AddCard";
import DeckDetail from "./src/components/DeckDetails";
import Quiz from "./src/components/Quiz";
import QuizResult from "./src/components/QuizResult";


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: '#e91e63',
    }}
    >
      <Tab.Screen name="Decks" component={Decks}  
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="AddDeck" component={AddDeck} 
      options={{
        tabBarLabel: 'Add',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bell" color={color} size={size} />
        ),
      }}
      />
    </Tab.Navigator>
  );
}

class App extends React.Component {

  componentDidMount() {
    setLocalNotification();
  }

  render() {

    return (

      <Provider store={createStore(reducer)}>
         <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
      </Provider>

    )



  }


}



const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});


export default App