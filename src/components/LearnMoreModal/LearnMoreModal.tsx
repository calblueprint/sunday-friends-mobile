import React from 'react';
import { View, Text, Pressable } from 'react-native';
import SvgIcon from '../../../assets/SvgIcon';
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
                        <SvgIcon type="gainCreditsImage" />
                    </View>
                    <View style={styles.rightColumn}>
                        <Text style={styles.subHeader}>Gain credits through activities</Text>
                        <Text style={styles.contentText}>By completing assignments, members earn participation points that correspond to the activity’s class level.</Text>
                    </View>
                </View>
                <View style={styles.rowContainer}>
                    <View style={styles.leftColumn}>
                        <SvgIcon type="climbTiersImage" />
                    </View>
                    <View style={styles.rightColumn}>
                        <Text style={styles.subHeader}>Climb membership tiers</Text>
                        <Text style={styles.contentText}>Families raise their membership tier by accumulating participation points</Text>
                    </View>
                </View>
                <View style={styles.rowContainer}>
                    <View style={styles.leftColumn}>
                        <SvgIcon type="redeemPointsImage" />
                    </View>
                    <View style={styles.rightColumn}>
                        <Text style={styles.subHeader}>Redeem points for necessities</Text>
                        <Text style={styles.contentText}>As you climb the membership tiers, your family will receive access to more benefits</Text>
                    </View>
                </View>
                <View style={styles.rowContainer}>
                    <View style={styles.leftColumn}>
                        <SvgIcon type="pointsExpireImage" />
                    </View>
                    <View style={styles.rightColumn}>
                        <Text style={styles.subHeader}>Point expire with time</Text>
                        <Text style={styles.contentText}>Accumulated participation points earned in any given month will expire approximately 3 months after earning them</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default LearnMoreModal;