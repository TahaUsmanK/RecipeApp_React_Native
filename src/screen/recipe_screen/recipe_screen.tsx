import React from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import RecipeStyle from '../../style/recipe_style/recipe_style';
import {ScrollView} from 'react-native-gesture-handler';

const RecipeScreen = ({route, navigation}: {route: any; navigation: any}) => {
  const {
    recipeName,
    recipeImage,
    calories,
    ingridients,
    mealType,
    dishType,
    cuisineType,
  } = route.params;

  return (
    <ScrollView>
      <View>
        <View style={RecipeStyle.appBar}>
          <Icon.Button
            name={'arrow-left'}
            color={'black'}
            backgroundColor={'transparent'}
            underlayColor={'transparent'}
            onPress={() => navigation.goBack()}
          />
          <Text style={RecipeStyle.recipeName}>{recipeName}</Text>
        </View>
        <Image
          style={RecipeStyle.recipeImage}
          source={{
            uri: recipeImage,
          }}
        />
        <View style={RecipeStyle.calories}>
          <Text>{calories}</Text>
          <Text>Calories</Text>
          <Icon name={'fire'} color={'orange'} size={30}></Icon>
        </View>
        <Text style={RecipeStyle.recipeCard}>INGRIDIENTS: {ingridients}</Text>
        <Text style={RecipeStyle.recipeCard}>MEAL TYPE: {mealType}</Text>
        <Text style={RecipeStyle.recipeCard}>DISH TYPE: {dishType}</Text>
        <Text style={RecipeStyle.recipeCard}>CUISINE TYPE: {cuisineType}</Text>
      </View>
    </ScrollView>
  );
};

export default RecipeScreen;
