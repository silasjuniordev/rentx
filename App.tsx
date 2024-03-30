import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import * as SplashScreen from 'expo-splash-screen'
import {
    useFonts,
    Inter_400Regular,
    Inter_500Medium
} from '@expo-google-fonts/inter'
import {
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold
} from '@expo-google-fonts/archivo'

import { SchedulingComplete } from './src/screens/SchedulingComplete';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';

SplashScreen.preventAutoHideAsync()

export default function App() {
    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Archivo_400Regular,
        Archivo_500Medium,
        Archivo_600SemiBold
    })

    if(fontsLoaded) {
        SplashScreen.hideAsync()
    }

    return (
        <ThemeProvider theme={theme}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                {fontsLoaded && <SchedulingComplete />}
            </GestureHandlerRootView>
        </ThemeProvider>
    )
}