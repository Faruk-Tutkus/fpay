import { Animation, Button } from '@components';
import { Colors } from '@constants';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import styles from './styles';

const StartScreen = () => {
  const gradientColors = [Colors.background, Colors.text, Colors.background] as const
  const router = useRouter()
  return (
    <LinearGradient
      colors={gradientColors}
      locations={[0, 0.5, 1]}
      style={{ flex: 1 }}
    >
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Animation
          src={"https://lottie.host/402a58c9-36f2-420a-802e-ca4ed35f5679/SXG4LHC3ZQ.lottie"}
          contentStyle={{
            width: 250,
            height: 250,
            marginTop: 75
          }}
        />
        <Animated.View entering={FadeInDown.delay(1000)} style={{ gap: 10, marginTop: 100 }}>
          <Button
            title="Sign In"
            onPress={() => { router.push('/src/screens/auth/SignIn') }}
            variant='secondary'
          />
          <Button
            title="Sign Up"
            onPress={() => {  router.push('/src/screens/auth/SignUp') }}
            variant='primary'
          />
          <View style={styles.textContainer}>
            <Text style={styles.text}>
              By continuing, you agree to our <Text onPress={() => { }} style={[styles.textLink, { textDecorationLine: 'underline' }]}>Terms of Use</Text> and <Text onPress={() => { }} style={[styles.textLink, { textDecorationLine: 'underline' }]}>Privacy Policy</Text>.
            </Text>
          </View>
        </Animated.View>
      </View>
    </LinearGradient>
  )
}

export default StartScreen