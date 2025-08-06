import { Button, FloatingLabelInput, UnderLineText } from '@components'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { View } from 'react-native'
import styles from './styles'
const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  return (
    <View style={styles.container}>
      <FloatingLabelInput
        value={email}
        onChangeText={setEmail}
        placeholder={'Email'}
        leftIcon={'mail'}
        keyboardType={'email-address'}
      />
      <FloatingLabelInput
        value={password}
        onChangeText={setPassword}
        placeholder={'Password'}
        secureTextEntry={true}
        leftIcon={'lock-closed'}
        rightIcon={true}
      />
      <Button
        title={'Sign In'}
        onPress={() => {}}
        variant={'secondary'}
        buttonStyle={{
          minWidth: '60%',
        }}
        loading={true}
      />
      <UnderLineText text={'Don\'t have an account?'} onPress={() => {
        router.push('/src/screens/auth/SignUp')
      }} />
      <UnderLineText text={'Forgot Password?'} onPress={() => {}} />
      <View style={styles.divider}/>
      <Button
        title={'Sign In with Google'}
        onPress={() => {}}
        variant={'secondary'}
        leftImage={require('@assets/image/google.png')}
        buttonStyle={{
          marginTop: 25
        }}
        loading={true}
      />
    </View>
  )
}

export default SignIn