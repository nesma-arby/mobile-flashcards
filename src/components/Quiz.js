import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

class Quiz extends React.Component {

    render() {

        return (

            <View style={styles.container}>

                <Text>

                    take Quiz
                    
                </Text>
            </View>
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
  

export default Quiz