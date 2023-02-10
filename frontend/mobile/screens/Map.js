import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps"
import { StyleSheet, View, Dimensions } from "react-native"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import { GOOGLE_API_KEY } from "../enviroments"
import { useState, useEffect } from "react"
import MapViewDirections from "react-native-maps-directions"
import api from "../helpers/api"
import Geocoder from "react-native-geocoding"

const { width, height } = Dimensions.get("window")

const ASPECT_RATIO = width / height

const INITIAL_POSITION = {
    latitude: 32.24767,
    longitude: -8.515,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0922 * ASPECT_RATIO,
}

function Map({ navigation }) {
    const [places, setPlaces] = useState([])
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

    const getPharmacies = async () => {
        try {
            const response = await api.get("/pharmacy")
            setPlaces(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    const [destinations, setDestinations] = useState([])

    const getAddressLatAndLong = () => {
        Geocoder.init(GOOGLE_API_KEY)
        if (places.length > 0) {
            places.map(async (place) => {
                try {
                    const response = await Geocoder.from(place.address)

                    const { lat, lng } = response.results[0].geometry.location

                    setDestinations([
                        ...destinations,
                        {
                            coordinate: {
                                latitude: lat,
                                longitude: lng,
                            },
                            _id: place._id,
                            name: place.name,
                            address: place.address,
                            phoneNumber: place.phoneNumber,
                            startTime: place.startTime,
                            endTime: place.endTime,
                            image: place.image,
                        },
                    ])
                } catch (error) {
                    console.error(error)
                }
            })
        }
    }

    const onPressDestination = (destination) => {
        // redirect to pharmacieDetails screen
        navigation.navigate("PharmacyDetails", {
            destination,
            title: "Pharmacy Details",
        })
    }

    useEffect(() => {
        getPharmacies()
        getAddressLatAndLong()
    }, [])

    console.log(destinations)
    console.log(places)

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
                            onPress={() => onPressDestination(destination)}
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
        marginTop: 30,
    },
    map: {
        width: "100%",
        height: "100%",
    },
})

export default Map
