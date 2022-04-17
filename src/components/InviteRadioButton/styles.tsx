import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "80%",
    height: "20%",
    marginBottom: "6%",
    marginTop: "2%",
    justifyContent: "space-between",
  },

  selected: {
    width: "48%",
    backgroundColor:
      "linear-gradient(0deg, rgba(230, 236, 254, 0.4), rgba(230, 236, 254, 0.4)), #FFFFFF",
    borderWidth: 2,
    borderColor: "#7F93D1",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  unselected: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#F2F2F2",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  parent: {
    width: 50,
    height: 50,
    resizeMode: "contain",
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

  statusText: {
    fontFamily: "Avenir",
    fontSize: 14,
    fontWeight: "400",
    color: "#525454",
    marginTop: "10%",
  },
});
