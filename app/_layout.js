import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Text } from 'react-native';


// SplashScreen.preventAutoHideAsync()
const Layout = () => {
    // const [fontsloaded] = useFonts({
    //     DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    //     DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    //     DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    // })

    // const onLayoutRootView = useCallback(async () => {
    //     if (fontsloaded) {
    //         await SplashScreen.hideAsync()
    //     }
    // }, [fontsloaded])

    // if (!fontsloaded) {
    //     return <Text>Loading...</Text>
    // }
    return <Stack />;
}

export default Layout;