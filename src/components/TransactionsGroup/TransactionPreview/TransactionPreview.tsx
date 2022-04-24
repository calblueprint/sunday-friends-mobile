import React from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import SvgIcon from ',,/../../assets/SvgIcon';
import { useFonts } from 'expo-font'
import styles from './styles';

const TransactionPreview = ({ transaction }: any) => {
    const renderIcon = (role: String) => {
        switch(role) {
            case "Head":
                return <Image source={require('../../../../assets/images/headSmiley.png')} style={styles.smiley}/>
            case "Parent":
                return <Image source={require('../../../../assets/images/parentSmiley.png')} style={styles.smiley}/>
            case "Child":
                return <Image source={require('../../../../assets/images/childSmiley.png')} style={styles.smiley}/>
            case "Dependent":
                return <Image source={require('../../../../assets/images/childSmiley.png')} style={styles.smiley}/>
            default:
                <Image source={require('../../../../assets/images/headSmiley.png')} style={styles.smiley}/>
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.rdca}>
                <View style={styles.frame117}>
                    {renderIcon(transaction.role)}
                    <View style={styles.textGroup}>
                        <Text style={styles.description} numberOfLines={1}>
                            {transaction.description}
                        </Text>
                        <Text style={styles.nameDate}>
                            {transaction.user_name}  •  {transaction.date}
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

export default TransactionPreview