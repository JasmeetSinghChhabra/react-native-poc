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

const StartGameScreen = props => {
  //   const [enteredGoal, setEnteredGoal] = useState(""); //to get input
  //   const goalInputHandler = input => {
  //     setEnteredGoal(input);
  //   };
  //   const addGoalHandler = () => {
  //     props.onAddGoal(enteredGoal);
  //     setEnteredGoal("");
  //   };
  return (
    <View style={styles.screen1}>
      <Text>Works!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen1: {
    paddingTop: 10,
    alignItems: "center"
    // flex: 1,
    //justifyContent: "center"
  }
});

export default StartGameScreen;
