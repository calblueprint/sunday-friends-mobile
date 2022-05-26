import * as React from "react";
import { Text, Pressable, View } from "react-native";
import ViewContainer from "../../components/ViewContainer";
import FormInput from "../../components/FormInput";
import { default as styles } from "./styles";
import RectangularButton from "../../components/RectangularButton/RectangularButton";
import {
    useForm,
    FormProvider,
    SubmitHandler,
    SubmitErrorHandler,
} from "react-hook-form";
import globalStyles from "../../globalStyles";
import { registerWithEmailAndPassword } from "../../firebase/auth";
import firebaseApp from "../../firebase/firebaseApp";
import SvgIcon from ",,/../../assets/SvgIcon";
import {
    getHeadInvitesByEmail,
    getUserInvite,
} from "../../firebase/firestore/userInvite";
import { addUser } from "../../firebase/firestore/user";
import { User } from "../../types/schema";
import emailjs, { init } from "@emailjs/browser";
import { EMAILJS_USER_ID, EMAILJS_SERVICE_ID } from "@env";
import SendEmail from '../../components/SendEmail/SendEmail';
import { addMemberToFamily } from "../../firebase/firestore/family";

const Signup2Screen = ({ route, navigation }: any) => {


    type FormValues = {
        password1: string;
        password2: string;
    };

    const auth = firebaseApp.auth();

    const { user_invite } = route.params;

    const [isFocused, changeFocus] = React.useState(false);
    const [submitting, changeSubmitting] = React.useState(false);
    const [pass, onChangePW] = React.useState("");
    const [confirmPass, onChangeConfirm] = React.useState("");
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

    const confirmEmailParams = {
        from: "Sunday Friends",
        to: user_invite.email,
        name: user_invite.name,
    };

    const valid = () => {
        return (
            pass == confirmPass &&
            pass.length >= 8 &&
            pass.length <= 20 &&
            /\d/.test(pass) &&
            /[A-Z]/.test(pass) &&
            /^\S+$/.test(pass)
        );
    };

    // const sendEmail = (type: string) => {
    //     console.log("hellooooooooo\n");
    //     console.log(EMAILJS_SERVICE_ID);
    //     try {
    //         emailjs.send(
    //             EMAILJS_SERVICE_ID,
    //             // "service_4586ayw",
    //             "template_zgiqmdm",
    //             confirmEmailParams,
    //             "bpUmfdhrALYzPBWpx"
    //         )
    //     } catch (e) {
    //         console.log(e)
    //     }
    // };

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        
    };

    const submitForm = async () => {
        console.log('buttonpress');
        try {
            changeSubmitting(true);
            if (valid()) {
                const result = await registerWithEmailAndPassword(user_invite.email, pass);
                console.log(user_invite.family_id)
                const parent = user_invite.status != "Child";
                const newUser = createUser(
                    result.user.uid,
                    user_invite.name,
                    user_invite.email,
                    user_invite.status,
                    user_invite.family_id,
                    parent
                );
                addUser(newUser);
                addMemberToFamily(newUser, newUser.family_id.toString());
                if (user_invite.status == "Head") {
                    navigation.navigate('LoginStack', { screen: 'FamilyName' });
                } else {
                    SendEmail("confirm_adult", confirmEmailParams);
                    navigation.navigate('LoginStack', { screen: 'Signup3' });
                }
            } else {
                console.log("Passwords do not match!");
            }
        } catch (e) {
            console.error(e.message);
            navigation.navigate('LoginStack', { screen: 'Error2' });
        }
    }

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
                    onChangeText={onChangePW}
                    label="Password"
                    placeholder="Enter password"
                    secureTextEntry={true}
                // keyboardType="email-address"
                />
                <FormInput
                    name="password2"
                    rules={{ required: 'Password is required!' }}
                    onChangeText={onChangeConfirm}
                    label="Confirm Password"
                    placeholder="Enter same password"
                    secureTextEntry={true}
                />
            </FormProvider>
            <RectangularButton
                disable={submitting}
                onPress={() => submitForm()}
                text="Next"
                buttonStyle={{ marginTop: '10%', backgroundColor: valid()?'#253C85':'#A9A9A9'}}
                textStyle={{ color: '#FFF' }}
            />
            {/* <Pressable
                style={styles.text}
                onPress={() => navigation.navigate('LoginStack', { screen: 'Signup' })}
            >
            </Pressable> */}

            <View style={styles.characterCheckIcon}>
                {pass.length >= 8 && pass.length <= 20 ? (
                <SvgIcon type="greenCheck" />
                ) : (
                <SvgIcon type="redX" />
                )}
            </View>
            <View style={styles.characterCheckText}>
                <Text style={globalStyles.body2}>8-20 Characters</Text>
            </View>
            <View style={styles.numberCheckIcon}>
                {/\d/.test(pass) ? (
                <SvgIcon type="greenCheck" />
                ) : (
                <SvgIcon type="redX" />
                )}
            </View>
            <View style={styles.numberCheckText}>
                <Text style={globalStyles.body2}>At least 1 number</Text>
            </View>
            <View style={styles.uppercaseCheckIcon}>
                {/[A-Z]/.test(pass) ? (
                <SvgIcon type="greenCheck" />
                ) : (
                <SvgIcon type="redX" />
                )}
            </View>
            <View style={styles.uppercaseCheckText}>
                <Text style={globalStyles.body2}>At least 1 uppercase letter</Text>
            </View>
            <View style={styles.spacesCheckIcon}>
                {/^\S+$/.test(pass) ? (
                <SvgIcon type="greenCheck" />
                ) : (
                <SvgIcon type="redX" />
                )}
            </View>
            <View style={styles.spacesCheckText}>
                <Text style={globalStyles.body2}>No spaces</Text>
            </View>
            <View style={styles.matchCheckIcon}>
                {pass==confirmPass ? (
                <SvgIcon type="greenCheck" />
                ) : (
                <SvgIcon type="redX" />
                )}
            </View>
            <View style={styles.matchCheckText}>
                <Text style={globalStyles.body2}>Passwords Match</Text>
            </View>

        </ViewContainer>
    );
}

export default Signup2Screen;
