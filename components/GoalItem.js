import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TextInput,
  TouchableOpacity
} from "react-native";

const GoalItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
    margin: 10,
    color: "pink"
  }
});
export default GoalItem;
