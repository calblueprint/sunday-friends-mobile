import * as React from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Modal, StyleSheet, View, Image, ImageBackground, Text, Pressable } from 'react-native';
import { Title } from 'react-native-paper';
import EditScreenInfo from '../../components/EditScreenInfo';
import ViewContainer from '../../components/ViewContainer';
import styles from '../Profile/styles';


const ProfileScreen = () => {

    const [profileSwitchModalVisible, setProfileSwitchModalVisible] = useState(false);

    return (
        <ViewContainer>
            <Modal
                visible={profileSwitchModalVisible}
                onRequestClose={() => setProfileSwitchModalVisible(!setProfileSwitchModalVisible)}
                onDismiss={() => setProfileSwitchModalVisible(false)}
                transparent={true}
            >
                <View
                    style={styles.switchProfileModalView}
                    
                >
                    <Text> hello</Text>
                </View>
            </Modal>
            <Pressable
                style={styles.profileImagePressable}
                onPress={() => setProfileSwitchModalVisible(!profileSwitchModalVisible)}
            >
                <Image style = {styles.profileImage} source={require('../../../assets/images/Smileys.png')} />
            </Pressable>
            <Title style = {styles.profileName}>Jacob Kim</Title>
            <Pressable style={styles.editPressable}>
                <Text style={styles.buttonText}>EDIT PROFILE</Text>
            </Pressable>
            <Pressable style={styles.resetPressable}>
                <Text style={styles.buttonText}>RESET PASSWORD</Text>
            </Pressable>
            <View style={styles.profileFields}>
                    <Text style={styles.fields}>NAME</Text>
                    <Text style={styles.fields}>ROLE</Text>
                    <Text style={styles.fields}>EMAIL</Text>
                    <Text style={styles.fields}>PASSWORD</Text>
            </View>
            <View style={styles.profileValues}>
                    <Text style={styles.values}>Jacob Kim</Text>
                    <Text style={styles.values}>Dad</Text>
                    <Text style={styles.values}>booblywobbly@gmail.com</Text>
                    <Text style={styles.values}>********</Text>
            </View>
            <Pressable style={styles.logoutPressable}>
                <Text style={styles.buttonText}>LOGOUT</Text>
            </Pressable>
        </ViewContainer>
    );
}

export default ProfileScreen;