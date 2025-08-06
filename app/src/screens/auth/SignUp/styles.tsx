import { Colors } from '@constants'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 25,
    },
    divider: {
        width: '80%',
        marginTop: 20,
        height: 1,
        backgroundColor: Colors.text,
    }
})

export default styles