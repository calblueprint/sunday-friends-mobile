import React from 'react';
import { View, Text, Pressable } from 'react-native';
import globalStyles from '../../globalStyles';
import styles from './styles';

const LearnMoreModal = ({refRBSheet}:any) => {

    return (
        <View>
            <Pressable style={styles.modalIconContainer} onPress={() => refRBSheet.current.close()}>
                <Text style={styles.closeText}>Close</Text>
            </Pressable>
            <View style={styles.modalContainer}>
                <Text style={[globalStyles.h3, styles.titleText]}>Earn credits, get necessities.</Text>
                <View style={styles.rowContainer}>
                    <View style={styles.leftColumn}>
                        <Text>Left Side</Text>
                    </View>
                    <View style={styles.rightColumn}>
                        <Text style={styles.subHeader}>Earning credits through activities</Text>
                        <Text style={styles.contentText}>By completing assignments, members earn PARTICIPATION POINTS that correspond to the activity’s CLASS LEVEL.</Text>
                    </View>
                </View>
                <View style={styles.rowContainer}>
                    <View style={styles.leftColumn}>
                        <Text>Left Side</Text>
                    </View>
                    <View style={styles.rightColumn}>
                        <Text style={styles.subHeader}>Membership tiers</Text>
                        <Text style={styles.contentText}>Families raise their MEMBERSHIP TIER by accumulating PARTICIPATION POINTS</Text>
                    </View>
                </View>
                <View style={styles.rowContainer}>
                    <View style={styles.leftColumn}>
                        <Text>Left Side</Text>
                    </View>
                    <View style={styles.rightColumn}>
                        <Text style={styles.subHeader}>Redeeming necessities</Text>
                        <Text style={styles.contentText}>As you climb the MEMBERSHIP TIERS, your family will receive access to more benefits</Text>
                    </View>
                </View>
                <View style={styles.rowContainer}>
                    <View style={styles.leftColumn}>
                        <Text>Left Side</Text>
                    </View>
                    <View style={styles.rightColumn}>
                        <Text style={styles.subHeader}>Point expirations</Text>
                        <Text style={styles.contentText}>Accumulated PARTICIPATION POINTS earned in any given month will expire approximately 3 months after earning them</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default LearnMoreModal;