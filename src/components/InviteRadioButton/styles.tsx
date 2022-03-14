import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "80%",
        height: "20%",
        marginBottom: "13%",
        justifyContent: "space-between",
      },
  
      selected: {
        width: "30%",
        backgroundColor:
          "linear-gradient(0deg, rgba(230, 236, 254, 0.4), rgba(230, 236, 254, 0.4)), #FFFFFF",
        borderWidth: 2,
        borderColor: "#7F93D1",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
      },
  
      unselected: {
        width: "30%",
        backgroundColor: "#FFFFFF",
        borderWidth: 2,
        borderColor: "#F2F2F2",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
      },
  
      parent: {
        width: 50,
        height: 50,
        resizeMode: "contain",
      },
  
      imageContainer: {
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
      },
  
      child: {
        width: 40,
        height: 40,
        resizeMode: "contain",
      },
  
      dependent: {
        width: 28,
        height: 28,
        resizeMode: "contain",
      },
  
      statusText: {
        fontFamily: "Avenir",
        fontSize: 14,
        fontWeight: "400",
        color: "#525454",
        marginTop: "10%",
      },
    });