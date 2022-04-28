import { StyleSheet } from "react-native";

export default StyleSheet.create({
  nameText: {
    fontFamily: "Avenir",
    fontWeight: "800",
    fontSize: 14,
  },

  container: {
    flexDirection: "row",
    width: "80%",
    marginVertical: "3%",
    marginHorizontal: "10%",
    justifyContent: "space-between",
  },

  head: {
    resizeMode: "contain",
    width: 50,
    height: 50,
    justifyContent: "center",
  },

  parent: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    justifyContent: "center",
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

  dependent: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },

  rowContainer: {
    flexDirection: "row",
  },

  innerContainer: {
    alignSelf: "center",
    width: "70%",
  },

  deleteContainer: {
    alignSelf: "center",
  },

  deleteSeparator: {
    width: 21,
  },

  separator3: {
    //marginTop: "10%",
    height: "25%",
    width: "100%",
    backgroundColor: "#FFFFFF",
  },

  rectangularButton: {
    backgroundColor: "#253C85",
    width: "80%",
    height: "6.5%",
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

  innerContainer2: {
    width: "80%",
  },

  input: {
    height: 40,
    width: "100%",
    marginBottom: "4%",
    marginTop: "2%",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});
