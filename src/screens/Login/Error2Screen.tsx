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


const Error2Screen = ({ route, navigation }: any) => {

    const auth = firebaseApp.auth();

    const [isFocused, changeFocus] = React.useState(false);

    return (
        <ViewContainer>
            <Text style={[globalStyles.h1, styles.signupTitle]}>
                Oops! Looks like this account has already been activated.
            </Text>
            <Text style={[globalStyles.body3, styles.body2]}>
                Ask an admin if you think this is a mistake.
            </Text>
            <RectangularButton
                onPress={() => navigation.navigate('LoginStack', { screen: 'Signup1' })}
                text="Back"
                buttonStyle={{ backgroundColor: '#253C85' }}
                textStyle={{ color: '#FFF' }}
            />
        </ViewContainer>
    );
}

export default Error2Screen;