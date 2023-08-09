import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  top_header_container: {
    backgroundColor: '#4F1C57',
    justifyContent: 'center',
  },
  top_header: {
    margin: 10,
    padding: 10,
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    fontWeight: '400',
  },
  company_card_container: {
    flex: 1,
    backgroundColor: 'white',
  },
  company_card_inner_container: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: '#4F1C57',
    backgroundColor: '#FFFFFF',
  },
  company_title: {
    flex: 1,
    fontSize: 24,
    fontWeight: '600',
    color: '#472256',
    textAlign: 'center',
  },
  info_container: {
    flex: 1,
    marginBottom: 5,
    marginTop: 8,
    paddingLeft: 10
  },
  info_title: {
    color: '#878787',
    fontSize: 16,
    fontWeight: '400',
  },
  info_describe: {
    color: '#000000',
    fontSize: 15,
    fontWeight: '400',
  },
  info_button_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  describe_button: {justifyContent: 'center'},
});
