import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

const styles = StyleSheet.create({
    container: {
      backgroundColor: "gray",
      width: "100%",
    //   height: "66px",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 1,
      marginBottom: 1,
      paddingVertical: 12,
      paddingHorizontal: 20
    },
    rdca: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        margin: 10
    },
    yay: {
        width: "90%",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
    },
    points: {
        marginRight: 25,
        fontFamily: "DM Mono",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 21,
    }
  });

const TransactionPreview = ({ transaction }: any) => {
  return (
    <Pressable style={styles.container}>
        <View style={styles.rdca}>
            <View style={styles.yay}>
                <Text>
                    {transaction.username}
                </Text>
                <Text>
                    {transaction.date}
                </Text>
                <Text>
                    {transaction.description}
                </Text>
                
            </View>
            <Text style={[styles.points, (transaction.pointGain > 0) ? {color: "#65C656"} : {color: "#FF6666"}]}>
                {((transaction.pointGain > 0) ? "+" : "") + transaction.pointGain}
            </Text>
            <FontAwesome5 name="chevron-right" size={24} color="black" />
        </View>
    </Pressable>
  )
}

export default TransactionPreview