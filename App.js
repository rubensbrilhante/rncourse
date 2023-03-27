import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState()
  const [goals, setGoals] = useState([])
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler(params) {
    console.log(enteredGoalText)
    setGoals((currentGoals) => [...new Set([...currentGoals, enteredGoalText])])
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" networkActivityIndicatorVisible backgroundColor="#F00" />
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputText} placeholder='Your goal' onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text style={styles.simpleText}>List of goals</Text>
        <ScrollView>
          {goals.map((goal) => <Text key={goal} style={styles.goalText}>{goal}</Text>)}
        </ScrollView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'visible',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#eee',
    margin: 12
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 8,
    flex: 2
  },
  goalsContainer: {
    flex: 9,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginVertical: 8,
    borderTopColor: '#000',
    borderTopWidth: 1,
  },
  inputText: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#cccccc',
    marginEnd: 8
  },
  goalText: {
    margin: 4,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },
  simpleText: { marginTop: 12, width: '100%', height: 'auto' }
});
