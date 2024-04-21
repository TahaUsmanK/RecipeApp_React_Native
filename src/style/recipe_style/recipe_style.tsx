import {StyleSheet} from 'react-native';

const RecipeStyle = StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 16,
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
    paddingRight: '12%',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey',
  },
  recipeImage: {
    width: '100%',
    height: 300,
    alignSelf: 'center',
  },
  calories: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    backgroundColor: 'grey',
    borderRadius: 8,
  },
});

export default RecipeStyle;
