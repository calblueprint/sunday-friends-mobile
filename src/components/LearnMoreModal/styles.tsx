import { StyleSheet } from "react-native";

export default StyleSheet.create({
    modalIconContainer: {
        position: "absolute",
        top: 0,
        right: 0,
        padding: 14
      },
    closeText: {
        fontFamily: "Avenir",
        fontSize: 14,
        fontWeight: "400",
        textAlign: "center",
        color: "#526DC2",
    },
    modalContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
    },
    titleText: {
        width: '60%',
        color: 'black',
        textAlign: 'center',
    },
    rowContainer: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 30,
    },
    leftColumn: {
        width: '50%',
        flexDirection: 'column',
        alignItems: 'center',
    },
    rightColumn: {
        width: '50%',
        flexDirection: 'column',
        paddingRight: '5%'
    },
    subHeader: {
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: 14,
        lineHeight: 19,
    },
    contentText: {
        marginTop: 10,
        fontFamily: 'Avenir',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 16,
    },
});