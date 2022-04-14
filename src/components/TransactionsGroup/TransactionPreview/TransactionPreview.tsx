import React from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import SvgIcon from ',,/../../assets/SvgIcon';
import { useFonts } from 'expo-font'
import styles from './styles';

const TransactionPreview = ({ transaction }: any) => {
    const renderIcon = (role: String) => {
        switch(role) {
            case "head":
                return <Image source={require('../../../../assets/images/headSmiley.png')} style={styles.smiley}/>
            case "parent":
                return <Image source={require('../../../../assets/images/parentSmiley.png')} style={styles.smiley}/>
            case "child":
                return <Image source={require('../../../../assets/images/childSmiley.png')} style={styles.smiley}/>
            case "dependent":
                return <Image source={require('../../../../assets/images/childSmiley.png')} style={styles.smiley}/>
            default:
                <Image source={require('../../../../assets/images/headSmiley.png')} style={styles.smiley}/>
        }
    }
    return (
        <Pressable style={styles.container}>
            <View style={styles.rdca}>
                <View style={styles.frame117}>
                    {renderIcon(transaction.role)}
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
                <SvgIcon type='chevron_right' />
            </View>
        </Pressable>
    )
}

export default TransactionPreview