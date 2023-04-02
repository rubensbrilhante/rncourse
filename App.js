import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false)

  function addGoal(goal) {
    console.log(goals)
    setGoals((currentGoals) => [
      ...new Set([...currentGoals, goal]),
    ]);
  }

  function onPress(goal) {
    console.log('on press', goal)
    setGoals((goals) => {
      const filter = goals.filter(g => g !== goal)
      return filter ? filter : []
    })
  }

  const showModal = () => setModalVisible(true)
  return (
    <>
      <StatusBar
        style="light"
        translucent={false}
        networkActivityIndicatorVisible
        backgroundColor="#5e0acc"

      />
      <View style={styles.container}>
        <Button title="Add new goal" color="#5e0acc" onPress={showModal} />
        <GoalInput addGoal={addGoal} isModalVisible={isModalVisible} setIsModalVisible={setModalVisible} />
        <View style={styles.goalsContainer}>
          <Text style={styles.simpleText}>List of goals</Text>
          <FlatList
            data={goals}
            renderItem={(item) => {
              return <GoalItem item={item.item} onPressAction={onPress} />;
            }}
            keyExtractor={(item, index) => {
              return item;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "visible",
    flex: 1,
    flexDirection: "column-reverse",
    justifyContent: "flex-start",
    alignItems: "stretch",
    margin: 12,
  },

  goalsContainer: {
    flex: 9,
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    marginVertical: 8,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },


  simpleText: {
    fontWeight: "bold",
    marginVertical: 4,
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    width: "100%",
    height: "auto"
  },
});
