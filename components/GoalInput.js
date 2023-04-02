import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";
function GoalInput({ addGoal, isModalVisible, setIsModalVisible }) {
  console.log('isModalVisible' + isModalVisible)
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    console.log(enteredGoalText);
    if (enteredGoalText?.trim() !== '') {
      addGoal(enteredGoalText)
      setEnteredGoalText('');
      setIsModalVisible(false)
    }
  }

  const exit = () => {
    setIsModalVisible(false)
  }

  return (
    <Modal visible={isModalVisible} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/images/goals.png')} style={styles.image} />
        </View>
        <View style={styles.bottonContainer}>
          <TextInput
            style={styles.inputText}
            placeholder="Your goal"
            onChangeText={goalInputHandler}
            value={enteredGoalText}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Add Goal" onPress={addGoalHandler} color="#754da6" />
            </View>
            <View style={styles.button}>
              <Button title="Exit" onPress={exit} color="#ff0080" />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    marginVertical: 8,
  },
  imageContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
  },
  bottonContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 8,
  },
  inputText: {
    borderWidth: 1,
    borderColor: "#8000ff",
    padding: 8,
    borderRadius: 8,

    width: "85%",
    height: "auto",
  },
  image: {
    margin: 8,
    width: "25%",
    height: "25%",
    minHeight: 200,
    minWidth: 200,
    resizeMode: "contain"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
    width: "100%"
  },
  button: {
    margin: 8,
    width: "30%"
  },
});
