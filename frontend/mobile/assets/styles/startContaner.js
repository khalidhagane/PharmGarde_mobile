import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#335E90",
        width: "100%",
        height: "100%",
        paddingTop: 50,
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        resizeMode: "contain",
        width: 400,
        height: 200,
        marginBottom: 20,
    },

    cardContainer: {
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
        marginVertical: 10,
        width: 320,
    },
    cardTitle: {
        fontSize: 20,
        color: "#335E90",
        marginBottom: 5,
        textAlign: "center",
    },
    cardaddress: {
        fontSize: 15,
        marginBottom: 5,
    },
    cardPhone: {
        fontSize: 17,
        marginLeft: 5,
    },
})

export default styles
