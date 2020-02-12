import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import { purple, white, gray } from "../utils/colors";

const QuizResut = ({
    correctAnswerCount,
    incorrectAnswerCount,
    restartQuiz,
    navigation
  }) => (
    <View style={styles.container}>
        
      <Text style={styles.header}>You scored</Text>

      <Text style={styles.result}>{`${Math.round(
        (correctAnswerCount * 100) / (correctAnswerCount + incorrectAnswerCount)
      )} %`}</Text>
      <View style={styles.actions}>


      <TouchableOpacity onPress={() => restartQuiz()} >
          <Text>Restart Quiz</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}  style={{ backgroundColor: gray }}>
          <Text> Back to Deck </Text>
      </TouchableOpacity>
    
      </View>
    </View>
  );

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: white
    },
    header: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center"
    },
    result: {
      fontSize: 70,
      color: purple,
      textAlign: "center"
    },
    actions: {
      marginTop: 50
    }
  });
  

export default QuizResult