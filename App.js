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

  function addGoal(goal) {
    setGoals((currentGoals) => [
      ...new Set([...currentGoals, goal]),
    ]);
  }
  return (

    <View style={styles.container}>
      <StatusBar
        style="auto"
        networkActivityIndicatorVisible
        backgroundColor="#F00"
      />
      <GoalInput addGoal={addGoal}/>
      <View style={styles.goalsContainer}>
        <Text style={styles.simpleText}>List of goals</Text>
        <FlatList
          data={goals}
          renderItem={(item) => {
            return <GoalItem item={item} />;
          }}
          keyExtractor={(item, index) => {
            return item;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "visible",
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#eee",
    margin: 12,
  },

  goalsContainer: {
    flex: 9,
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch",
    marginVertical: 8,
    borderTopColor: "#000",
    borderTopWidth: 1,
  },


  simpleText: { marginTop: 12, width: "100%", height: "auto" },
});
