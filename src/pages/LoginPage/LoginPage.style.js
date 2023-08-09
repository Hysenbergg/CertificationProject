import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'white'
  },
  logo_container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: 30,
  },
  logo: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 3,
    resizeMode: 'contain'
  },
  custom_seperator_container: {
    flex: 0.4,
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 30,
    margin: 20,
    fontWeight: '400',
    color: '#472256',
  },
  custom_components_container: {
    flex: 1,
  },
  custom_input_container: {
    flex: 0.5,
    justifyContent: 'center'
  },
  button_container: {
    alignItems: 'center',
  },
  button: {
    margin: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#472256',
    width: Dimensions.get('window').width / 2,
    alignItems: 'center'
  },
  button_text: {
    color: 'white',
    fontSize: 18
  }
});
