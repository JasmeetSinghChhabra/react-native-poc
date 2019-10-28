import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TextInput
} from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState(""); //to get input
  const goalInputHandler = input => {
    setEnteredGoal(input);
  };
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
      }}
    >
      <TextInput
        style={{
          width: "80%",
          color: "red",
          //borderBottomColor: "black",
          borderWidth: 2,
          borderColor: "gold",
          padding: 10
        }}
        placeholder="Checking Fucntionality"
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="Add" onPress={()=>props.onAddGoal(enteredGoal)} />
    </View>
  );
};

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

export default GoalInput;
