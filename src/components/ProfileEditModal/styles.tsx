import { StyleSheet } from "react-native";

export default StyleSheet.create({
  modalView: {
    position: "absolute",
    height: "93.9%",
    width: "100%",
    top: "6%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
  },
  topGreyLine: {
    position: "absolute",
    width: "13.6%",
    height: 3,
    borderRadius: 12,
    backgroundColor: "#C4C4C4",
    top: "1.6%",
    left: "43.2%",
  },
  exitPressable: {
    position: "absolute",
    top: "3.2%",
    right: "8.9%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    width: 20,
    height: 20,
  },
  title: {
    textAlign: "center",
    position: "absolute",
    top: "8.7%",
    left: "38.6%",
    width: 94,
  },
  profileImage: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    width: "100%",
    top: "14.6%",
    height: "17.6%",
  },
  profileImagePressable: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "14%",
    width: 140,
    height: 130,
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#F2F2F2",
    borderWidth: 2,
  },
  fields: {
    display: "flex",
    justifyContent: "space-between",
    position: "absolute",
    left: "8.2%",
    top: "39%",
    height: "10%",
  },
  textNameInput: {
    position: "absolute",
    top: "37.8%",
    left: "29%",
    width: "61%",
    height: "4%",
    borderBottomColor: "#A9A9A9",
    borderBottomWidth: 2,
    fontSize: 16,
  },
  textRoleInput: {
    position: "absolute",
    bottom: "50%",
    left: "29%",
    width: "61%",
    height: "4%",
    borderBottomColor: "#A9A9A9",
    borderBottomWidth: 2,
    fontSize: 16,
  },
});
