import {StyleSheet} from 'react-native';

const HomeStyle = StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 16,
  },
  activityIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    height: '86%',
  },
  recipeCard: {
    margin: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'grey',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  recipeName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default HomeStyle;
