import { Button, StyleSheet, Text, TextInput, View } from "react-native"
import { useState } from "react"

export default function App() {
    return (
        <View style={styles.screen}>
            <View>
                <Text>Reat native app!!</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: 70,
        paddingLeft: 20,
        paddingRight: 20,
    },
})
