import React from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import SvgIcon from ',,/../../assets/SvgIcon';
import { useFonts } from 'expo-font'
import styles from './styles';

const TransactionPreviewNoIcon = ({ transaction }: any) => {
    return (
        <View style={styles.container}>
            <View style={styles.rdca}>
                <View style={styles.frame117}>
                    <View style={styles.textGroup}>
                        <Text style={styles.description} numberOfLines={1}>
                            {transaction.description}
                        </Text>
                        <Text style={styles.nameDate}>
                            {transaction.point_gain} credits  •  {transaction.date}
                        </Text>
                    </View>
                </View>
                <Text style={[styles.points, (transaction.point_gain > 0) ? {color: "#65C656"} : {color: "#FF6666"}]}>
                    {((transaction.point_gain > 0) ? "+" : "") + transaction.point_gain}
                </Text>
                <SvgIcon type='chevron_right' />
            </View>
        </View>
    )
}

export default TransactionPreviewNoIcon