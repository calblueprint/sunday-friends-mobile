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
    borderColor: "#E6ECFE",
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
    height: 95,
    borderColor: "#E6ECFE",
  },

  tranxContainer: {
    marginTop: 17,
    height: 550,
  },
  tranxbar: {
    marginLeft: "5%",
    marginBottom: 17,
  },

  headline: {
    flexDirection: "row",
    width: "89.4%",
    justifyContent: "space-between",
    marginTop: 0,
    alignItems: "flex-end",
  },

  shadow: {
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
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
    marginLeft: 10,
    width: "89.4%",
  },

  topHalfContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: "5%",
    width: "89.4%",
    marginTop: 16,
  },

  tierOptionsContainer: {
    flexDirection: "row-reverse",
    width: "100%",
    // borderWidth: 2,
    // borderColor: 'black',
  },

  stackOfSmileys: {
    marginRight: 10,
    flexDirection: "row",
    width: 120,
    // shadowColor: 'black',
    // shadowOffset: {width: 10, height: 10},
    // shadowRadius: 5,
    // borderWidth: 2,
    // borderColor: 'black',
  },

  profileImage: {
    width: 42,
    height: 42,
    // borderWidth: 2,
    // borderColor: 'black',
  },

  buttomBar: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 20,
    marginLeft: "5%",
    width: "89.4%",
    // borderColor: 'black',
    // borderWidth: 2,
  },

  buttonText: {
    color: "#393939",
  },

  buttonTextStyle: {
    color: "green",
  },

  progressBar: {
    marginTop: 20,
    justifyContent: "center",
    // borderWidth: 2,
    // borderColor: 'black',
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

  addPersonalCircle: {
    backgroundColor: "#7F93D1",
    width: 36,
    height: 37,
    borderRadius: 20,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#5A6AA2",
    alignItems: "flex-start",
    paddingLeft: 10,
    paddingVertical: 7,
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
    width: 85,
    height: 24,
    borderRadius: 26,
    padding: 4,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#A9A9A9",
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
    marginTop: 20,
  },

  levels: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  rowContainer: {
    flexDirection: "row",
  },

  tierContainer: {
    // marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    // width: '89.4%'
  },

  tierBox: {
    flexDirection: "row",
    alignItems: "center",
    width: 69,
    height: 39,
    backgroundColor: "#526DC2",
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
    fontFamily: "Avenir",
    fontWeight: "400",
    fontSize: 12,
  },

  initialText: {
    fontFamily: "DM Sans",
    fontWeight: "700",
    fontSize: 18,
  },
});

export const customStyles = {
  stepIndicatorSize: 23.05,
  currentStepIndicatorSize: 23.05,
  separatorStrokeWidth: 4.39,
  currentStepStrokeWidth: 2,
  stepStrokeCurrentColor: "#7F93D1",
  stepStrokeWidth: 2,
  stepStrokeFinishedColor: "#7F93D1",
  stepStrokeUnFinishedColor: "#7F93D1",
  separatorFinishedColor: "#7F93D1",
  separatorUnFinishedColor: "#7F93D1",
  stepIndicatorFinishedColor: "#253C85",
  stepIndicatorUnFinishedColor: "#E6ECFE",
  stepIndicatorCurrentColor: "#253C85",
  stepIndicatorLabelFontSize: 14,
  currentStepIndicatorLabelFontSize: 14,
  stepIndicatorLabelCurrentColor: "white",
  stepIndicatorLabelFinishedColor: "white",
  stepIndicatorLabelUnFinishedColor: "#253C85",
  labelColor: "#A9A9A9",
  labelSize: 14,
  currentStepLabelColor: "#253C85",
};
