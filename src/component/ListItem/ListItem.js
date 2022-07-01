import StyleSheet from "./ListItemStyle.js";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function (props) {
  return (
    <View style={StyleSheet.container}>
      <View style={StyleSheet.indexContainer}>
        <Text style={StyleSheet.index}>{props.index}</Text>
      </View>
      <View style={StyleSheet.gameContainer}>
        <Text style={StyleSheet.gameText}>{props.text}</Text>
        <TouchableOpacity onPress={()=>props.deleteGame()}>
          <MaterialIcons name="delete" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
