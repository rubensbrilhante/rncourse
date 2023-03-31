import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem({ item, onPressAction }) {
  return <View style={styles.container}>
    <Pressable android_ripple={{color: '#acc'}} onPress={onPressAction.bind(this, item)}>
      <Text style={styles.goalItem}>{item}</Text>
    </Pressable>
  </View>
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    padding: 8,
    color: "#FFF",
  },
  container: {
    marginVertical: 4,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
});
