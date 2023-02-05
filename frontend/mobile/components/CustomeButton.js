import React from "react"
import { StyleSheet, TouchableOpacity, Text } from "react-native"

const CustomeButton = (props) => {
    const clickMe = () => {
        console.warn("Next Button")
    }

    return (
        <TouchableOpacity onPress={clickMe} style={styles.btn}>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#3F7CA1",
        width: 100,
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "#fff",
        fontSize: 16,
    },
})

export default CustomeButton
