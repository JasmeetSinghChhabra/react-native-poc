import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TextInput
} from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import NotesScreen from "./screens/NotesScreen";
import Colors from "./constants/colors";

const App = props => {
  const [isNotesMode, setIsNotesMode] = useState(false);
  const cancelGoaladditionHandler = () => {
    setIsNotesMode(false);
  };
  return (
    <View style={styles.screen}>
      <Header title={"Main Page"} />
      <StartGameScreen />
      <NotesScreen visible={isNotesMode} onCancel={cancelGoaladditionHandler} />
      <Button title="Notes App" onPress={() => setIsNotesMode(true)} color={Colors.primary}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});

export default App;
