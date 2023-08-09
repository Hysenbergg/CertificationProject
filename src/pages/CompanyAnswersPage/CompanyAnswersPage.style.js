import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  shell_container: {
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
  cat_button_container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 7,
    marginBottom: 7
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
  cat_button_title_default: {color: 'black', fontSize: 12},
  cat_button_title_check: {color: 'white', fontSize: 12, fontWeight: 'bold'},
  
  // Question Answer Card
  question_answer_shell: {
    flex: 1,
    margin: 15,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    backgroundColor: 'lightgray'
  },
  question_number_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  question_number: {
    backgroundColor: '#4F1C57',
    color: 'white',
    padding: 5,
    borderRadius: 10,
    paddingRight: 20,
    paddingLeft: 20,
    fontSize: 16
  },
  question_inner_container: {
    margin: 5,
  },
  question_container: {
    margin: 5,
  },
  question: {
    fontSize: 18,
    color: 'black',
    marginTop: 5,
    textAlign: 'center'
  },
  answer_desc_container: {
    alignItems: 'flex-start'
  },
  answer_container: {
    margin: 7,
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  answer_title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
  },
  answer: {
    color: 'black',
    fontSize: 18,
  },
  photo_container: {
    flex: 1,
    margin: 7,
    flexDirection: 'row',
  },
  photo_title_container: {
    justifyContent: 'center',
  },
  photo_title: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold', 
  },
  photo_inner_container: {
    flex: 1, 
    alignItems: 'center',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 7
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
