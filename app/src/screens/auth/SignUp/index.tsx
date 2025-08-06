import { Button, FloatingLabelInput, UnderLineText } from '@components'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import { View } from 'react-native'
import styles from './styles'
const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const router = useRouter()
  return (
    <View style={styles.container}>
      <FloatingLabelInput
        value={name}
        onChangeText={setName}
        placeholder={'Name'}
        leftIcon={'person'}
      />
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
       <FloatingLabelInput
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder={'Confirm Password'}
        secureTextEntry={true}
        leftIcon={'lock-closed'}
        rightIcon={true}
      />
      <Button
        title={'Sign Up'}
        onPress={() => {}}
        variant={'secondary'}
        buttonStyle={{
          minWidth: '60%',
        }}
      />
      <UnderLineText text={'Already have an account?'} onPress={() => {
        router.push('/src/screens/auth/SignIn')
      }} />
      <View style={styles.divider}/>
      <Button
        title={'Sign In with Google'}
        onPress={() => {}}
        variant={'secondary'}
        leftImage={require('@assets/image/google.png')}
        buttonStyle={{
          marginTop: 25
        }}
      />
    </View>
  )
}

export default SignUp