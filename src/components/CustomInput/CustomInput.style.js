import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        margin: 10,
        marginBottom: 20,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 8, 
        borderColor: '#888888',
        alignItems: 'center',
        paddingRight: 10
    },
    input: {
        flex: 1,
        padding: 10,
        paddingLeft: 10,
        fontSize: 18
    },
    title: {
        position: 'absolute',
        top: -10,
        left: 14,
        backgroundColor: 'white',
        paddingHorizontal: 2,
        fontSize: 15,
        textAlign: 'center',
    }
})