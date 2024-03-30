import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native'
import { StackRoutes } from "./stack.routes";

export function Routes() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <StackRoutes />
            </NavigationContainer>
        </GestureHandlerRootView>
    )
}