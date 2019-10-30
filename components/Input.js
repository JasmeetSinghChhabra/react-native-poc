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

const Input = props => {
  return <TextInput style={{ ...styles.input, ...props.style }} />;
};
const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,

    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    // backgroundColor: "white",
    // padding: 20,
    elevation: 5,
    borderRadius: 10
  }
});

export default Input;
