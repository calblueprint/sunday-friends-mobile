import React from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font'
import styles from './styles';

const TransactionPreview = ({ transaction }: any) => {
    return (
        <Pressable style={styles.container}>
            <View style={styles.rdca}>
                <View style={styles.frame117}>
                    {(transaction.role === "head") ? (
                        <Image source={require('../../../../assets/images/headSmiley.png')} style={styles.smiley}/>
                    ) : (
                        <Image source={require('../../../../assets/images/parentSmiley.png')} style={styles.smiley}/>
                    )}
                    <View style={styles.textGroup}>
                        <Text style={styles.description} numberOfLines={1}>
                            {transaction.description}
                        </Text>
                        <Text style={styles.nameDate}>
                            {transaction.username}  •  {transaction.date}
                        </Text>
                    </View>
                </View>
                <Text style={[styles.points, (transaction.pointGain > 0) ? {color: "#65C656"} : {color: "#FF6666"}]}>
                    {((transaction.pointGain > 0) ? "+" : "") + transaction.pointGain}
                </Text>
                <View style={styles.icon}>
                    <FontAwesome5 name="chevron-right" size={24} color="#CACACA"/>
                </View>
            </View>
        </Pressable>
    )
}

export default TransactionPreview