import { StyleSheet } from "react-native";

export default StyleSheet.create({
  switchProfileModalView: {
    position: "absolute",
    width: "92.5%",
    height: "40%",
    top: "23%",
    left: "4%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#F2F2F2",
  },
  switchModalX: {
    display: "flex",
    position: "absolute",
    top: "5%",
    right: "5%",
  },
  itemSeparator: {
    height: "0%",
    width: "74%",
    borderStyle: "solid",
    borderColor: "#F2F2F2",
    borderWidth: 1,
    left: "21.9%",
  },
  lastItemSeparator: {
    height: "0%",
    width: "74%",
    borderStyle: "solid",
    borderColor: "#F2F2F2",
    borderWidth: 1,
    left: "21.9%",
    position: "relative",
    top: "-90%", //hard fix for last separator but try better way
  },
  switchTitle: {
    position: "absolute",
    left: "17%",
    top: "5%",
    textAlign: "center",
    width: "64%",
  },
  flatList: {
    position: "absolute",
    top: 63,
    width: "100%",
    height: "84%",
  },
  flatListImagePressable: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: "4%",
    width: 42,
    height: 42,
  },
  flatlistName: {
    display: "flex",
    left: "21.9%",
  },
  addMember: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 18,
  },
});
