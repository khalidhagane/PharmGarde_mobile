import { View, Text, StyleSheet } from "react-native"
import React from "react"

const CustomeText = (props) => {
    return (
        <View>
            <Text style={styles.content}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        textAlign: "center",
        marginVertical: 30,
        color: "#FFF",
    },
})

export default CustomeText
