import React from 'react';
import {Text, View} from 'react-native';
import HomeScreen from './src/screen/home_screen.tsx/home_screen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import RecipeScreen from './src/screen/recipe_screen/recipe_screen';

function App(): React.JSX.Element {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Recipe"
          component={RecipeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
