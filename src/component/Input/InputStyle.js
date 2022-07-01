import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    borderColor: "#fff",
    borderWidth: 1,
    backgroundColor: "#3E3364",
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    position: "absolute",
    bottom: 20,
  },
  inputField: {
    color: "#fff",
    height: 50,
    flex: 1,
  },
  button: {
    borderRadius: 5,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 30,
  },
});
