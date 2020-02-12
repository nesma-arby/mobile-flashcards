import React from 'react';
import { StyleSheet, Text, View, FlatList , TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import { retrieveDecks } from "../utils/api";
import { showDecks } from "../action/index";
import pluralize from "pluralize";

import { white, purple, gray } from "./src/utils/colors";

import AddDeck from "./src/components/AddDeck";
import DeckDetails from "./src/components/DeckDetails";

class Decks extends React.Component {

    state = {
        ready: false
      };
    
      componentDidMount() {
        retrieveDecks()
          .then(decks => this.props.receiveDecks(decks))
          .then(() => {
            this.setState({ ready: true });
          });
      }


    render() {

        if (!this.state.ready) {
            return (
              <View style={styles.blank}>
                <Text>Loading...</Text>
              </View>
            );
          } else {
            return Object.values(this.props.decks).length > 0 ? (

              <View style={styles.container}>

                <FlatList
                  data={Object.values(this.props.decks)}
                  renderItem={({ item }) => (

                <TouchableOpacity
                    style={styles.container}
                    onPress={() =>
                      this.props.navigation.navigate("DeckDetails", { deckId: item.id, name: item.name })
                    }
                  >
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.count}>{item.cards.length} ${pluralize(
                        "Card",
                        item.cards.length
                      )}`}
                    </Text>
                 </TouchableOpacity>


                  )}
                  keyExtractor={(item, index) => item.name}
                />
              </View>
          ) 

           : (
              <View style={styles.blank}>
                <Text style={{ fontSize: 18 }}>You don't have any decks yet.</Text>

            <TouchableOpacity style={styles.button}  onPress={() => { this.props.navigation.navigate("AddDeck");}}>
                   <Text style={styles.reset}> Create Deck </Text>
            </TouchableOpacity>

              </View>
            );
          }
      
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "flex-start"
  },
  blank: {
    flex: 1,
    backgroundColor: white,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    borderRadius: 5,
    backgroundColor: purple,
    margin: 10,
    padding: 15,
    width: 300
  },
  reset: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: white
  },
  name: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 5
  },
  count: {
    fontSize: 20,
    textAlign: "center",
    color: gray,
    marginBottom: 5
  }
});


  const mapStateToProps = decks => ({
    decks
  });

  const mapDispatchToProps = dispatch => ({
    receiveDecks: (decks) => dispatch(showDecks(decks))
  });

export default connect(mapStateToProps,mapDispatchToProps)(Decks)