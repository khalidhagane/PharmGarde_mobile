import React from "react"
import { View, Image, StyleSheet } from "react-native"
import CustomeButton from "../components/CustomeButton"
import CustomeText from "../components/CustomeText"
import styles from "../assets/styles/startContaner"

const PageFour = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.img}
                    source={require("../assets/images/vector4.png")}
                />
            </View>
            <View>
                <CustomeText
                    text="Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.  Nullam vitae congue est. Aliquam
                    fermentum odio ne vulputate fringilla.
                    Quisque viverra ex "
                />
                <View style={stylesBtn.btns}>
                    <CustomeButton
                        title="Skip"
                        route="PageFive"
                        navigation={navigation}
                    />
                    <CustomeButton
                        title="Activate"
                        route="PageSearch"
                        navigation={navigation}
                    />
                    
                </View>
            </View>
        </View>
    )
}

const stylesBtn = StyleSheet.create({
    btns: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 30,
    },
})

export default PageFour
