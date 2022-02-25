import { StyleSheet } from "react-native";

export default StyleSheet.create({
    profile: {
        position: "absolute",
        width: 122,
        height: 31,
        top: 197,
        textAlign: "center",
        //fontFamily: "DM Sans", dont have dm sans need to import?
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 24,
        lineHeight: 31,

        color: "#525454",
    },
    profileImage: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        padding: 5.5,

        position:"absolute",
        top: 75,
        alignContent: "center",
    },
    editButton: {
        backgroundColor: "#F2F2F2"
    },
    buttonLayout: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",

        position: "absolute",
        top: 245,
    },
    button: {

    },
    fields: {
        fontFamily: "Avenir",
        fontSize: 14,
        fontWeight: "900",
        lineHeight: 19,
        textTransform: "uppercase",
        color: "#525454",
    },
    values: {
        height: 19,
        fontFamily: "Avenir",
        fontSize: 14,
        lineHeight: 19,
        color: "#525454",
    },
    profileInformation: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
    },
    profileFields: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "space-between",
    },
    profileValues: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
    },
})