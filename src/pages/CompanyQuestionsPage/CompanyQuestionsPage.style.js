import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
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
  cat_button_container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 7,
  },
  cat_button_default: {
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    width: 125,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  cat_button_check: {
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#4F1C57',
    width: 150,
    alignItems: 'center',
    backgroundColor: '#4F1C57'
  },
  cat_button_title_default: {color: 'black', fontSize: 18},
  cat_button_title_check: {color: 'white', fontSize: 18, fontWeight: 'bold'},

  /* Soru Componentinin Styleleri */

  question_shell_container: {
    flex: 1,
    marginTop: 20,
    margin: 15,
    paddingTop: 10,
    padding: 5,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: 'white'
  },
  question_number_container: {
    alignItems: 'center',
    position: 'absolute',
    top: -15,
    width: '100%'
  },
  question_number: {
    padding: 5,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 10,
    color: 'white',
    backgroundColor: '#4F1C57',
    fontSize: 18
  },
  answer_saved_button_false: { 
    flex: 1, 
    position: 'absolute', 
    top: -20, 
    right: -15, 
    borderRadius: 50, 
    width: 46, 
    height: 46, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'red', 
  },
  answer_saved_button_true: { 
    flex: 1, 
    position: 'absolute', 
    top: -20, 
    right: -15, 
    borderRadius: 50, 
    width: 46, 
    height: 46, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'green', 
  },

  question_container: { margin: 15 },
  question: { color: 'black', 
    fontSize: 18, 
    textAlign: 'center'
  },
  question_answer_container: { flexDirection: 'row' },
  radiobutton_group_container: { paddingRight: 8, justifyContent: 'center' },
  radiobutton_container: { flexDirection: 'row', alignItems: 'center' },
  radiobutton_title: { fontSize: 18, color: 'black' },
  desc_photo_container: { flex: 1, margin: 5},
  photo_container: {
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },

  // Modal Component
  modal_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal_image_button: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 550,
    height: 550,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal_image: {
    width: 500,
    height: 500,
  }
});
