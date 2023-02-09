import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"
import { StyleSheet, View, Dimensions } from "react-native"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import { GOOGLE_API_KEY } from "../enviroments"
import { useState } from "react"
import MapViewDirections from "react-native-maps-directions"

const { width, height } = Dimensions.get("window")

const ASPECT_RATIO = width / height

const INITIAL_POSITION = {
    latitude: 32.24767,
    longitude: -8.515,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0922 * ASPECT_RATIO,
}

function Map() {
    const [markers, setMarkers] = useState([
        {
            coordinate: {
                latitude: 32.24634,
                longitude: -8.52941,
            },
            title: "Your Location",
            description: "Some description",
        },
    ])

    const [destinations, setDestinations] = useState([
        {
            coordinate: {
                latitude: 32.24976932967926,
                longitude: -8.52247482214889,
            },
            title: "Pharmacy Number One",
            description: "Some description",
        },
        {
            coordinate: {
                latitude: 32.241035636345316,
                longitude: -8.530477514312357,
            },
            title: "Pharmacy Number Two",
            description: "Some other description",
        },
        {
            coordinate: {
                latitude: 32.250159497853595,
                longitude: -8.525736388286129,
            },
            title: "Pharmacy Number Three",
            description: "Some other description",
        },
    ])
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={INITIAL_POSITION}
                provider={PROVIDER_GOOGLE}
            >
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        coordinate={marker.coordinate}
                        title={marker.title}
                        description={marker.description}
                    />
                ))}
                {destinations.map((destination, index) => (
                    <>
                        <Marker
                            key={index}
                            coordinate={destination.coordinate}
                            title={destination.title}
                            description={destination.description}
                            pinColor="green"
                        />
                        <MapViewDirections
                            origin={markers[0].coordinate}
                            destination={destination.coordinate}
                            apikey={GOOGLE_API_KEY}
                            strokeWidth={3}
                            strokeColor="#6644ff"
                            onError={(errorMessage) => {
                                console.error(errorMessage)
                            }}
                        />
                    </>
                ))}
            </MapView>
            <View
                style={{ position: "absolute", top: 10, left: 20, right: 20 }}
            >
                <GooglePlacesAutocomplete
                    placeholder="Search"
                    onPress={(data, details = null) => {
                        console.log(data, details)
                    }}
                    query={{
                        key: GOOGLE_API_KEY,
                        language: "pt-BR",
                    }}
                    styles={{
                        textInput: {
                            backgroundColor: "#fff",
                            borderRadius: 10,
                            height: 50,
                            fontSize: 18,
                            paddingLeft: 20,
                        },
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
    },
    map: {
        width: "100%",
        height: "100%",
    },
})

export default Map
