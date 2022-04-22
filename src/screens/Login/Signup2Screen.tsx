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
import { getHeadInvitesByEmail, getUserInvite } from '../../firebase/firestore/userInvite';
import { addUser } from '../../firebase/firestore/user';
import { User } from '../../types/schema';

const Signup2Screen = ({ route, navigation }: any) => {


    type FormValues = {
        password1: string;
        password2: string;
    };

    const auth = firebaseApp.auth();

    const { user_invite } = route.params;

    const [isFocused, changeFocus] = React.useState(false);
    const handleFocus = () => changeFocus(false);
    const handleBlur = () => changeFocus(true);

    const createUser = (uid, name, email, role, family_id, parent) => {
        const defaultUser: User = {
            user_id: uid,
            address: "",
            created_at: new Date(),
            email: email,
            role: role,
            family_id: family_id,
            full_name: name,
            last_active: new Date(),
            parent: parent,
            points: 0,
            reward_eligible: false,
            suspended: false,
            phone_number: "",
            transactions: [],
        };
        return defaultUser;
    };

    const { ...methods } = useForm();

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            if (data.password1 == data.password2) {
                const result = await registerWithEmailAndPassword(user_invite.email, data.password1);
                console.log(user_invite.family_id)
                const parent = user_invite.status != "Child";
                const newUser = createUser(
                    result.user.uid, 
                    user_invite.name, 
                    user_invite.email, 
                    user_invite.status, 
                    user_invite.family_id,
                    parent);
                addUser(newUser);
                if (user_invite.status == "Head") {
                    navigation.navigate('LoginStack', { screen: 'Invite' });
                } else {
                    navigation.navigate('LoginStack', { screen: 'Signup3' });
                }
            } else {
                console.log("Passwords do not match!");
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
