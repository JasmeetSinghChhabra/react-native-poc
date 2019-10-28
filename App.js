import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TextInput
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [outputText, setoutputText] = useState("Yo Bitches");
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    //console.log(enteredGoal);
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]); //spread operator
  };

  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="Click Me" onPress={() => setoutputText("Oh Yes")} />

      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            onDelete={() => console.log('Does that work?')}
            title={itemData.item.value }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 60,
    flex: 1,
    backgroundColor: "grey",
    color: "pink"
    //alignItems: "center",
    // justifyContent: "center"
  }
});
