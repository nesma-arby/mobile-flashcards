
import React from 'react';
import { View, StatusBar } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Constants } from "expo";

import { purple } from "./src/utils/colors";
import { setLocalNotification } from "./src/utils/helpers";
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
import DeckDetails from "./src/components/DeckDetails";
import Quiz from "./src/components/Quiz";
import QuizResult from "./src/components/QuizResult";



const FlashcardsStatusBar = ({ backgroundColor, ...props }) => (
  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);


const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Decks"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen name="Decks" component={Decks}
        options={{
          tabBarLabel: 'Decks',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="list" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="AddDeck" component={AddDeck}
        options={{
          tabBarLabel: 'New Deck',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}
    >
      <Stack.Screen
        name="AddCard"
        component={AddCard}
        options={{
          title: 'New Card',
        }}
      />
      <Stack.Screen
        name="DeckDetails"
        component={DeckDetails}
        options={{
          title: 'Deck Details',
        }}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{
          title: 'Quiz',
        }}
      />
      <Stack.Screen
        name="QuizResult"
        component={QuizResult}
        options={{
          title: 'Quiz Result',
        }}
      />
    </Stack.Navigator>
  );
}

export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification();
  }

  render() {

    return (

      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <FlashcardsStatusBar
            backgroundColor={purple}
            barStyle="light-content"
          />
          <Tab />
        </View>
      </Provider>

    )



  }


}


