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
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <View style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput placeholder="Number" />
        <View style={styles.btn}>
          <Button title="Reset" onPress={() => {}} />
          <Button title="Confirm" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: 10,
    alignItems: "center"
    // flex: 1,
    //justifyContent: "center"
  },
  btn: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    margin: 15
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    margin: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    padding: 20,
    elevation: 5,
    borderRadius: 10,
    margin: 30,
    
  }
});

export default StartGameScreen;
