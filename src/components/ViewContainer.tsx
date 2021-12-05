import * as React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
});

type ViewProps = {
    children?: React.ReactNode;
};

export default function ViewContainer({
    children
}: ViewProps) {
    return <View style={styles.container}>{children}</View>;
}

ViewContainer.defaultProps = {
    children: null,
};