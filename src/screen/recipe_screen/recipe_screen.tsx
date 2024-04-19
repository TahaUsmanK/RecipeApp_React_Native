import React from 'react';
import {View, Text} from 'react-native';

const RecipeScreen = ({route}) => {
  const {recipeName} = route.params;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{recipeName}</Text>
    </View>
  );
};

export default RecipeScreen;
