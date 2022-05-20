import * as React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Pressable } from 'react-native';
import SvgIcon from '../../assets/SvgIcon';

interface IconProps {
    onPress?: () => void;
    name: string;
    tab: number;
    color: string;
    size?: number;
    style?: object;
}

const styles = StyleSheet.create({
    default: {
        marginRight: -3,
    },
    opaque: {
        opacity: 1,
    },
    fade: {
        opacity: 0.5,
    },
    selected: {
        color: "#FFFFFF"
    },
    notSelected: {
        color: "#7F93D1"
    }
});

export default function Icon(props: IconProps) {
    const { onPress, size, style, name, tab } = props;

    return (
        <SvgIcon type={name} className={tab==0?styles.selected:styles.notSelected} {...props}></SvgIcon>

        //<FontAwesome size={size} style={{color: '#E6ECFE'}} {...props} />
        // <Pressable
        //     onPress={onPress ?? null}
        //     style={({ pressed }) => (pressed ? styles.opaque : styles.fade)}
        // >
        //     {icon}
        // </Pressable>
    );
}

Icon.defaultProps = {
    onPress: null,
    size: 24,
    style: styles.default,
};