import { StyleSheet } from "react-native";

export default StyleSheet.create({
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
    backgroundColor: "#eee",
  },

  title1: {
    fontFamily: "DM Sans",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    width: "80%",
    marginTop: "20%",
  },

  title2: {
    fontFamily: "DM Sans",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "left",
    width: "80%",
    marginVertical: "2%",
  },

  backgroundContainer: {
    backgroundColor: "#F6F6F6",
    alignItems: "stretch",
  },

  addContainer: {
    flexDirection: "row",
    marginVertical: "6%",
    width: "80%",
  },

  addCircle: {
    backgroundColor: "#C4C4C4",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
  },

  innerContainer: {
    alignSelf: "center",
    marginLeft: "3%",
  },

  rowContainer: {
    flexDirection: "row",
  },

  nameText: {
    fontFamily: "Avenir",
    fontWeight: "800",
    fontSize: 14,
  },
});
