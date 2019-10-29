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
  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
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
        <View style={styles.btn}>
          <Button title="Cancel" color="red" onPress={props.onCancel} />
          <Button title="Add" onPress={addGoalHandler} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    //padding: 60,
    //flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    width:'80%'
  },
  inputContainer: {
    flexDirection: "column",
    alignItems: "center",
    padding: 60,
    flex: 1,
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
