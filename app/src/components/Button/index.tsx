import { Colors } from '@constants';
import { Image } from 'expo-image';
import React from 'react';
import { ActivityIndicator, StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native';
import styles from './styles';


interface ButtonProps {
  title: string
  onPress: () => void
  buttonStyle?: StyleProp<ViewStyle>
  variant?: 'primary' | 'secondary'
  leftImage?: string
  loading?: boolean
}

const Buttton: React.FC<ButtonProps> = ({ title, onPress, buttonStyle, variant = 'primary', leftImage, loading = false }) => {
  return (
    <TouchableOpacity disabled={loading} style={[styles.container, buttonStyle, { backgroundColor: variant === 'primary' ? Colors.background : Colors.text, flexDirection: loading ? 'row-reverse' : 'row' }]} onPress={onPress}>
      {!loading && (
        <>
          {leftImage && <Image source={leftImage} style={styles.leftImage} />}
          <Text style={[styles.text, { color: variant === 'primary' ? Colors.text : Colors.background }]}>{title}</Text>
        </>
      )}
      {loading && <ActivityIndicator size="small" color={Colors.background} style={styles.loading} />}
    </TouchableOpacity>
  )
}

export default Buttton