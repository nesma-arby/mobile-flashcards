import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from "react-redux";
import { retrieveDecks } from "../utils/api";
import { showDecks } from "../actions";
import { white } from "../utils/colors";

class DeckDetails extends React.Component {

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

        return (

            if (!this.state.ready) {
                return (
                  <View style={styles.blank}>
                    <Text>Loading...</Text>
                  </View>
                );
              } else {

                
              }
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

  export function mapStateToProps(mystate){
      return{
          mystate
      }
  }

  const mapDispatchToProps = dispatch => ({
    receiveDecks: (decks) => dispatch(showDecks(decks))
  });

export default DeckDetails