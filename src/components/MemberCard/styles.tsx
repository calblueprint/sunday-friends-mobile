import { StyleSheet } from "react-native";

export default StyleSheet.create({
  nameText: {
    fontFamily: "Avenir",
    fontWeight: "800",
    fontSize: 14,
  },

  container: {
    flexDirection: "row",
    width: "80%",
    marginVertical: "6%",
    marginHorizontal: "10%",
  },

  circle: {
    backgroundColor: "#C4C4C4",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
  },

  rowContainer: {
    flexDirection: "row",
  },

  innerContainer: {
    alignSelf: "center",
    marginLeft: "3%",
  },
});
