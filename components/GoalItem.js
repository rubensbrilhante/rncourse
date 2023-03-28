import { StyleSheet, Text } from "react-native";

function GoalItem({ item }) {
  return <Text style={styles.goalText}>{item}</Text>;
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 4,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "#FFF",
  },
});
