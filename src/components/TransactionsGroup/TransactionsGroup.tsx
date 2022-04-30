import React, { useState, useEffect, useRef, useContext } from 'react';
import { View, Text, TouchableOpacity, Keyboard, FlatList, ActivityIndicator, Pressable, TouchableWithoutFeedback, TextInput } from 'react-native';
import SvgIcon from '../../../assets/SvgIcon';
import styles from './styles';
import globalStyles from '../../globalStyles';
import TransactionPreview from './TransactionPreview/TransactionPreview';
import TransactionPreviewNoIcon from './TransactionPreviewNoIcon/TransactionPreviewNoIcon';
import RBSheet from "react-native-raw-bottom-sheet";
import DetailsModal from './DetailsModal/DetailsModal';
import FiltersModal from "./FiltersModal/FiltersModal";
import { getTransactionByUser } from "../../firebase/firestore/transaction";
import { getUser } from "../../firebase/firestore/user";
import { getFamilyById } from "../../firebase/firestore/family";
import { AuthenticatedUserContext } from '../../context/userContext';

const TransactionsGroup = ({ forFamily }: any) => {
    //const userId = useContext(userContext);
    const { userUID, setUserUID } = useContext(AuthenticatedUserContext);

    const refRBSheet = useRef();
    const [selection, setSelection] = useState(1);

    const [searchClicked, setSearchClicked] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [searchEntered, setSearchEntered] = useState(false);
    const [transactions, setTransactions] = useState([] as any);
    const [enteredSearch, setEnteredSearch] = useState("");

    const [minDate, setMinDate] = useState(null);
    const [showMin, setShowMin] = useState(false);
    const [maxDate, setMaxDate] = useState(null);
    const [showMax, setShowMax] = useState(false);
    const [typeFilter, setTypeFilter] = useState(1);
    const [familyMembers, setFamilyMembers] = useState(["Any Member"]);
    const [memberSelect, setMemberSelect] = useState(["Any Member"]);

    const [filterMinDate, setFilterMinDate] = useState(null);
    const [filterMaxDate, setFilterMaxDate] = useState(null);
    const [filterMemberSelect, setFilterMemberSelect] = useState(["Any Member"])

    const [isLoading, setIsLoading] = useState(false);
    const [numFilters, setNumFilters] = useState(0);

    const [detailsModalVisible, setDetailsModalVisible] = useState(false);
    const [detailsTransaction, setDetailsTransaction] = useState(null);

    const fetchFamilyMembers = async () => {
        if (forFamily) {
            const newMembers = ["Any Member"]

            const user = await getUser(userUID)
            const family = await getFamilyById(user.family_id.toString())
            family.user_ids.forEach(async (user) => {
                newMembers.push(user.full_name)
            })

            setFamilyMembers(newMembers)
        }
    }

    // get family members for Filter by Family Member buttons
    useEffect(() => {
        console.log(userUID);

        fetchFamilyMembers().catch(console.error)
    }, [forFamily])

    const fetchTransactions = async () => {
        setIsLoading(true)
        const newTransactions = []
        let count = 0

        if (forFamily) {
            console.log("in loop")
            const user = await getUser(userUID)
            const family = await getFamilyById(user.family_id.toString())
            console.log(family, "family")
            family.user_ids.forEach(async (user) => {
                if (!user?.transactions) {
                    // continue
                } else {
                    const addRole = user.transactions.map((transaction) => {
                        return {...transaction, role: user.role}
                    })
                    newTransactions.push(...addRole)
                }
            })
        } else {
            const fetchedTransactions = await getTransactionByUser(userUID)
            newTransactions.push(...fetchedTransactions)
        }
        
        if (enteredSearch) {
            const filteredTransactions = newTransactions.filter((transaction) => {
                return transaction.description.toLowerCase().match(searchText.toLowerCase())
            })
            newTransactions.splice(0, newTransactions.length, ...filteredTransactions);
        }
        if (selection === 2) {
            const filteredTransactions = newTransactions.filter((transaction) => {
                return transaction.point_gain > 0
            })
            newTransactions.splice(0, newTransactions.length, ...filteredTransactions);
            count += 1
        } else if (selection === 3) {
            const filteredTransactions = newTransactions.filter((transaction) => {
                return transaction.point_gain <= 0
            })
            newTransactions.splice(0, newTransactions.length, ...filteredTransactions);
            count += 1
        }
        if (filterMinDate) {
            const filteredTransactions = newTransactions.filter((transaction) => {
                const toDate = new Date(transaction.date)
                return toDate >= filterMinDate
            })
            newTransactions.splice(0, newTransactions.length, ...filteredTransactions);
        }
        if (filterMaxDate) {
            const filteredTransactions = newTransactions.filter((transaction) => {
                const toDate = new Date(transaction.date)
                return toDate <= filterMaxDate
            })
            newTransactions.splice(0, newTransactions.length, ...filteredTransactions);
        }
        if (filterMinDate || filterMaxDate) {
            count += 1
        }
        if (!forFamily || filterMemberSelect.includes("Any Member")) {
            // don't filter
        } else {
            const filteredTransactions = newTransactions.filter((transaction) => {
                return filterMemberSelect.includes(transaction.user_name)
            })
            newTransactions.splice(0, newTransactions.length, ...filteredTransactions);
            count += 1
        }

        setNumFilters(count)
        newTransactions.sort((a, b) => {
            const aDate = new Date(a.date)
            const bDate = new Date(b.date)
            return (bDate.getTime() - aDate.getTime())
        })
        setTransactions(newTransactions)
        setIsLoading(false)
        console.log(newTransactions)
    }

    //get and filter transaction data
    useEffect(() => {
        fetchTransactions().catch(console.error)
        //dummy for now. later: if forFamily, set transactions by passing in family_id. otherwise, pass in user_id
        // setTransactions([
        //     {
        //         username: "dummy",
        //         date: "Oct 21",
        //         description: "test overlap asdfsajl;fdk a s l f j d s d a a a a a a a a a a a a a",
        //         pointGain: 107,
        //         role: "head",
        //         id: 0
        //     },
        //     {
        //         username: "dummy1",
        //         date: "Oct 21",
        //         description: "Volunteered at community BBBBBB",
        //         pointGain: -107,
        //         role: "child",
        //         id: 1
        //     },
        //     {
        //         username: "dummy2",
        //         date: "Oct 22",
        //         description: "test",
        //         pointGain: 108,
        //         role: "parent",
        //         id: 2
        //     },
        //     {
        //         username: "dummy2",
        //         date: "Oct 22",
        //         description: "test",
        //         pointGain: 108,
        //         role: "dependent",
        //         id: 3
        //     },
        // ])
    }, [selection, enteredSearch, filterMinDate, filterMaxDate, filterMemberSelect]);

    const handleSearch = () => {
        //todo search transactions
        setSearchEntered(true);
        setEnteredSearch(searchText)
    }

    const handleReset = () => {
        //todo search transactions
        setMinDate(null)
        setMaxDate(null)
        setMemberSelect(["Any Member"])
        setTypeFilter(1);
    }

    const handleApply = () => {
        //todo connect to backend
        setSelection(typeFilter)
        setFilterMinDate(minDate)
        setFilterMaxDate(maxDate)
        setFilterMemberSelect(memberSelect)

        refRBSheet.current.close()
    }

    return (
        //Line below allows searchbar to dismiss keyboard when clicked away
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}> 
            <View style={styles.container}>
                <View style={styles.btnGroup}>
                    <Pressable style={[styles.btn, selection === 1 ? styles.selectedBtn : styles.unselectedBtn]} 
                        onPress={() => {
                            setSelection(1)
                            setTypeFilter(1)
                        }}>
                        <Text style={[styles.btnText, selection === 1 ? { color: '#6B7280' } : {color: '#A9A9A9'}]}>All History</Text>
                    </Pressable>
                    <Pressable style={[styles.btn, selection === 2 ? styles.selectedBtn : styles.unselectedBtn]} 
                        onPress={() => {
                            setSelection(2)
                            setTypeFilter(2)
                        }}>
                        <Text style={[styles.btnText, selection === 2 ? { color: '#6B7280' } : {color: '#A9A9A9'}]}>Earnings</Text>
                    </Pressable>
                    <Pressable style={[styles.btn, selection === 3 ? styles.selectedBtn : styles.unselectedBtn]} 
                        onPress={() => {
                            setSelection(3)
                            setTypeFilter(3)
                        }}>
                        <Text style={[styles.btnText, selection === 3 ? { color: '#6B7280' } : {color: '#A9A9A9'}]}>Expirations</Text>
                    </Pressable>
                </View>

                <View style={styles.searchFilterContainer}>
                    <View style={[styles.searchbar, searchClicked && { borderColor: "#7F93D1" }, searchEntered ? {backgroundColor: '#E6ECFE'} : {backgroundColor: 'white'}]}>
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
                                  setEnteredSearch("");
                                    setSearchEntered(false);
                                    setSearchClicked(false);
                                }}>
                                    <SvgIcon type="searchbar_close" />
                                </Pressable>
                            )}
                        </View>
                    </View>
                    <Pressable style={styles.filtersButton} onPress={() => refRBSheet.current.open()}> 
                        <Text style={styles.filtersButtonText}>Filters ({numFilters})</Text>
                    </Pressable>
                    
                </View>

                {isLoading ? (
                    <ActivityIndicator size="large"/>
                ) : (
                    (transactions.length === 0) ? (
                        <Text style={{textAlign: "center"}}>No transactions found</Text>
                        // <ActivityIndicator size="large"/>
                    ) : (
                        <FlatList
                            contentContainerStyle = {{ paddingBottom: 30 }}
                            data={transactions}
                            keyExtractor={item => (item.date, item.description)}
                            renderItem={(forFamily) ? (
                                ( {item} ) => (
                                    <Pressable onPress={() => {
                                        setDetailsModalVisible(true);
                                        setDetailsTransaction(item);
                                    }}>
                                        <TransactionPreview transaction={item}/>
                                    </Pressable>
                                )) : (
                                ( {item} ) => (
                                    <Pressable onPress={() => {
                                        setDetailsModalVisible(true);
                                        setDetailsTransaction(item);
                                    }}>
                                        <TransactionPreviewNoIcon transaction={item}/>
                                    </Pressable>
                                ))
                            }
                        />
                        
                    )
                )}
                {detailsTransaction && (
                    <DetailsModal
                        visible={detailsModalVisible}
                        setVisible={setDetailsModalVisible}
                        transaction={detailsTransaction}
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
                        maxDate={maxDate} setMaxDate={setMaxDate} showMax={showMax} setShowMax={setShowMax}
                        familyMembers={familyMembers} memberSelect={memberSelect} setMemberSelect={setMemberSelect}
                        typeFilter={typeFilter} setTypeFilter={setTypeFilter} handleApply={handleApply} handleReset={handleReset} forFamily={forFamily}
                    />
                </RBSheet>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default TransactionsGroup