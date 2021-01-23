import React from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

const GoalInput = ({ onChange, onAdd, enteredGoal }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={onChange}
        value={enteredGoal}
      />
      <Button title="ADD" onPress={onAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});

export default GoalInput;
