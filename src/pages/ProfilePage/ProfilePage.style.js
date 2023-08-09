import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  constainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  logout_btn_container: {justifyContent: 'center', alignItems: 'center'},
  logout_btn: {
    margin: 10,
    padding: 10,
    alignItems: 'center',
    width: 100,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'purple',
  },
  logout_btn_text: {fontSize: 24, color: 'black'},
});
