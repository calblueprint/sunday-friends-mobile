import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Keyboard, FlatList, ActivityIndicator, Pressable, TouchableWithoutFeedback, TextInput } from 'react-native';
import SvgIcon from '../../../assets/SvgIcon';
import styles from './styles';
import globalStyles from '../../globalStyles';
import TransactionPreview from './TransactionPreview/TransactionPreview';
import RBSheet from "react-native-raw-bottom-sheet";

const TransactionsGroup = () => {
    const refRBSheet = useRef();
    const [selection, setSelection] = useState(1);

    const [searchClicked, setSearchClicked] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [searchEntered, setSearchEntered] = useState(false);
    const [transactions, setTransactions] = useState([] as any);

    const [dateFilter, setDateFilter] = useState(1);
    const [typeFilter, setTypeFilter] = useState(1);
    const [minAmount, setMinAmount] = useState(null as any);
    const [maxAmount, setMaxAmount] = useState(null as any);

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

    const handleReset = () => {
        //todo search transactions
        setDateFilter(1);
        setMinAmount(null);
        setMaxAmount(null);
        setTypeFilter(1);
    }

    const handleApply = () => {
        //todo connect to backend
        refRBSheet.current.close()
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
                                    handleSearch();
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
                    <Pressable style={styles.filtersButton} onPress={() => refRBSheet.current.open()}> 
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

                {/* Filters Modal  */}
                <RBSheet
                    ref={refRBSheet}
                    closeOnDragDown={true}
                    closeOnPressMask={true}
                    height={761}
                >
                    <Pressable style={styles.modalIconContainer} onPress={() => refRBSheet.current.close()}>
                        <SvgIcon type="modal_close" />
                    </Pressable>
                    <View style={styles.innerModal}>
                        <View style={styles.filtersContainer}>
                            <Text style={styles.modalTitle}>Filter Transactions</Text>
                            <View style={styles.filterGroup}>
                                <Text style={[styles.filterBtnText, {marginBottom: 5}]}>Filter by date</Text>
                                <View style={styles.filterButtonGroup}>
                                    <Pressable style={[styles.filterBtn, dateFilter === 1 ? { borderColor: '#A9A9A9' } : {borderColor: '#F7F7F7'}]} onPress={() => setDateFilter(1)}>
                                        <Text style={[styles.filterBtnText, dateFilter === 1 ? { color: '#525454' } : {color: '#A9A9A9'}]}>Anytime</Text>
                                    </Pressable>
                                    <Pressable style={[styles.filterBtn, dateFilter === 2 ? { borderColor: '#A9A9A9' } : {borderColor: '#F7F7F7'}]} onPress={() => setDateFilter(2)}>
                                        <Text style={[styles.filterBtnText, dateFilter === 2 ? { color: '#525454' } : {color: '#A9A9A9'}]}>This week</Text>
                                    </Pressable>
                                    <Pressable style={[styles.filterBtn, dateFilter === 3 ? { borderColor: '#A9A9A9' } : {borderColor: '#F7F7F7'}]} onPress={() => setDateFilter(3)}>
                                        <Text style={[styles.filterBtnText, dateFilter === 3 ? { color: '#525454' } : {color: '#A9A9A9'}]}>Past 30 days</Text>
                                    </Pressable>
                                    <Pressable style={[styles.filterBtn, dateFilter === 4 ? { borderColor: '#A9A9A9' } : {borderColor: '#F7F7F7'}]} onPress={() => setDateFilter(4)}>
                                        <Text style={[styles.filterBtnText, dateFilter === 4 ? { color: '#525454' } : {color: '#A9A9A9'}]}>Past 6 months</Text>
                                    </Pressable>
                                </View>
                            </View>
                            <View style={styles.filterGroup}>
                                <Text style={[styles.filterBtnText, {marginBottom: 5}]}>Filter by amount</Text>
                                <View style={styles.amountsContainer}>
                                    <TextInput
                                        style={styles.amountInput}
                                        onChangeText={text => setMinAmount(text)}
                                        value={minAmount}
                                        placeholder="Amount"
                                        placeholderTextColor={'#A9A9A9'}
                                        keyboardType="numeric"
                                        returnKeyType="done"
                                    />
                                    <Text style={styles.to}>to</Text>
                                    <TextInput
                                        style={styles.amountInput}
                                        onChangeText={text => setMaxAmount(text)}
                                        value={maxAmount}
                                        placeholder="Amount"
                                        placeholderTextColor={'#A9A9A9'}
                                        keyboardType="numeric"
                                        returnKeyType="done"
                                    />
                                </View>
                            </View>
                            <View style={styles.filterGroup}>
                                <Text style={[styles.filterBtnText, {marginBottom: 5}]}>Filter by transaction type</Text>
                                <Pressable style={[styles.filterBtn, typeFilter === 1 ? { borderColor: '#A9A9A9' } : {borderColor: '#F7F7F7'}]} onPress={() => setTypeFilter(1)}>
                                    <Text style={[styles.filterBtnText, typeFilter === 1 ? { color: '#525454' } : {color: '#A9A9A9'}]}>Any transaction</Text>
                                </Pressable>
                                <Pressable style={[styles.filterBtn, typeFilter === 2 ? { borderColor: '#A9A9A9' } : {borderColor: '#F7F7F7'}]} onPress={() => setTypeFilter(2)}>
                                    <Text style={[styles.filterBtnText, typeFilter === 2 ? { color: '#525454' } : {color: '#A9A9A9'}]}>Earnings</Text>
                                </Pressable>
                                <Pressable style={[styles.filterBtn, typeFilter === 3 ? { borderColor: '#A9A9A9' } : {borderColor: '#F7F7F7'}]} onPress={() => setTypeFilter(3)}>
                                    <Text style={[styles.filterBtnText, typeFilter === 3 ? { color: '#525454' } : {color: '#A9A9A9'}]}>Expirations</Text>
                                </Pressable>
                            </View>
                        </View>
                        <View style={styles.resetApplyContainer}>
                            <Pressable style={styles.resetApplyButton} onPress={handleReset}> 
                                <Text style={globalStyles.overline1}>Reset</Text>
                            </Pressable>
                            <Pressable style={[styles.resetApplyButton, {backgroundColor: "#C4C4C4"}]} onPress={handleApply}> 
                                <Text style={globalStyles.overline1}>Apply</Text>
                            </Pressable>
                        </View>
                    </View>
                </RBSheet>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default TransactionsGroup