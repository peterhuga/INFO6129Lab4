import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Styles from "./InputStyle.js";

export default function (props) {
  const [game, setGame] = useState();
  const handleAddGame = (v) => {
    props.addGame(v);
    
    setGame(null);
  };

  return (
    <KeyboardAvoidingView
      // behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={Styles.container}
    >
      <TextInput
        style={Styles.inputField}
        onChangeText={(text) => setGame(text)}
        value={game}
        placeholder={"Write a game here"}
        placeholderTextColor={"#fff"}
      />
      <TouchableOpacity onPress={() => handleAddGame(game)}>
        <View style={Styles.button}>
          <MaterialIcons name="keyboard-arrow-up" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
