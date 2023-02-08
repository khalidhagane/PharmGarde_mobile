import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import PageOne from "./screens/PageOne"
import PageTwo from "./screens/PageTwo"
import PageThree from "./screens/PageThree"
import PageFour from "./screens/PageFour"
import PharmacieDetails from "./screens/PharmacieDetails"

const stack = createNativeStackNavigator()

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <stack.Navigator
                initialRouteName="pharmacieDetails"
                screenOptions={{
                    headerShown: false,
                    animationTypeForReplace: "push",
                    animation: "slide_from_right",
                    gestureEnabled: true,
                }}
            >
                <stack.Screen name="pharmacieDetails" component={PharmacieDetails} />
                <stack.Screen name="PageOne" component={PageOne} />
                <stack.Screen name="PageTwo" component={PageTwo} />
                <stack.Screen name="PageThree" component={PageThree} />
                <stack.Screen name="PageFour" component={PageFour} />
            </stack.Navigator>
        </NavigationContainer>
    )
}
