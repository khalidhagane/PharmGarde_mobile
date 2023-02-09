import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import PageOne from "./screens/PageOne"
import PageTwo from "./screens/PageTwo"
import PageThree from "./screens/PageThree"
import PageFour from "./screens/PageFour"
import Map from "./screens/Map"
import { DataProvider } from "./context/DataContext"
import PageSearch from "./screens/PageSearch"
import PharmacieDetails from "./screens/PharmacieDetails"

const stack = createNativeStackNavigator()

export default function AppNavigator() {
    return (
        <DataProvider>
            <NavigationContainer>
                <stack.Navigator
                    initialRouteName="PageOne"
                    screenOptions={{
                        headerShown: false,
                        animationTypeForReplace: "push",
                        animation: "slide_from_right",
                        gestureEnabled: true,
                    }}
                >
                    <stack.Screen name="PageOne" component={PageOne} />
                    <stack.Screen name="PageTwo" component={PageTwo} />
                    <stack.Screen name="PageThree" component={PageThree} />
                    <stack.Screen name="PageFour" component={PageFour} />
                    <stack.Screen name="Map" component={Map} />
                    <stack.Screen name="PageSearch" component={PageSearch} />
                    <stack.Screen name="PharmacyDetails" component={PharmacieDetails} />
                </stack.Navigator>
            </NavigationContainer>
        </DataProvider>
    )
}
