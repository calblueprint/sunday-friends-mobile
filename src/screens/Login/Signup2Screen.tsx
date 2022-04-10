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
import SvgIcon from ',,/../../assets/SvgIcon';
import { getHeadInvitesByEmail } from '../../firebase/firestore/userInvite';


const Signup2Screen = ({ route, navigation }: any) => {

    type FormValues = {
        password1: string;
        password2: string;
    };

    const auth = firebaseApp.auth();

    const { email } = route.params;

    const [isFocused, changeFocus] = React.useState(false);
    const handleFocus = () => changeFocus(false);
    const handleBlur = () => changeFocus(true);

    const { ...methods } = useForm();

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            if (data.password1 == data.password2) {
                console.log(email);
                console.log(data.password1);
                await registerWithEmailAndPassword(email, data.password1);
                const headInvites = await getHeadInvitesByEmail(email);
                if (headInvites.length == 0) {
                    navigation.navigate('LoginStack', { screen: 'Signup3' });
                } else {
                    navigation.navigate('LoginStack', { screen: 'Invite' })
                }
            } else {
                console.log("Passwords do not match!")
            }
        } catch (e) {
            console.error(e.message);
            navigation.navigate('LoginStack', { screen: 'Error2' });
        }
    };

    const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
        return console.log(errors)
    };

    return (
        <ViewContainer>
            <Pressable
                onPress={() => navigation.navigate('LoginStack', { screen: 'Signup1' })}
                style={styles.left2}
            >
                <View style={styles.back}>
                    <SvgIcon type='chevron_back' />
                    <Text style={[globalStyles.body1Bold, styles.backText]}>
                        Back
                    </Text>
                </View>

            </Pressable>
            <Text style={[globalStyles.h2, styles.signupTitle]}>Create a password.</Text>
            <FormProvider {...methods}>
                <FormInput
                    name="password1"
                    rules={{ required: 'Password is required!' }}
                    label="Password"
                    placeholder="Enter password"
                // keyboardType="email-address"
                />
                <FormInput
                    name="password2"
                    rules={{ required: 'Password is required!' }}
                    label="Confirm Password"
                    placeholder="Enter same password"
                />
            </FormProvider>
            <RectangularButton
                onPress={methods.handleSubmit(onSubmit, onError)}
                text="Next"
                buttonStyle={{ marginTop: '10%', backgroundColor: '#253C85' }}
                textStyle={{ color: '#FFF' }}
            />
            <Pressable
                style={styles.text}
                onPress={() => navigation.navigate('LoginStack', { screen: 'Signup' })}
            >
            </Pressable>

        </ViewContainer>
    );
}

export default Signup2Screen;