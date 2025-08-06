import { Colors } from "@constants";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Domine-Bold": require("@assets/fonts/Domine-Bold.ttf"),
    "Domine-Regular": require("@assets/fonts/Domine-Regular.ttf"),
    "Domine-Medium": require("@assets/fonts/Domine-Medium.ttf"),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: 'fade',
        contentStyle:{
          backgroundColor: Colors.background
        }
      }}
    >
      <Stack.Screen name="src/screens/side/SplashScreen" />
      <Stack.Screen name="src/screens/side/StartScreen" />
      <Stack.Screen name="src/screens/main/Home" />
      <Stack.Screen name="src/screens/auth/SignIn" />
      <Stack.Screen name="src/screens/auth/SignUp" />
    </Stack>
  )
}