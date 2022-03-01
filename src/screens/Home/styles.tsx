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
    fontSize: 28,
    fontWeight: "500",
    textAlign: "left",
    width: "80%",
  },

  title2: {
    fontFamily: "DM Sans",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "left",
    width: "80%",
    marginVertical: "2%",
  },

  familyCardContainer: {
    backgroundColor: "#F6F6F6",
    alignItems: "stretch",
    marginTop: "5%",
    borderRadius: 10, 
  },

  familyBalanceCardContainer: {
    backgroundColor: "#F6F6F6",
    alignItems: "stretch",
    marginTop: "5%",
    borderRadius: 10, 
  },

  headline: {
    flexDirection: "row",
    alignItems: "stretch",
    marginTop: "20%",
  },

  addContainer: {
    flexDirection: "row",
    marginVertical: "6%",
    width: "80%",
  },

  addCircle: {
    backgroundColor: "#C4C4C4",
    width: 30,
    height: 30,
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

  columnContainer: {
    marginLeft: "5%",
    flexDirection: "column",
  },

  nameText: {
    fontFamily: "Avenir",
    fontWeight: "800",
    fontSize: 14,
  },

  balanceText: {
    fontFamily: "Avenir",
    fontWeight: "900",
    fontSize: 28,

  },
});
