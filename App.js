import React from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import { createBottomTabNavigator ,createStackNavigator } from 'react-navigation';
// import {TabNavigator} from 'react-navigation';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { white, purple, gray } from "./src/utils/colors";
import { setLocalNotification } from "./src/utils/helpers";

import reducer from "./src/reducer";

import Decks from "./src/components/Decks";
import AddDeck from "./src/components/AddDeck";
import AddCard from "./src/components/AddCard";
import DeckDetail from "./src/components/DeckDetails";
import Quiz from "./src/components/Quiz";

import { Feather } from "@expo/vector-icons";
import { Constants } from "expo";




const Tabs = createBottomTabNavigator({
  Decks: {
    screen: Decks
  },
  AddDeck: {
    screen: AddDeck
  },
});



export default function App() {
  return (
    <Tabs />
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
