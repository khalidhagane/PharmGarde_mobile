import MapView, { Marker } from "react-native-maps"
import { StyleSheet, View } from "react-native"
import { useState, useContext } from "react"
import { DataContext } from "../context/DataContext"

function Map() {
    const { data } = useContext(DataContext)
    const [region, setRegion] = useState({
        // morocco Youssoufia coordinates
        latitude: 32.24767,
        longitude: -8.515,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })

    const fakeData = [
        {
            id: 1,
            name: "YouCode",
            latitude: 32.24767,
            longitude: -8.531264,
        },
        {
            id: 2,
            name: "Some Place",
            latitude: 32.244472600296774,
            longitude: -8.530837648006724,
        },
        {
            id: 3,
            name: "Some Other Place",
            latitude: 32.242013734956124,
            longitude: -8.53141164073591,
        },
    ]

    return (
        <View style={styles.container}>
            <MapView style={styles.map} region={region}>
                {fakeData.map((item) => (
                    <Marker
                        key={item.id}
                        coordinate={{
                            latitude: item.latitude,
                            longitude: item.longitude,
                        }}
                        title={item.name}
                    />
                ))}
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    map: {
        width: "100%",
        height: "100%",
    },
})

export default Map
