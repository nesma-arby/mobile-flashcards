import React from 'react';

import { View, Text, StyleSheet, FlatList , TouchableHighlight,
TouchableOpacity, TouchableNativeFeedback , TouchableWithoutFeedback ,
Image , ScrollView , KeyboardAvoidingViewComponent , TextInput ,
 } from "react-native";
 import { connect } from "react-redux";
import { retrieveDecks } from "../utils/api";
import { showDecks } from "../action";

 class Decks extends React.Component{

   render(){
      return (
        <View style={styles.container}>
          <Text> hello ahmed  </Text>
        </View>
      );
   }


}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
});


export default Decks
