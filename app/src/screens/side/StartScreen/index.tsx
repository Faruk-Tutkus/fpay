import { LinearGradient } from 'expo-linear-gradient';
import { Text, View } from 'react-native';


const StartScreen = () => {
  return (
    <LinearGradient
      colors={['#232323', '#232323']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={{flex: 1}}
    >
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'red'}}>StartScreen</Text>
      </View>
    </LinearGradient>
  )
}

export default StartScreen