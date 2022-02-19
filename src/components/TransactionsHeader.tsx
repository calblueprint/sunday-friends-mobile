import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Keyboard, Button, ActivityIndicator } from 'react-native';
import { Feather, Entypo } from "@expo/vector-icons";

const TransactionsHeader = () => {
    const [selection, setSelection] = useState(1);

    const [searchText, setSearchText] = useState("");
    const [searchClicked, setSearchClicked] = useState(false);
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

            <View style={styles.searchContainer}>
                <View style={searchClicked ? styles.searchBar__clicked : styles.searchBar__unclicked}>
                    <Feather
                        name="search"
                        size={10}
                        color="black"
                        style={{ marginLeft: 1 }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Search"
                        value={searchText}
                        onChangeText={setSearchText}
                        onFocus={() => {
                            setSearchClicked(true);
                        }}
                    />
                    {searchClicked && (
                        <Entypo name="cross" size={10} color="black" style={{ padding: 1 }} onPress={() => {
                            setSearchText("");
                        }}/>
                    )}
                </View>
                {searchClicked && (
                    <View>
                        <Button
                            title="Cancel"
                            onPress={() => {
                                Keyboard.dismiss();
                                setSearchClicked(false);
                            }}
                        ></Button>
                    </View>
                )}
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

    searchContainer: {
        margin: 15,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "90%",
        
      },
      searchBar__unclicked: {
        padding: 10,
        flexDirection: "row",
        width: "95%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
      },
      searchBar__clicked: {
        padding: 10,
        flexDirection: "row",
        width: "80%",
        backgroundColor: "#d9dbda",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "space-evenly",
      },
      input: {
        fontSize: 20,
        marginLeft: 10,
        width: "90%",
      },
});

export default TransactionsHeader