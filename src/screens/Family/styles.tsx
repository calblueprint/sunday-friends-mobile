import { StyleSheet } from "react-native";

export default StyleSheet.create({
  separator: {
    marginVertical: 30,
    height: 1,
    width: "90%",
    backgroundColor: "#FAFAFA",
  },

  contentContainer: {
    // paddingLeft: 20,
    // paddingRight: 60,
    width: "100%",
  },

  alignment: {
    // paddingLeft: 20,
    // paddingRight: 60,
    alignItems: "center",
  },

  title1: {
    fontFamily: "DMSans_500Medium",
    fontSize: 28,
    fontWeight: "500",
    textAlign: "left",
    width: "90%",
  },

  title2: {
    fontFamily: "DMSans_700Bold",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "left",
    width: "90%",
    marginVertical: "2%",
  },

  familyCardContainer: {
    // alignItems: "stretch",
    overflow: "hidden",
    // borderBottomColor: "#F2F2F2",
    // borderBottomWidth: 2,
  },

  dropdownContainer: {
    width: "89.4%",
    borderWidth: 2,
    borderColor: "#E6ECFE",
    backgroundColor: "white",
    marginTop: 16,
    borderRadius: 10,
    paddingHorizontal: 10,
  },

  dropdownHeader: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
  },

  dropdownList: {},

  headSeparator: {
    width: "100%",
    height: 2,
    backgroundColor: "#F2F2F2",
    alignSelf: "center",
  },

  memberSeparator: {
    width: "100%",
    height: 1,
    backgroundColor: "#F2F2F2",
    alignSelf: "center",
  },

  memberRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },

  memberInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    marginLeft: 20,
  },

  memberIcon: {
    width: 42,
    height: 42,
  },

  memberName: {
    fontFamily: "Avenir",
    fontStyle: "normal",
    fontWeight: "800",
    fontSize: 14,
    color: "#525454",
  },

  memberPoints: {
    fontFamily: "DMMono_500Medium",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 24,
    lineHeight: 31,
    color: "#526DC2",
  },

  homeContainer: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    backgroundColor: "#FAFAFA",
  },

  shomeContainer: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },

  familyBalanceCardContainer: {
    backgroundColor: "white",
    marginTop: 17,
    borderRadius: 10,
    width: "89.4%",
    borderWidth: 2,
    borderColor: "#E6ECFE",
    marginBottom: "4%",
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
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: "5%",
    marginLeft: 20,
    flex: 1,
  },

  topHalfContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: "5%",
    width: "89.4%",
    marginTop: 16,
  },

  tierOptionsContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    width: "100%",
    marginTop: 10,
  },

  stackOfSmileys: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginRight: 12,
    // width: '30%',
  },

  profileImage: {
    width: 42,
    height: 42,
    marginRight: -12,
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
    marginBottom: 15,
    // borderColor: 'black',
    // borderWidth: 2,
  },

  tierList: {
    flexDirection: "column",
    alignItems: "flex-start",
    width: "89.4%",
    marginTop: 20,
    marginLeft: "5%",
    marginBottom: 15,
  },

  toggleButton: {
    flexDirection: "row",
  },

  nameText: {
    fontFamily: "Avenir",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 16,
  },

  buttonText: {
    color: "#393939",
  },

  buttonTextStyle: {
    color: "green",
  },

  progressBar: {
    width: "110%",
    marginTop: 20,
    justifyContent: "center",
    marginLeft: "-5%",

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
    marginTop: "3%",
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

    justifyContent: "space-between",
    width: "100%",
    // width: '89.4%'
  },

  tierBox: {
    // flexDirection: "row",
    // alignItems: "center",
    // width: 69,
    // height: 39,
    // backgroundColor: '#526DC2',
    // borderRadius: 5,
    // paddingHorizontal: 13,
    // paddingVertical: 10,
    // marginRight: 14,
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
    fontFamily: "DMMono_500Medium",
    fontWeight: "500",
    fontSize: 36,
  },

  tierTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  tierTitle: {
    fontFamily: "Avenir",
    fontWeight: "800",
    fontSize: 14,
    marginTop: 2,
    marginLeft: 8,
    color: "#272929",
  },

  tierTitleGray: {
    fontFamily: "Avenir",
    fontWeight: "800",
    fontSize: 14,
    marginTop: 2,
    marginLeft: 8,
    color: "#525454",
  },

  tierText: {
    fontFamily: "Avenir",
    fontWeight: "900",
    fontSize: 14,
  },

  tierDescription: {
    fontFamily: "Avenir",
    fontWeight: "400",
    fontSize: 12,
    marginTop: 5,
    marginLeft: "10%",
  },

  itemsText: {
    fontFamily: "Avenir",
    fontWeight: "400",
    fontSize: 12,
  },

  initialText: {
    fontFamily: "DMSans_700Bold",
    fontWeight: "700",
    fontSize: 18,
  },

  tranxContainer: {
    marginTop: 17,
    height: 700,
  },

  tranxbar: {
    marginLeft: "5%",
    marginBottom: 17,
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
