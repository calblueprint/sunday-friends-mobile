import * as React from 'react';
import { Text, Pressable, View } from 'react-native';
import ViewContainer from '../../components/ViewContainer';
import FormInput from "../../components/FormInput";
import { default as styles } from "./styles";
import RectangularButton from '../../components/RectangularButton';
import { useForm, FormProvider, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import globalStyles from '../../globalStyles';

const LoginScreen = ({ navigation }: any) => {

    type FormValues = {
        email: string;
        password: string;
    };

    const [email, onChangeEmail] = React.useState("");
    const [isFocused, changeFocus] = React.useState(false);
    const handleFocus = () => changeFocus(false);
    const handleBlur = () => changeFocus(true);

    const { ...methods } = useForm();

    const onSubmit: SubmitHandler<FormValues> = (data) => console.log({ data });

    const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
        return console.log(errors)
    };

    return (
        <ViewContainer>
            <Text style={[globalStyles.h2, styles.loginTitle]}>Welcome back!</Text>
            <Text style={[globalStyles.body3, styles.text]}>Let’s log you into your account.</Text>
            <FormProvider {...methods}>
                <FormInput
                    name="email"
                    rules={{ required: 'Email is required!' }}
                    label="Email"
                    placeholder="email@email.com"
                    keyboardType="email-address"
                />
                <FormInput
                    name="password"
                    rules={{ required: 'Password is required!' }}
                    label="Password"
                    placeholder="password"
                    keyboardType="email-address"
                />
            </FormProvider>
            <RectangularButton
                onPress={methods.handleSubmit(onSubmit, onError)}
                text="Login"
                buttonStyle={{ marginTop: '15%', backgroundColor: '#253C85' }}
                textStyle={{ color: '#FFF' }}
            />
            <Pressable
                style={styles.text}
                onPress={() => navigation.navigate('LoginStack', { screen: 'Signup' })}
            >
                {/* TODO: have this button route to a "reset password" screen */}
                <Text style={[globalStyles.body1Bold, styles.underline]}>Forgot Password?</Text>
            </Pressable>
            <View style={styles.text}>
                <Text style={[globalStyles.body3, styles.footer]}>
                    Haven't activated your account? <Pressable
                        onPress={() => navigation.navigate('LoginStack', { screen: 'Signup' })}
                    >
                        <Text style={[globalStyles.body1Bold, styles.underline]}>
                            Activate now
                        </Text>
                    </Pressable>
                </Text>

            </View>

        </ViewContainer>
    );
}

export default LoginScreen;