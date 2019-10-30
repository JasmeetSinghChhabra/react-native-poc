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
import Card from "../components/card";
import Colors from "../constants/colors";
import Input from "../components/Input";

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input style={styles.Input} />
        <View style={styles.btn}>
          <Button title="Reset" onPress={() => {}} color={Colors.accent} />
          <Button title="Confirm" onPress={() => {}} color={Colors.primary} />
        </View>
      </Card>
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
    paddingHorizontal: 15
    //margin: 15
  },
  title: {
    fontSize: 20,
    marginVertical: 10
    // margin: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    margin: 30
  },
  Input: {
    width: 50,
    textAlign: "center"
  }
});

export default StartGameScreen;
