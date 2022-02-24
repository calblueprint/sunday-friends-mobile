import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Keyboard, Button, ActivityIndicator } from 'react-native';
import { Searchbar } from 'react-native-paper';

const TransactionsHeader = () => {
    const [selection, setSelection] = useState(1);

    const [searchText, setSearchText] = useState("");
    // const [searchClicked, setSearchClicked] = useState(false);
    const [transactions, setTransactions] = useState();

    //Use effect later to get transaction data

    return (
        <View style={styles.container}>
            <View style={styles.btnGroup}>
                <TouchableOpacity style={[styles.btn, selection === 1 ? { backgroundColor: "#6B7280" } : null]} onPress={() => setSelection(1)}>
                    <Text style={[styles.btnText, selection === 1 ? { color: "white" } : null]}>All History</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, selection === 2 ? { backgroundColor: "#6B7280" } : null]} onPress={() => setSelection(2)}>
                    <Text style={[styles.btnText, selection === 2 ? { color: "white" } : null]}>Expenses</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.btn, selection === 3 ? { backgroundColor: "#6B7280" } : null]} onPress={() => setSelection(3)}>
                    <Text style={[styles.btnText, selection === 3 ? { color: "white" } : null]}>Earnings</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.searchFilterContainer}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={query => setSearchText(query)}
                    value={searchText}
                    style={styles.searchbar}
                />
                <Button title="Filters (0)" color='#6B7280'/>
            </View>

            

            {!transactions ? (
                <ActivityIndicator size="large"/>
            ) : (
                <Text>Transaction list</Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btnGroup: {
        flexDirection: 'row',
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: '#6B7280',
        width: "100%"
    },
    btn: {
        flex: 1,
        // borderRightWidth: 0.25,
        // borderLeftWidth: 0.25,
        borderColor: '#6B7280'
    },
    btnText: {
        textAlign: 'center',
        paddingVertical: 16,
        fontSize: 14
    },
    searchFilterContainer: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },
    searchbar: {
        // margin: 15,
        width: "70%"
    },
    // filterButton: {
    //     marginLeft: 15,
    //     width: "30%",
    //     height: "100%"
    // }
});

export default TransactionsHeader