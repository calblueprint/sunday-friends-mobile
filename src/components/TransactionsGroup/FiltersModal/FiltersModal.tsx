import React from 'react'
import { Pressable, Text, View, TextInput } from 'react-native';
import styles from './styles';
import globalStyles from '../../../globalStyles';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const FiltersModal = ({ refRBSheet, minDate, setMinDate, showMin, setShowMin, minAmount, 
    setMinAmount, maxAmount, setMaxAmount, typeFilter, setTypeFilter, handleReset, handleApply }: any) => {
  return (
    <>
        <Pressable style={styles.modalIconContainer} onPress={() => refRBSheet.current.close()}>
            <Text style={styles.closeText}>Close</Text>
        </Pressable>
        <Text style={styles.modalTitle}>Filter Transactions</Text>
        <View style={styles.innerModal}>
            <View style={styles.filtersContainer}>
                <View style={styles.filterGroup}>
                    <Text style={[styles.filterBtnText, {marginBottom: 5}]}>Filter by date</Text>
                    <View style={styles.amountsContainer}>
                        <Pressable onPress={() => setShowMin(true)} style={{width: "45%"}}>
                            <TextInput
                                editable={false}
                                style={[styles.amountInput, {width: "100%"}]}
                                value={minDate.toLocaleString()}
                                placeholder="MM/DD/YYYY"
                                placeholderTextColor={'#A9A9A9'}
                            />
                        </Pressable>
                        <Text style={styles.to}>to</Text>
                        <TextInput
                            style={styles.amountInput}
                            placeholder="Amount"
                            placeholderTextColor={'#A9A9A9'}
                            keyboardType="numeric"
                            returnKeyType="done"
                        />
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
                    <Pressable style={[styles.filterBtn, typeFilter === 1 ? { borderColor: '#7F93D1' } : {borderColor: '#F7F7F7'}]} onPress={() => setTypeFilter(1)}>
                        <Text style={[styles.filterBtnText, typeFilter === 1 ? { color: '#525454' } : {color: '#A9A9A9'}]}>Any transaction</Text>
                    </Pressable>
                    <Pressable style={[styles.filterBtn, typeFilter === 2 ? { borderColor: '#7F93D1' } : {borderColor: '#F7F7F7'}]} onPress={() => setTypeFilter(2)}>
                        <Text style={[styles.filterBtnText, typeFilter === 2 ? { color: '#525454' } : {color: '#A9A9A9'}]}>Earnings</Text>
                    </Pressable>
                    <Pressable style={[styles.filterBtn, typeFilter === 3 ? { borderColor: '#7F93D1' } : {borderColor: '#F7F7F7'}]} onPress={() => setTypeFilter(3)}>
                        <Text style={[styles.filterBtnText, typeFilter === 3 ? { color: '#525454' } : {color: '#A9A9A9'}]}>Expirations</Text>
                    </Pressable>
                </View>
            </View>
        </View>
        <View style={styles.resetApplyContainer}>
                <Pressable style={styles.resetApplyButton} onPress={handleReset}> 
                    <Text style={[globalStyles.overline1, {color: "#272929"}]}>Reset</Text>
                </Pressable>
                <Pressable style={[styles.resetApplyButton, {backgroundColor: "#253C85", borderColor: "#253C85"}]} onPress={handleApply}> 
                    <Text style={[globalStyles.overline1, {color: "#FFFFFF"}]}>Apply</Text>
                </Pressable>
        </View>
        <DateTimePickerModal
            isVisible={showMin}
            mode="date"
            is24Hour={true}
            onConfirm={(date) => {
                setShowMin(false)
                setMinDate(date)
            }}
            onCancel={() => setShowMin(false)}
        />
    </>
  )
}

export default FiltersModal