import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from "react-native";
import { blue, white, gray } from "../utils/colors";


class QuizCardDetails extends React.Component {

    state = {
        showQuestion: true
      };
    
      toggleQuestion = () => {
        this.setState(state => ({
          showQuestion: !state.showQuestion
        }));
      };
    
      render() {
    
        const { showQuestion } = this.state;
        const { card } = this.props;
    
    
        return (
          <View style={styles.container}>
    
            <View>
              {this.state.showQuestion ? (
                <Text style={styles.text}>{card.question}</Text>
              ) : (
                <Text style={styles.text}>{card.answer}</Text>
              )}
            </View>
    
            <View style={{ marginTop: 30 }}>
            <TouchableOpacity style={{ backgroundColor: gray }}  onPress={this.toggleQuestion}>
                    <Text> {`See ${showQuestion ? "Answer" : "Question"}`} </Text>
            </TouchableOpacity>
            </View>
            
          </View>
        );
      }
    }
    




const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: blue,
      padding: 30,
      width: 350,
      height: 250,
      borderRadius: 5,
      shadowRadius: 5,
      shadowOpacity: 0.8,
      shadowColor: "rgba(0, 0, 0, 0.24)",
      shadowOffset: {
        width: 4,
        height: 5
      }
    },
    text: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
      color: white
    }
  });
  

export default QuizCardDetails