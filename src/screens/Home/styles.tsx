import { StyleSheet } from "react-native";

export default StyleSheet.create({
  separator: {
    marginVertical: 30,
    height: 1,
    width: "90%",
    backgroundColor: "#eee",
  },

  title1: {
    fontFamily: "DM Sans",
    fontSize: 28,
    fontWeight: "500",
    textAlign: "left",
    width: "90%",
  },

  title2: {
    fontFamily: "DM Sans",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "left",
    width: "90%",
    marginVertical: "2%",
  },

  familyCardContainer: {
    backgroundColor: "#F6F6F6",
    // alignItems: "stretch",
    marginTop: 17,
    borderRadius: 10, 
    width: "89.4%",
    overflow: "hidden",
    borderWidth: 2,
    borderColor: '#F2F2F2',
  },

  homeContainer: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },

  familyBalanceCardContainer: {
    backgroundColor: "#F6F6F6",
    marginTop: 17,
    borderRadius: 10, 
    width: "89.4%",
    borderWidth: 2,
    height: 210,
    borderColor: '#F2F2F2',
  },

  headline: {
    flexDirection: "row",
    width: "89.4%",
    justifyContent: "space-between",
    marginTop: 91,
  },

  addContainer: {
    flexDirection: "row",
    marginVertical: "5%",
    marginLeft: "5%",
    width: "89.4%",
  },

  topHalfContainer: {
    justifyContent: 'space-between',
    flexDirection: "row",
    marginVertical: "5%",
    marginLeft: "5%",
    width: "89.4%",
  },

  buttomBar: {
    justifyContent: 'space-between',
    alignItems: "center",
    flexDirection: "row",
    marginVertical: "5%",
    marginLeft: "5%",
    width: "89.4%",
  },


  progressBar: {
    marginVertical: "2.5%",
    justifyContent: "center",
  },

  circles: {
    marginVertical: "5%",
    height: "25%",
  },

  addCircle: {
    backgroundColor: "#C4C4C4",
    width: 30,
    height: 30,
    borderRadius: 25,
    justifyContent: "center",
  },

  addBar: {
    backgroundColor: "#F2F2F2",
    width: 296,
    height: 4.39,
    borderRadius: 9,
    justifyContent: "center",
    alignContent: "center",
  },

  contributions: {
    // backgroundColor: "#F2F2F2",
    width: 127,
    height: 24,
    borderRadius: 26,
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  addLevelCircle: {
    backgroundColor: "#F2F2F2",
    width: 23.05,
    height: 23.05,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  addLevelCircleCurrent: {
    backgroundColor: "#5F5F5F",
    width: 23.05,
    height: 23.05,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  innerContainer: {
    alignSelf: "center",
    marginLeft: "3%",
  },

  optionsContainer: {
    marginTop: "5%",
  },

  levels: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  rowContainer: {
    flexDirection: "row",
  },

  columnContainer: {
    flexDirection: "column",
    alignItems: "center",
  },

  balanceContainer: {
    flexDirection: "column",
    alignItems: "center",
  },

  balanceText: {
    fontFamily: "DM Mono",
    fontWeight: "800",
    fontSize: 36,

  },
});
