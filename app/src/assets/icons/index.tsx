import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StyleProp, TextStyle } from 'react-native';

interface IconProps {
    name: string;
    size?: number;
    color?: string;
    type?: 'ionicons' | 'material-community';
    style?: StyleProp<TextStyle>;
}

const Icon = ({ name, size, color, type, style }: IconProps) => {
  if (type === 'material-community') {
    return (
      <MaterialCommunityIcons name={name as keyof typeof MaterialCommunityIcons.glyphMap} size={size} color={color} style={style} />
    )
  }
  return (
    <Ionicons name={name as keyof typeof Ionicons.glyphMap} size={size} color={color} style={style}/>
  )
}

export default Icon