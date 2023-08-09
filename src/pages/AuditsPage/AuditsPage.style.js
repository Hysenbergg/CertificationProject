import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  shell: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
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
  describe_button: {},

  /* Modal - Start */
  modal_container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#BDB8B8',
  },
  modal_top_header_container: {
    marginTop: 10,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modal_top_header: {
    fontSize: 24, 
    color: 'black', 
    fontWeight: '400'
  },
  seperator_container: {
    marginTop: -5
  },
  seperator: {
    borderBottomWidth: 1, 
    borderColor: '#BDB8B8'
  },
  modal_inner_container: {
    marginLeft: 20, 
    marginRight: 20
  },
  modal_info_company_name_container: {
    marginTop: 20,
    marginBottom: 10,
    justifyContent: 'center',
  },
  modal_info_company_name: {
    color: '#472256', 
    fontSize: 24, 
    fontWeight: '400'
  },
  modal_info_container: {
    marginBottom: 10
  },
  modal_info_title: {
    fontSize: 18, 
    color: '#878787'
  },
  modal_info_describe: {
    fontSize: 20, color: 'black'
  },
  modal_button_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal_button: {
    margin: 10,
    padding: 10,
    backgroundColor: '#472256',
    borderRadius: 10,
    width: Dimensions.get('window').width / 2,
    alignItems: 'center',
  },
  modal_button_title: {
    color: 'white',
    fontSize: 24
  }
  /* Modal - Finish */
});
