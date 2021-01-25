import React from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = ({
  onChange,
  onAdd,
  enteredGoal,
  visible,
  setEnteredGoal,
  onCancel,
}) => {
  const addGoalHandler = () => {
    onAdd(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={onChange}
          value={enteredGoal}
        />
        <View style={styles.buttonStyles}>
          <Button title="CANCEL" color="red" onPress={onCancel} />
          <Button title="ADD" onPress={addGoalHandler} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonStyles: {
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    width: "60%",
  },
});

export default GoalInput;
