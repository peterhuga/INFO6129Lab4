import { StatusBar } from "expo-status-bar";
import StyleSheet from "./src/Style/main_style.js";
import { View, Text, Keyboard, ScrollView, Button } from "react-native";
import ListItem from "./src/component/ListItem/ListItem.js";
import Input from "./src/component/Input/Input.js";
import { useState } from "react";

export default function App() {
  const [games, setGames] = useState([]);
  const addGame = (game) => {
    if (game == null) {
      console.log("Null Game");
      return;
    }

    setGames([...games, game]);
    Keyboard.dismiss();

    console.log("array: ", games);
  };

  const deleteGame = (deletedIndex)=>{
    
    setGames(games.filter((value, index)=>index != deletedIndex));
    
  }

  return (
    <View style={StyleSheet.container}>
      <StatusBar style="light" />
      <View style={StyleSheet.headContainer}>
      <Text style={StyleSheet.heading}>GAME LIST</Text>
      <Button title="Clear" color="#3E3364" onPress={()=>setGames([])}/>
      </View>
      <ScrollView style={StyleSheet.scrollView}>
        {games.map((game, index) => {
          return (
            <View key={index} style={StyleSheet.gameContainer}>
              <ListItem index={index+1} text={game} deleteGame={()=>deleteGame(index)} />
            </View>
          );
        })}
      </ScrollView>

      <Input addGame={addGame} />
    </View>
  );
}
