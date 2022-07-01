import { StatusBar } from "expo-status-bar";
import StyleSheet from "./src/Style/main_style.js";
import { View, Text, Keyboard, ScrollView, Button } from "react-native";
import ListItem from "./src/component/ListItem/ListItem.js";
import Input from "./src/component/Input/Input.js";
import { useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import * as SQLite from "expo-sqlite";

export default function App() {
  useEffect(() => {
    SplashScreen.preventAutoHideAsync()
      .then((r) => {
        console.log("Prevented? ", r);
      })
      .catch((e) => {
        console.log("Error: ", e);
      });
  }, []);

  const [games, setGames] = useState([
    "abc", "dgfdds", "dsffsd"
  ]);

  useEffect(() => {
    SplashScreen.hideAsync()
      .then((r) => {
        console.log("Hide? ", r);
      })
      .catch((e) => {
        console.log("Error: ", e);
      });
  }, []);

  useEffect(() => {
    const id = 3;
    const genre = "Adults";
    const database = SQLite.openDatabase("gameList.db");
    //console.log("Database: ", database);
    database.transaction(
      (transaction) => {
        //console.log("Tx: ", transaction);
        transaction.executeSql(
          // `CREATE TABLE IF NOT EXISTS GamesTable (

          //   id INTEGER PRIMARY KEY NOT NULL,
          //   title TEXT,
          //   genre TEXT
          // )
          // `,
          'SELECT id, title, genre FROM GAMESTABLE',
          // `
          // INSERT INTO GAMESTABLE(title, genre)
          // VALUES(?, ?)
          // `,
          // `
          // UPDATE GAMESTABLE
          // SET genre = ?
          // WHERE id = ?
          // `,
          // `
          // DELETE FROM GAMESTABLE
          // WHERE id = ?
          // `,
          [],
          (tx, rsltSet) => {
            console.log("sql success: ", rsltSet);
            //console.log("Data expected: ", rsltSet.rows._array[2].genre);
          },
          (tx, err) => {
            console.log("SQL error: ", err);
          }
        );
      },
      (err) => {
        console.log("Error: ", err);
      },
      () => {
        console.log("Tx success.");
      }
    );
  }, []);

  const addGame = (game) => {
    if (game == null) {
      console.log("Null Game");
      return;
    }

    setGames([...games, game]);
    Keyboard.dismiss();

    //console.log("array: ", games);
  };

  const deleteGame = (deletedIndex) => {
    setGames(games.filter((value, index) => index != deletedIndex));
  };

  return (
    <View style={StyleSheet.container}>
      <StatusBar style="light" />
      <View style={StyleSheet.headContainer}>
        <Text style={StyleSheet.heading}>GAME LIST</Text>
        <Button title="Clear all" color="#3E3364" onPress={() => setGames([])} />
      </View>
      <ScrollView style={StyleSheet.scrollView}>
        {games.map((game, index) => {
          return (
            <View key={index} style={StyleSheet.gameContainer}>
              <ListItem
                index={index + 1}
                text={game}
                deleteGame={() => deleteGame(index)}
              />
            </View>
          );
        })}
      </ScrollView>

      <Input addGame={addGame} />
    </View>
  );
}
