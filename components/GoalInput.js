import {
  Button,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";
function GoalInput({addGoal}) {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    console.log(enteredGoalText);
    addGoal(enteredGoalText)
    setEnteredGoalText('');
  }
  
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputText}
        placeholder="Your goal"
        onChangeText={goalInputHandler}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 8,
    flex: 2,
  },
  inputText: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#cccccc",
    marginEnd: 8,
  },
});
