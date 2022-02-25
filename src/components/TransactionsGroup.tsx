import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Keyboard, Button, ActivityIndicator, Pressable, TouchableWithoutFeedback } from 'react-native';
import { Searchbar } from 'react-native-paper';

const TransactionsGroup = () => {
    const [selection, setSelection] = useState(1);

    const [searchText, setSearchText] = useState("");
    const [searchEntered, setSearchEntered] = useState(false);
    const [transactions, setTransactions] = useState();

    //Use effect later to get transaction data

    const handleSearch = () => {
        //todo search transactions
        console.log(searchText);
        setSearchEntered(true);
    }

    return (
        //Line below allows searchbar to dismiss keyboard when clicked away
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> 
            <View style={styles.container}>
                <View style={styles.btnGroup}>
                    <Pressable style={[styles.btn, selection === 1 ? styles.selectedBtn : styles.unselectedBtn]} onPress={() => setSelection(1)}>
                        <Text style={[styles.btnText, selection === 1 ? { color: '#6B7280' } : {color: '#A9A9A9'}]}>All History</Text>
                    </Pressable>
                    <Pressable style={[styles.btn, selection === 2 ? styles.selectedBtn : styles.unselectedBtn]} onPress={() => setSelection(2)}>
                        <Text style={[styles.btnText, selection === 2 ? { color: '#6B7280' } : {color: '#A9A9A9'}]}>Expenses</Text>
                    </Pressable>
                    <Pressable style={[styles.btn, selection === 3 ? styles.selectedBtn : styles.unselectedBtn]} onPress={() => setSelection(3)}>
                        <Text style={[styles.btnText, selection === 3 ? { color: '#6B7280' } : {color: '#A9A9A9'}]}>Earnings</Text>
                    </Pressable>
                </View>

                <View style={styles.searchFilterContainer}>
                    <Searchbar
                        placeholder="Search by..."
                        onChangeText={query => setSearchText(query)}
                        onSubmitEditing={handleSearch}
                        onFocus={() => setSearchEntered(false)}
                        value={searchText}
                        style={[styles.searchbar, searchEntered ? {backgroundColor: '#E6ECFE'} : {backgroundColor: 'white'}]}
                    />
                    <TouchableOpacity style={styles.filtersButton}> 
                        <Text style={styles.filtersButtonText}>Filters (0)</Text>
                    </TouchableOpacity>
                </View>

                

                {!transactions ? (
                    <ActivityIndicator size="large"/>
                ) : (
                    <Text>Transaction list</Text>
                )}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
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
        fontSize: 14
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
        fontSize: 14
    }
});

export default TransactionsGroup