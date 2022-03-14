import { StyleSheet } from "react-native";

export default StyleSheet.create({
  logoutModal: {
    position: "absolute",
    top: "27.9%",
    left: "3.7%",
    width: "92.5%",
    height: "17.2%",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
  },
  logoutPressableModal: {
    position: "absolute",
    width: "91.9%",
    height: "33.5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: "14%",
    left: "3.7%",
    backgroundColor: "#253C85",
    borderRadius: 5,
  },
  cancelLogoutPressable: {
    position: "absolute",
    width: "91.9%",
    height: "33.5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bottom: "14%",
    left: "3.7%",
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#526DC2",
  },
  overline1WHITE: {
    fontFamily: "Avenir",
    fontWeight: "900",
    fontSize: 14,
    textTransform: "uppercase",
    textAlign: "left",
    color: "#FFFFFF",
  },
});