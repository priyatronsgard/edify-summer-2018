import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography } from '../../config/styles';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  modalContainer: {
    marginTop: 18,
  },
  container: {
    top: 180,
    marginHorizontal: 25,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 100,
    shadowOffset: {
      height: 20,
      width: 20,
    },
    borderRadius: 7,
  },
  modal: {
    padding: 10,
  },
  title: {
    marginBottom: 10,
    fontSize: 18,
    fontFamily: typography.secFont,
    fontWeight: 'bold',
    paddingLeft: 7,
  },
  textInput: {
    borderColor: colors.lightPurple,
    borderWidth: 1,
    height: 100,
    borderRadius: 7,
    textAlign: 'left',
    padding: 2,
  },
  button: {
    padding: 10,
    backgroundColor: colors.lightPurple,
    width: width / 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  submit: {
    fontFamily: typography.secFont,
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  close: {
    color: colors.lightPurple,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
