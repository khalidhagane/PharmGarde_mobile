import { useEffect, useState, useContext } from "react"
import * as Location from "expo-location"
import { DataContext } from "../context/DataContext"

const useLocationPermission = () => {
    const [location, setLocation] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)
    const { data, setData } = useContext(DataContext)

    const getLocation = async () => {
        try {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied")
                return
            }

            let location = await Location.getCurrentPositionAsync({})
            setLocation(location)
            setData({ ...data, location })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getLocation()
    }, [])

    return { location, errorMsg }
}

export default useLocationPermission
