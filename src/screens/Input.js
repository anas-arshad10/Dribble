import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const Input = () => {
  // const [text, onChangeText] = React.useState("Write");
  const [text, onChangeText] = React.useState(null);
  // const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Whats on your mind?"
        placeholderTextColor="white"
      />
      {/* <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    marginLeft:15,
    marginTop: 10,
    borderColor:'#66676B',
    borderWidth: 1,
    borderRadius:20,
    padding: 10,
    width:300,
    height:40
  },
});

export default Input;