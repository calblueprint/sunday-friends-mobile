import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

export default function RectangularButton({ text }: { text: string }) {
    const styles = StyleSheet.create({
        buttonText: {
            fontFamily: "Avenir",
            fontWeight: "900",
            fontSize: 14,
            textTransform: "uppercase",
            alignSelf: "center",
            color: "#525454",
        },

        buttonContainer: {
            backgroundColor: "#C4C4C4",
            width: 303,
            height: 43,
            justifyContent: "center",
        },
    });

    return (
        <View>
            <Pressable style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{text}</Text>
            </Pressable>
        </View>
    );
}