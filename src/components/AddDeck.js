import React from 'react';
import { connect } from "react-redux";
import {
    Text,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity
} from "react-native";
import { AddDeck } from "../action/index";
import { saveDeck } from "../utils/api";
import { generateId } from "../utils/helpers";
import { white, gray } from "../utils/colors";

class AddDeck extends React.Component {

    state = {
        input: ""
    };


    createDeckObject = () => ({
        id: generateId(),
        name: this.state.input,
        cards: []
    })


    handleInputChange = input => {
        this.setState(() => ({
            input
        }));
    };

    handleSubmit = () => {
        deck = this.createDeckObject();
        this.props.createDeck(deck.id, deck.name); // Add to redux
        saveDeck(deck); // Persist to AsyncStorage

        // Route to new deck's detail view.
        this.props.navigation.navigate("DeckDetails", {
            deckId: deck.id,
            name: deck.name
        });

        // Reset input for future use.
        this.setState(() => ({
            input: ""
        }));
    };


    render() {

        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <Text style={styles.label}>What will you learn in this deck?</Text>

                <TextInput
                    style={styles.input}
                    value={input}
                    placeholder="e.g. Algebra"
                    onChangeText={this.handleInputChange}
                />

                <TouchableOpacity onPress={this.handleSubmit}>
                    <Text> Create Deck </Text>
                </TouchableOpacity>

            </KeyboardAvoidingView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    label: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    input: {
        backgroundColor: white,
        width: 350,
        fontSize: 20,
        height: 50,
        padding: 10,
        borderRadius: 1,
        borderColor: gray,
        margin: 20
    }
});


const mapDispatchToProps = dispatch => ({
    createDeck: (id, dickName) => dispatch(saveDeck(id, dickName))
})


export default connect(null, mapDispatchToProps)(AddDeck)