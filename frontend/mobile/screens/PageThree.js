import React from "react"
import { View, Image } from "react-native"
import CustomeButton from "../components/CustomeButton"
import CustomeText from "../components/CustomeText"
import styles from "../assets/styles/startContaner"

const PageThree = () => {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.img}
                    source={require("../assets/images/vector3.png")}
                />
            </View>
            <View>
                <CustomeText
                    text="Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.  Nullam vitae congue est. Aliquam
                    fermentum odio ne vulputate fringilla.
                    Quisque viverra ex "
                />
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        marginTop: 30,
                    }}
                >
                    <CustomeButton title="Next" />
                </View>
            </View>
        </View>
    )
}

export default PageThree
