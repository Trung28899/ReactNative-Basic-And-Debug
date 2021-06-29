import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Button = ({ title, pressed }) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.buttonStyle} onTouchEnd={pressed}>
        <Text style={styles.textStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "black",
    justifyContent: "center",
    borderRadius: 25,
    marginBottom: 15,
  },
  textStyle: {
    color: "white",
    fontSize: 15,
  },
});

export default Button;
