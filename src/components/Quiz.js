import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import pluralize from "pluralize";
import { white, gray } from "../utils/colors";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";

import QuizCardDetails from "./QuizCardDetails";
import QuizActionButtons from "./QuizActionButtons";
import QuizResult from "./QuizResult";


class Quiz extends React.Component {

    state = {
        correctAnswerCount: 0,
        incorrectAnswerCount: 0,
        currentQuestionIndex: 0, // tracks which card is currently being shown
        showResults: false
    }

    getDeck = () => {
        return this.props.navigation.getParam("deck");
    };

    restartQuiz = () => {
        this.setState({
            correctAnswerCount: 0,
            incorrectAnswerCount: 0,
            currentQuestionIndex: 0,
            showResults: false
        });
    };

    getRemainingQuestions = () => {
        const { correctAnswerCount, incorrectAnswerCount } = this.state;
        const remainingQuestions = this.getDeck().cards.length - (correctAnswerCount + incorrectAnswerCount + 1);

        return `${remainingQuestions} ${pluralize(
            "question",
            remainingQuestions
        )} remaining.`;
    };

    recordAnswer = (userAnswer) => {
        // Update answer count.
        let {
            correctAnswerCount,
            incorrectAnswerCount,
            showResults,
            currentQuestionIndex
        } = this.state;

        // Update the count.
        if (userAnswer) {
            correctAnswerCount++;
        } else {
            incorrectAnswerCount++;
        }

        // Determine whether to show another card or quiz results.
        const deck = this._getDeck();

        if (currentQuestionIndex === deck.cards.length - 1) {
            // time to show results.
            showResults = true;

            // User completed a quiz, disable today's notification.
            clearLocalNotification();
            // Set tomorrow's notification.
            setLocalNotification();
        } else {
            // show next card.
            currentQuestionIndex++;
        }

        // Update state with new values.
        this.setState(state => ({
            correctAnswerCount,
            incorrectAnswerCount,
            showResults,
            currentQuestionIndex
        }));
    }


    render() {

        const {
            correctAnswerCount,
            incorrectAnswerCount,
            currentQuestionIndex,
            showResults
        } = this.state;

        return !showResults ? (

            <View style={styles.container}>

                <QuizCardDetails card={this.getDeck().cards[currentQuestionIndex]} />

                <Text style={styles.count}>{this.getRemainingCountMessage()}</Text>

                {/* Send recordAnswer method as prop to can access */}
                <QuizActionButtons recordAnswer={this.recordAnswer} />

            </View>
        )

            : (

                <QuizResult
                    correctAnswerCount={correctAnswerCount}
                    incorrectAnswerCount={incorrectAnswerCount}
                    restartQuiz={this.restartQuiz}
                    navigation={this.props.navigation}
                />

            );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: white,
        padding: 10
    },
    count: {
        color: gray,
        fontSize: 20,
        marginTop: 10
    },

});


export default Quiz