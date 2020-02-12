import React from 'react';
import pluralize from "pluralize";
import { connect } from "react-redux";
import { Text, View, StyleSheet ,TouchableOpacity } from "react-native";
import { green, gray, white } from "../utils/colors";

class DeckDetails extends React.Component {

  startQuiz = () => { };


  render() {
    return (

      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.name}>{this.props.deck.name}</Text>
          <Text style={styles.count}>{`${this.props.deck.cards.length} ${pluralize(
            "Card",
            this.props.deck.cards.length
          )}`}</Text>
        </View>

        <View style={styles.actions}>

          {this.props.deck.cards.length !== 0 && (
            <TouchableOpacity onPress={() => { this.props.navigation.navigate("Quiz", this.props.deck); }}>
              <Text>Start Quiz</Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("AddCard", { deckId: this.props.deck.id });
            }}
            style={{ backgroundColor: this.props.deck.cards.length !== 0 ? gray : green }}
          >
            <Text>Add Card</Text>
          </TouchableOpacity>

        </View>

      </View>
    );


  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    justifyContent: "center",
    alignItems: "center"
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    marginBottom: 5
  },
  count: {
    fontSize: 20,
    color: gray,
    textAlign: "center",
    marginBottom: 5
  },
  actions: {
    marginTop: 20
  }
});



const mapStateToProps = (state, { navigation }) => ({
  deck: state[navigation.getParam("deckId")]
});


export default connect(mapStateToProps, null)(DeckDetails);