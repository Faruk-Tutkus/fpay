import { Colors } from '@constants'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 60,
        borderWidth: 2,
        borderColor: Colors.border,
        borderRadius: 12,
        alignItems: 'center',
        flexDirection: 'row',
    },
    leftIcon: {
        marginLeft: 20,
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 15,
        fontFamily: 'Domine-Regular',
        color: Colors.text,
    },
    rightIcon: {
        marginRight: 20,
        marginLeft: 10,
    }
})

export default styles