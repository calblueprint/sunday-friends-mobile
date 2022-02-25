import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, View, Image, ImageBackground, Text } from 'react-native';
import { Title } from 'react-native-paper';
import EditScreenInfo from '../../components/EditScreenInfo';
import ViewContainer from '../../components/ViewContainer';
import styles from '../Profile/styles';

const ProfileScreen = () => {

    return (
        <ViewContainer>
            <Image style = {styles.profileImage} source={require('../../../assets/images/Smileys.png')} />
            <Title style = {styles.profile}>Jacob Kim</Title>
            <View style = {styles.buttonLayout}>
                <Button 
                    title="EDIT PROFILE"
                    //color="#000000" //"color" is diff on ios(textcolor) and android(backgroundcolor)
                />
                <Button 
                    title="RESET PASSWORD"
                    //color="#000000" //"color" is diff on ios(textcolor) and android(backgroundcolor)
                />
            </View>
            <View style={styles.profileInformation}>
                <View style={styles.profileFields}>
                    <Text style={styles.fields}>NAME</Text>
                    <Text style={styles.values}>Jacob Kim</Text>
                </View>
                <View style={styles.profileFields}>
                    <Text style={styles.fields}>ROLE</Text>
                    <Text style={styles.values}>Dad</Text>
                </View>
                <View style={styles.profileFields}>
                    <Text style={styles.fields}>EMAIL</Text>
                    <Text style={styles.values}>booblywobbly@gmail.com</Text>
                </View>
                <View style={styles.profileFields}>
                    <Text style={styles.fields}>PASSWORD</Text>
                    <Text style={styles.values}>********</Text>
                </View>
            </View>
        </ViewContainer>
    );
}

export default ProfileScreen;