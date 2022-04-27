import * as React from 'react';
import { Text, Pressable, View } from 'react-native';
import ViewContainer from '../../components/ViewContainer';
import FormInput from "../../components/FormInput";
import { default as styles } from "./styles";
import RectangularButton from '../../components/RectangularButton/RectangularButton';
import { useForm, FormProvider, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import globalStyles from '../../globalStyles';
import { registerWithEmailAndPassword } from "../../firebase/auth";
import firebaseApp from "../../firebase/firebaseApp";
import Navigation from '../../navigation';


const Signup3Screen = ({ route, navigation }: any) => {

    const auth = firebaseApp.auth();

    const [isFocused, changeFocus] = React.useState(false);

    return (
        <ViewContainer>
            <Text style={[globalStyles.h1, styles.signupTitle]}>You're all set!</Text>
            <Text style={[globalStyles.body3, styles.body2]}>
                Check your inbox or spam for a confirmation email of your Sunday Friends account.
            </Text>
            <RectangularButton
                onPress={() => navigation.navigate('Root', { screen: 'Home' })}
                text="Finish"
                buttonStyle={{ backgroundColor: '#253C85' }}
                textStyle={{ color: '#FFF' }}
            />
        </ViewContainer>
    );
}

export default Signup3Screen;