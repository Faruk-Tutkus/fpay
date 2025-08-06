import Icon from '@assets/icons'
import { Colors } from '@constants'
import { useState } from 'react'
import { KeyboardTypeOptions, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'
interface FloatingLabelInputProps {
  value: string,
  onChangeText: (text: string) => void,
  placeholder: string,
  leftIcon?: React.ReactNode,
  rightIcon?: boolean,
  secureTextEntry?: boolean,
  keyboardType?: KeyboardTypeOptions,
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  value,
  onChangeText,
  placeholder,
  leftIcon,
  rightIcon,
  secureTextEntry,
  keyboardType,
}) => {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(secureTextEntry)
  return (
    <View style={styles.container}>
      {leftIcon &&
      <View style={styles.leftIcon}>
        <Icon name={leftIcon as string} size={24} color={Colors.text} type="ionicons" />
      </View>}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={isSecureTextEntry}
        keyboardType={keyboardType}
        style={styles.input}
        autoCapitalize='none'
      />
      {rightIcon &&
      <TouchableOpacity style={styles.rightIcon} onPress={() => {setIsSecureTextEntry(!isSecureTextEntry)}}>
        <Icon name={isSecureTextEntry ? 'eye-off' : 'eye' as string} size={24} color={Colors.text} type="ionicons" />
      </TouchableOpacity>}
    </View>
  )
}

export default FloatingLabelInput