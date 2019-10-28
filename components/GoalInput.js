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

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState(""); //to get input
  const goalInputHandler = input => {
    setEnteredGoal(input);
  };
  return (
    <Modal visible={props.visible} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Checking Fucntionality"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="Add" onPress={() => props.onAddGoal(enteredGoal)} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    alignItems: "center",
    padding: 60,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    width: "80%",
    color: "red",
    //borderBottomColor: "black",
    borderWidth: 2,
    borderColor: "gold",
    padding: 10
  }
});

export default GoalInput;
