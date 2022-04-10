import * as React from 'react';
import { Text, Pressable, View } from 'react-native';
import ViewContainer from '../../components/ViewContainer';
import FormInput from "../../components/FormInput";
import { default as styles } from "./styles";
import RectangularButton from '../../components/RectangularButton/RectangularButton';
import { useForm, FormProvider, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import globalStyles from '../../globalStyles';
import firebaseApp from "../../firebase/firebaseApp";
import { getUserInvitesByEmail } from "../../firebase/firestore/userInvite";
import SvgIcon from "../../../assets/SvgIcon";

const Signup1Screen = ({ navigation }: any) => {

    type FormValues = {
        email: string;
        password: string;
    };

    const auth = firebaseApp.auth();


    const [email, onChangeEmail] = React.useState("");
    const [isFocused, changeFocus] = React.useState(false);
    const handleFocus = () => changeFocus(false);
    const handleBlur = () => changeFocus(true);

    const { ...methods } = useForm();

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            const headInvites = await getUserInvitesByEmail(data.email);
            if (headInvites.length == 0) {
                navigation.navigate('LoginStack', { screen: 'Error1'})
            } else {
                navigation.navigate('LoginStack', { screen: 'Signup2', params: { email: data.email } });
            }
        } catch (e) {
            console.error(e.message);
        }
    };

    const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
        return console.log(errors)
    };

    return (
        <ViewContainer>
            <Pressable
                onPress={() => navigation.navigate('LoginStack', { screen: 'Signin' })}
                style={styles.left1}
            >
                <View style={styles.back}>
                    <SvgIcon type='chevron_back' />
                    <Text style={[globalStyles.body1Bold, styles.backText]}>
                        Back
                    </Text>
                </View>

            </Pressable>
            <Text style={[globalStyles.h2, styles.loginTitle]}>Welcome! Activate your account.</Text>
            <FormProvider {...methods}>
                <FormInput
                    name="email"
                    rules={{ required: 'Email is required!' }}
                    label="Email"
                    placeholder="email@email.com"
                    keyboardType="email-address"
                />
            </FormProvider>
            <RectangularButton
                // onPress={() => navigation.navigate('LoginStack', { screen: 'Signup2' })}
                onPress={methods.handleSubmit(onSubmit, onError)}
                text="Next"
                buttonStyle={{ marginTop: '15%', backgroundColor: '#253C85' }}
                textStyle={{ color: '#FFF' }}
            />
            <View style={styles.text}>
                <Text style={[globalStyles.body3, styles.signupFooter]}>
                    Already have an account? <Pressable
                        onPress={() => navigation.navigate('LoginStack', { screen: 'Login' })}
                    >
                        <Text style={[globalStyles.body1Bold, styles.underline]}>
                            Login
                        </Text>
                    </Pressable>
                </Text>

            </View>

        </ViewContainer>
    );
}

export default Signup1Screen;