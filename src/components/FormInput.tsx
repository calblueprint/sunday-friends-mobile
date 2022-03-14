import * as React from 'react';

import { Text, TextInput, TextInputProps, GestureResponderEvent, StyleSheet, View } from 'react-native';
import {
    useController,
    useFormContext,
    ControllerProps,
    UseControllerProps
} from 'react-hook-form';

import globalStyles from '../globalStyles';

/* EXTENDING PROPS TYPES TO INHERIT NAME AND RULES FROM USECONTROLLERPROPS */
interface FormInputProps extends TextInputProps, UseControllerProps {
    label: string
    defaultValue?: string //ADD DEFAULT VALUE TO PROPS
}

const ControlledInput = (props: FormInputProps) => {

    const formContext = useFormContext();
    // const { formState } = formContext;

    const {
        name,
        label,
        rules,
        defaultValue,
        ...inputProps
    } = props;

    const { field } = useController({ name, label, rules, defaultValue });

    const styles = StyleSheet.create({
        input: {
            height: 40,
            width: "100%",
            marginBottom: "2%",
            marginTop: "2%",
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
        },

        container: {
            width: "80%",
            marginTop: "3%",
        },
    });

    const [isFocused, changeFocus] = React.useState(true);
    const handleFocus = () => changeFocus(false);
    const handleBlur = () => changeFocus(true);

    return (
        <View style={styles.container}>
            {label && (<Text style={globalStyles.overline2}>{label}</Text>)}
            <TextInput
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={[styles.input, {
                    borderColor: isFocused
                        ? '#A9A9A9'
                        : '#526DC2',
                    borderWidth: 1,
                    backgroundColor: field.value
                        ? "#ffffff"
                        : "#f2f2f2",
                }]}
                onChangeText={field.onChange}
                placeholderTextColor="#A9A9A9"
                value={field.value}
                {...inputProps}
            />
        </View>
    );
};

const FormInput = (props: FormInputProps) => {

    const { name } = props;

    const formContext = useFormContext();

    if (!formContext || !name) {
        const msg = !formContext ? "TextInput must be wrapped by the FormProvider" : "Name must be defined"
        console.error(msg)
        return null
    }

    return <ControlledInput {...props} />;

};

export default FormInput;