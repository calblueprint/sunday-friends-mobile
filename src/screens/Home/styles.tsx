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
    borderWidth: 2,
    borderColor: '#E6ECFE',
    backgroundColor: "#F6F6F6",
    // alignItems: "stretch",
    marginTop: 16,
    borderRadius: 10, 
    width: "89.4%",
    overflow: "hidden",
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
    borderColor: '#E6ECFE',
  },

  headline: {
    flexDirection: "row",
    width: "89.4%",
    justifyContent: "space-between",
    marginTop: 0,
  },

  dateContainer: {
    flexDirection: "row",
    width: "89.4%",
    justifyContent: "space-between",
    marginTop: 78,
  },

  addContainer: {
    flexDirection: "row",
    marginVertical: "5%",
    marginLeft: "5%",
    width: "89.4%",
  },

  topHalfContainer: {
    justifyContent: 'space-between',
    alignItems: "center",
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

  buttonText: {
    color: '#393939',
  },

  buttonTextStyle: {
    color: 'green'
  },



  progressBar: {
    marginVertical: "2.5%",
    justifyContent: "center",
  },

  nextBtnStyle: {
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
    width: 127,
    height: 24,
    borderRadius: 26,
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: '#A9A9A9',
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

  tierContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    // width: '89.4%'
  },

  tierBox: {
    flexDirection: "row",
    alignItems: "center",
    width: 69,
    height: 39,
    backgroundColor: '#526DC2',
    borderRadius: 5, 
    paddingHorizontal: 13,
    paddingVertical: 10, 
    marginRight: 14,
  },

  columnContainer: {
    flexDirection: "column",
    // alignItems: "center",
  },

  balanceContainer: {
    flexDirection: "column",
    // alignItems: "center",
  },

  balanceText: {
    fontFamily: "DM Mono",
    fontWeight: "500",
    fontSize: 36,

  },
  itemsText: {
    fontFamily: 'Avenir',
    fontWeight: "400",
    fontSize: 12,

  },
});
