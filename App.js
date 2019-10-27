import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput
} from "react-native";

export default function App() {
  const [outputText, setoutputText] = useState("Yo Bitches");
  const [enteredGoal, setEnteredGoal] = useState(""); //to get input
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = input => {
    setEnteredGoal(input);
  };
  const addGoalHandler = () => {
    console.log(enteredGoal);
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]); //spread operator
  };

  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button title="Click Me" onPress={() => setoutputText("Oh Yes")} />

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
            borderColor: "red",
            padding: 10
          }}
          placeholder="Checking Fucntionality"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <View>
        <ScrollView>
          {courseGoals.map(goal => (
            <View key={goal} style={styles.listItem}>
              <Text>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 60,
    flex: 1,
    backgroundColor: "grey"
    //alignItems: "center",
    // justifyContent: "center"
  },
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
    margin: 10
  }
});
