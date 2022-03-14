import React from 'react'
import { Pressable, Text, View, TextInput } from 'react-native';
import styles from './styles';
import globalStyles from '../../../globalStyles';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import SvgIcon from '../../../../assets/SvgIcon';


const FiltersModal = ({ refRBSheet, minDate, setMinDate, showMin, setShowMin, maxDate, setMaxDate, showMax, setShowMax, minAmount, 
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
                    <View style={styles.withClear}>
                        <Text style={styles.filterBtnText}>Filter by date</Text>
                        <Text style={[styles.closeText, ((minDate !== null && maxDate !== null) ? { color: '#526DC2' } : {color: '#A9A9A9'})]}
                            onPress={() => {
                                setMinDate(null)
                                setMaxDate(null)
                            }}
                        >
                            Clear
                        </Text>
                    </View>
                    <View style={styles.amountsContainer}>
                        <Pressable 
                            onPress={() => setShowMin(true)} 
                            style={[styles.dateInput, (minDate !== null) ? styles.selectedInput : styles.unselectedInput]}
                        >
                            <Text
                                style={[styles.dateText, (minDate !== null) ? { color: '#525454' } : {color: '#A9A9A9'}]}
                            >
                                {(minDate === null) ? "MM/DD/YYYY" : `${minDate.getMonth()}/${minDate.getDate()}/${minDate.getFullYear()}`}
                            </Text>
                        </Pressable>
                        <Text style={styles.to}>to</Text>
                        <Pressable 
                            onPress={() => setShowMax(true)} 
                            style={[styles.dateInput, (maxDate !== null) ? styles.selectedInput : styles.unselectedInput]}
                        >
                            <Text
                                style={[styles.dateText, (maxDate !== null) ? { color: '#525454' } : {color: '#A9A9A9'}]}
                            >
                                {(maxDate === null) ? "MM/DD/YYYY" : `${maxDate.getMonth()}/${maxDate.getDate()}/${maxDate.getFullYear()}`}
                            </Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.filterGroup}>
                    <View style={styles.withClear}>
                        <Text style={styles.filterBtnText}>Filter by amount</Text>
                        <Text style={[styles.closeText, {color: '#A9A9A9'}]}>Clear</Text>
                    </View>
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
                    <Pressable style={[styles.filterBtn, typeFilter === 1 ? styles.selectedInput : styles.unselectedInput]} onPress={() => setTypeFilter(1)}>
                        <Text style={[styles.filterBtnText, typeFilter === 1 ? { color: '#525454' } : {color: '#A9A9A9'}]}>Any transaction</Text>
                        {(typeFilter === 1) && (
                            <View style={{position: "absolute", right: 12, top: 10}}>
                                <SvgIcon type="basic_check"/>
                            </View>
                        )}
                    </Pressable>
                    <Pressable style={[styles.filterBtn, typeFilter === 2 ? styles.selectedInput : styles.unselectedInput]} onPress={() => setTypeFilter(2)}>
                        <Text style={[styles.filterBtnText, typeFilter === 2 ? { color: '#525454' } : {color: '#A9A9A9'}]}>Earnings</Text>
                        {(typeFilter === 2) && (
                            <View style={{position: "absolute", right: 12, top: 10}}>
                                <SvgIcon type="basic_check"/>
                            </View>
                        )}
                    </Pressable>
                    <Pressable style={[styles.filterBtn, typeFilter === 3 ? styles.selectedInput : styles.unselectedInput]} onPress={() => setTypeFilter(3)}>
                        <Text style={[styles.filterBtnText, typeFilter === 3 ? { color: '#525454' } : {color: '#A9A9A9'}]}>Expirations</Text>
                        {(typeFilter === 3) && (
                            <View style={{position: "absolute", right: 12, top: 10}}>
                                <SvgIcon type="basic_check"/>
                            </View>
                        )}
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
        <DateTimePickerModal
            isVisible={showMax}
            mode="date"
            is24Hour={true}
            onConfirm={(date) => {
                setShowMax(false)
                setMaxDate(date)
            }}
            onCancel={() => setShowMax(false)}
        />
    </>
  )
}

export default FiltersModal