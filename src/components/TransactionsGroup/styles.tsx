import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: "#E3E3E3" //delete later, used now for styling
    },
    btnGroup: {
        flexDirection: 'row',
        alignItems: "center",
        width: "100%"
    },
    btn: {
        width: '33.3333%',
    },
    selectedBtn: {
        borderBottomWidth: 2,
        borderColor: '#6B7280'
    },
    unselectedBtn: {
        borderColor: '#253C85'
    },
    btnText: {
        textAlign: 'center',
        paddingVertical: 16,
        fontSize: 14,

    },
    searchFilterContainer: {
        padding: '5.26%', //15
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%"
    },
    searchbar: {
        width: "70%",
        marginRight: 16,

        borderColor: '#A9A9A9',
        borderWidth: 1.2,
        borderRadius: 8,
        shadowOpacity: 0,
    },
    filtersButton: {
        flex: 1,
        backgroundColor: '#A9A9A9',
        borderRadius: 6,
    },
    filtersButtonText: {
        color: '#F2F2F2',
        textAlign: 'center',
        paddingVertical: 16,
        fontSize: 14,
        fontFamily: "Avenir",
        fontWeight: "800"
    }
})