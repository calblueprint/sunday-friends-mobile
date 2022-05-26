import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "#FAFAFA",
        width: "100%",
        //   height: "66px",
        justifyContent: "center",
        alignItems: "flex-start",
        marginTop: 1,
        marginBottom: 1,
        paddingVertical: 12,
        paddingHorizontal: 20
    },
    rdca: {
        display: 'flex',
        // flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 0,
        // marginVertical: 10
    },
    frame117: {
        display: "flex",
        width: "75%",
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 0,
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
    textGroup: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 0,
        width: "80%",
        marginLeft: 20
    },
    description: {
        color: "#525454",
        fontFamily: "Avenir",
        fontStyle: "normal",
        fontWeight: "800",
        fontSize: 14,
        lineHeight: 16,
        marginVertical: 2,
    },
    nameDate: {
        color: "#525454",
        fontFamily: "Avenir",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 13,
        lineHeight: 16,
        marginVertical: 2
    },
    points: {
        // marginRight: 25,
        fontFamily: "DM_Mono",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 21,
        width: "20%",
        textAlign: "center"
    },
    icon: {
        display: "flex",
        justifyContent: "flex-end"
    }
})
