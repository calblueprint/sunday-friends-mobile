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
    marginVertical: "3%",
    marginHorizontal: "10%",
    justifyContent: "space-between",
  },

  head: {
    resizeMode: "contain",
    width: 50,
    height: 50,
    justifyContent: "center",
  },

  parent: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    justifyContent: "center",
  },

  imageContainer: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  child: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  dependent: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },

  rowContainer: {
    flexDirection: "row",
  },

  innerContainer: {
    alignSelf: "center",
    width: "70%",
  },

  deleteContainer: {
    alignSelf: "center",
  },

  deleteSeparator: {
    width: 21,
  },
});
