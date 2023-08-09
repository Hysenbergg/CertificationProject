import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    logo_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    maku_logo:{
        width: Dimensions.get('window').width / 1.5,
        height: Dimensions.get('window').height / 3.5,
        resizeMode: 'contain'
    },
    bottom_container: {
        flex: 1,
        alignItems: 'center'
    },
    button_container: {
        flex: 1,
        justifyContent: 'center',
        width: Dimensions.get('window').width / 2
    },
    button: {
        margin: 10,
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: 'darkblue'
    },
    button_text: {
        color: 'white',
        fontSize: 24,
    },
    haytek_logo_container: {
        
    },
    haytek_logo: {
        width: Dimensions.get('window').width / 2.5,
        height: Dimensions.get('window').height / 7,
        resizeMode: 'contain'
    }
});