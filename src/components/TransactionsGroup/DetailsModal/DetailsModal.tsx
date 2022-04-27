import * as React from "react";
import { View, Text, Modal, Pressable, Image } from "react-native";
import styles from "./styles";

import globalStyles from "../../../globalStyles";
import SvgIcon from "../../../../assets/SvgIcon";

const DetailsModal = ({ visible, setVisible, transaction }: any) => {
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
        <Modal visible={visible} transparent>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
                <View style={styles.mainView}>
                    <Pressable style={styles.modalX} onPress={() => setVisible(false)}>
                        <SvgIcon type="greyX" />
                    </Pressable>
                    <View style={styles.top}>
                        {renderIcon(transaction.role)}
                        <Text style={[globalStyles.body1, styles.centerAlign]}>
                            {transaction.user_name}
                        </Text>
                    </View>
                    <View style={styles.description}>
                        <Text style={[globalStyles.h4Bold, styles.centerAlign]}>
                            {transaction.description}
                        </Text>
                        <Text style={[styles.points, (transaction.point_gain > 0) ? {color: "#65C656"} : {color: "#FF6666"}]}>
                            {((transaction.point_gain > 0) ? "+" : "") + transaction.point_gain}
                        </Text>
                    </View>
                    <View style={styles.line}/>
                    <View style={styles.bottom}>
                        <View style={styles.bottomEntry}>
                            <Text style={styles.leftText}>
                                Transaction date
                            </Text>
                            <Text style={styles.boldText}>
                                {transaction.date}
                            </Text>
                        </View>
                        <View style={styles.bottomEntry}>
                            <Text style={styles.leftText}>
                                Type of transaction
                            </Text>
                            <Text style={styles.boldText}>
                                {(transaction.point_gain > 0) ? "Earning" : "Expiration"}
                            </Text>
                        </View>
                    </View>
                    
                </View>
            </View>
        </Modal>
    );
};

export default DetailsModal;
