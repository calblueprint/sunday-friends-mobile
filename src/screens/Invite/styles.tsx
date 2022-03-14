import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    alignItems: "center",
  },

  scrollContainer: {
    backgroundColor: "#FAFAFA",
    alignContent: "center",
    width: "100%",
    height: "65%",
  },

  title1: {
    fontFamily: "DMSans_500Medium",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    width: "80%",
    marginTop: "20%",
  },

  title2: {
    fontFamily: "DMSans_700Bold",
    fontSize: 34,
    fontWeight: "700",
    textAlign: "left",
    width: "80%",
    marginVertical: "2%",
  },

  modalContainer: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  innerContainer: {
    width: "80%",
  },

  rectangularButton: {
    backgroundColor: "#253C85",
    width: "80%",
    height: "7%",
    justifyContent: "center",
    borderRadius: 5,
  },

  rectangularButtonText: {
    fontFamily: "Avenir",
    fontWeight: "900",
    fontSize: 14,
    textTransform: "uppercase",
    alignSelf: "center",
    color: "#FFF",
  },

  modalText: {
    fontFamily: "Avenir",
    fontWeight: "800",
    fontSize: 12,
    textTransform: "uppercase",
    textAlign: "left",
    color: "#525454",
    marginVertical: "3%",
    width: "80%",
  },

  modalTitle: {
    fontFamily: "DMSans_700Bold",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    color: "#272929",
    marginTop: "2%",
    marginBottom: "5%",
  },

  input: {
    backgroundColor: "#EBEBEB",
    width: "80%",
    height: "7%",
    justifyContent: "center",
    marginBottom: "5%",
  },

  backgroundContainer: {
    backgroundColor: "#F6F6F6",
    width: "100%",
    marginBottom: "6%",
    height: 70,
    justifyContent: "center",
  },

  addContainer: {
    flexDirection: "row",
    width: "80%",
    alignSelf: "center",
  },

  addCircle: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  add: {
    color: "#C4C4C4",
    fontSize: 50,
    fontWeight: "200",
    alignSelf: "center",
    textAlign: "center",
    bottom: "11%",
    left: "2%",
  },

  addInnerContainer: {
    alignSelf: "center",
    marginLeft: "4.5%",
  },

  rowContainer: {
    flexDirection: "row",
  },

  nameText: {
    fontFamily: "Avenir",
    fontWeight: "800",
    fontSize: 14,
  },

  separator: {
    marginBottom: "17%",
    height: 1,
    width: "100%",
    backgroundColor: "#FAFAFA",
  },
});
