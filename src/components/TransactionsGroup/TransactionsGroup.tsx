import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Keyboard, FlatList, ActivityIndicator, Pressable, TouchableWithoutFeedback, TextInput } from 'react-native';
import SvgIcon from '../../../assets/SvgIcon';
import styles from './styles';
import TransactionPreview from './TransactionPreview/TransactionPreview';

const TransactionsGroup = () => {
    const [selection, setSelection] = useState(1);

    const [searchClicked, setSearchClicked] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [searchEntered, setSearchEntered] = useState(false);
    const [transactions, setTransactions] = useState([] as any);

    //Use effect later to get transaction data
    useEffect(() => {
        //dummy for now
        setTransactions([
            {
                username: "dummy",
                date: "Oct 21",
                description: "test overlap asdfsajl;fdk a s l f j d s d a a a a a a a a a a a a a",
                pointGain: 107,
                role: "head",
                id: 0
            },
            {
                username: "dummy1",
                date: "Oct 21",
                description: "Volunteered at community BBBBBB",
                pointGain: -107,
                role: "head",
                id: 1
            },
            {
                username: "dummy2",
                date: "Oct 22",
                description: "test",
                pointGain: 108,
                role: "parent",
                id: 2
            },
        ])
    }, []);

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
                    <View style={[styles.searchbar, searchEntered ? {backgroundColor: '#E6ECFE'} : {backgroundColor: 'white'}]}>
                        <View style={styles.innerSearchbar}>
                            <View style={{paddingRight: 10}}>
                                <SvgIcon type="searchbar_search"/>
                            </View>
                            <TextInput
                                style={styles.searchText}
                                placeholder="Search by..."
                                placeholderTextColor={"#525454"}
                                value={searchText}
                                onChangeText={setSearchText}
                                onFocus={() => {
                                    setSearchClicked(true);
                                }}
                                onSubmitEditing={() => {
                                    setSearchEntered(true);
                                }}
                            />
                            {(searchText !== "") && (
                                <Pressable onPress={() => {
                                    setSearchText("");
                                    setSearchEntered(false);
                                }}>
                                    <SvgIcon type="searchbar_close" />
                                </Pressable>
                            )}
                        </View>
                    </View>
                    <Pressable style={styles.filtersButton}> 
                        <Text style={styles.filtersButtonText}>Filters (0)</Text>
                    </Pressable>
                    
                </View>

                {(transactions.length === 0) ? (
                    <ActivityIndicator size="large"/>
                ) : (
                    <FlatList
                        data={transactions}
                        keyExtractor={item => item.id}
                        renderItem={( {item} ) => (
                            <TransactionPreview transaction={item}/>
                        )}
                    />
                )}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default TransactionsGroup