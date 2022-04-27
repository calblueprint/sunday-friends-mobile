import { StyleSheet } from "react-native";

export default StyleSheet.create({
    mainView: {
        position: "absolute",
        width: "92.5%",
        // height: "40%",
        top: "23%",
        left: "4%",
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#F2F2F2",
        display: "flex",
        flexDirection: "column",
        padding: 20,
        alignItems: "center"
    },
    modalX: {
        display: "flex",
        position: "absolute",
        top: "5%",
        right: "5%",
    },
    top: {
        width: "80%",
        alignItems: "center"
    },
    description: {

    },
    centerAlign: {
        textAlign: "center"
    },
    line: {
        borderBottomColor: "#EBEBEB",
        borderBottomWidth: 1,
        marginTop: "5%",
        alignSelf: "stretch"
    },
    bottom: {
            
    },
    bottomEntry: {
        flexDirection: "row",
        marginTop: "5%"

    },
    smiley: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        padding: 3,
        resizeMode: "cover",
        width: 42,
        height: 42
    },
    points: {
        fontFamily: "DM_Mono",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 20,
        lineHeight: 26,
        textAlign: "center"
    },
    leftText: {
        color: "#272929",
        fontFamily: "Avenir",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 19,
        width: "40%"
    },
    boldText: {
        color: "#272929",
        fontFamily: "Avenir",
        fontStyle: "normal",
        fontWeight: "800",
        fontSize: 14,
        lineHeight: 19,
        width: "60%",
        textAlign: "right"
    }
});
