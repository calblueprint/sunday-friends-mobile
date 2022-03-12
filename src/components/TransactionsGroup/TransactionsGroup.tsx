import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Keyboard, FlatList, ActivityIndicator, Pressable, TouchableWithoutFeedback, TextInput } from 'react-native';
import SvgIcon from '../../../assets/SvgIcon';
import styles from './styles';
import globalStyles from '../../globalStyles';
import TransactionPreview from './TransactionPreview/TransactionPreview';
import RBSheet from "react-native-raw-bottom-sheet";
import FiltersModal from "./FiltersModal/FiltersModal";

const TransactionsGroup = () => {
    const refRBSheet = useRef();
    const [selection, setSelection] = useState(1);

    const [searchClicked, setSearchClicked] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [searchEntered, setSearchEntered] = useState(false);
    const [transactions, setTransactions] = useState([] as any);

    // const [dateFilter, setDateFilter] = useState(1);
    const [minDate, setMinDate] = useState(new Date(1598051730000));
    const [showMin, setShowMin] = useState(false);
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
        // setDateFilter(1);
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
                                placeholder="Search transaction"
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
                    customStyles={{
                        container: {
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                        }
                    }}
                >
                    <FiltersModal refRBSheet={refRBSheet} minDate={minDate} setMinDate={setMinDate} showMin={showMin} setShowMin={setShowMin}
                        minAmount={minAmount} setMinAmount={setMinAmount} maxAmount={maxAmount} setMaxAmount={setMaxAmount}
                        typeFilter={typeFilter} setTypeFilter={setTypeFilter} handleApply={handleApply} handleReset={handleReset}
                    />
                </RBSheet>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default TransactionsGroup