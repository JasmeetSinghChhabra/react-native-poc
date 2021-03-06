import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TextInput,
  Modal
} from "react-native";
import GoalItem from "../components/GoalItem";
import GoalInput from "../components/GoalInput";
import Header from "../components/Header";

const StartGameScreen = props => {
  const [outputText, setoutputText] = useState("Notes App");
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const addGoalHandler = goalTitle => {
    //console.log(enteredGoal);
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]); //spread operator
    setIsAddMode(false);
  };
  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };
  const cancelGoaladditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <Modal visible={props.visible} animationType={"slide"}>
      <Header title={"Notes App"} />
      <View style={styles.container}>
        <Text>{outputText}</Text>
        <Button
          title="Click Me"
          onPress={() => setoutputText("List can be made: Add Notes.")}
        />
        <Button title="Add new goal" onPress={() => setIsAddMode(true)} />
        <Button title="Close Notes" onPress={props.onCancel} />

        <GoalInput
          visible={isAddMode}
          onAddGoal={addGoalHandler}
          onCancel={cancelGoaladditionHandler}
        />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData => (
            <GoalItem
              id={itemData.item.id}
              onDelete={removeGoalHandler}
              title={itemData.item.value}
            />
          )}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 60,
    alignItems: "stretch",
    justifyContent: "space-between",
    flex: 1
  }
});

export default StartGameScreen;
