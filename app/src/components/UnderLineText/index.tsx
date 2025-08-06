import { Text, TouchableOpacity } from 'react-native'
import styles from './styles'
interface UnderLineTextProps {
  text: string
  onPress: () => void
}

const UnderLineText: React.FC<UnderLineTextProps> = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default UnderLineText