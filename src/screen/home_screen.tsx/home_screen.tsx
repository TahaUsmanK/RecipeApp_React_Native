import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  View,
} from 'react-native';
import APIService from '../../service/api_service/api_service';
import {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeStyle from '../../style/home_style/home_style';
import TextInputStyle from '../../style/textInput_Style/textInput_Style';
import RecipeStyle from '../../style/recipe_style/recipe_style';
import IconWithSubtitle from '../../component/iconWithSubtitle/iconWithSubtitle';
import cuisineTypeArray from '../../data/cuisineTypeArray/cuisineTypeArray';
import DietArray from '../../data/dietArray/dietArray';
import MealTypeArray from '../../data/mealTypeArray/mealTypeArray';
import {ScrollView} from 'react-native-gesture-handler';
import dietTypeArray from '../../data/dietTypeArray/dietTypeArray';

const HomeScreen = (props: any) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [textInput, setTextInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [cuisineType, setCuisineType] = useState(
    cuisineTypeArray[1].regionOrCountry,
  );
  const [DietType, setDietType] = useState(DietArray[1].name);
  const [MealType, setMealType] = useState(MealTypeArray[2].mealType);
  const [Diet, setDiet] = useState(DietArray[3].name);

  const submitForm = async () => {
    if (!textInput) {
      Alert.alert('Please enter a recipe name');
      return;
    }
    setIsLoading(true);
    setErrorMessage('');
    setData([]);
    await fetchData();
  };
  const fetchData = async (
    cusienseType = cuisineType,
    diet = Diet,
    mealType = MealType,
    dietType = DietType,
  ) => {
    try {
      const response = await APIService(
        textInput,
        cusienseType,
        diet,
        mealType,
        dietType,
      );
      if (response && response.hits) {
        const recipeData = response.hits.map(
          (hit: {recipe: any}) => hit.recipe,
        );
        setData(recipeData);
      } else {
        setErrorMessage('No recipes found for your search criteria.');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred while fetching recipes.');
    } finally {
      if (data) {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView style={{flex: 1}}>
      <View style={HomeStyle.main}>
        <View style={HomeStyle.appBarView}>
          <Text style={HomeStyle.searchText}>Search</Text>
          <Text style={HomeStyle.text}>for recipes</Text>
          <View style={HomeStyle.appBar}>
            <TextInput
              value={textInput}
              onChangeText={setTextInput}
              style={TextInputStyle.textInput}
              placeholder="Search"
            />
            <Icon.Button
              name="search"
              onPress={submitForm}
              backgroundColor="transparent"
              color="black"
              underlayColor="transparent"
            />
          </View>
        </View>
        <View>
          <View>
            <Text style={HomeStyle.heading1}>Meal Type</Text>
            <FlatList
              data={MealTypeArray}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <IconWithSubtitle
                  iconName={item.iconName}
                  subtitle={item.mealType}
                  onPress={async () => {
                    setIsLoading(true);
                    await fetchData(undefined, undefined, item.mealType);
                    setIsLoading(false);
                  }}
                />
              )}
            />
          </View>
          <View style={{borderWidth: 0.5, borderColor: 'grey'}}>
            <Text style={HomeStyle.heading1}>Cuisine Type</Text>

            <FlatList
              data={cuisineTypeArray}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <IconWithSubtitle
                  iconName={item.iconName}
                  subtitle={item.regionOrCountry}
                  onPress={async () => {
                    setIsLoading(true);
                    await fetchData(item.regionOrCountry);
                    setIsLoading(false);
                  }}
                />
              )}
            />
          </View>
          <View style={{borderWidth: 0.5, borderColor: 'grey'}}>
            <Text style={HomeStyle.heading1}>Diet</Text>

            <FlatList
              data={DietArray}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <IconWithSubtitle
                  iconName={item.iconName}
                  subtitle={item.name}
                  onPress={async () => {
                    setIsLoading(true);
                    await fetchData(undefined, item.name);
                    setIsLoading(false);
                  }}
                />
              )}
            />
          </View>
          <View style={{borderWidth: 0.5, borderColor: 'grey'}}>
            <Text style={HomeStyle.heading1}>Diet Type</Text>

            <FlatList
              data={dietTypeArray}
              horizontal={true}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <IconWithSubtitle
                  iconName={item.iconName}
                  subtitle={item.name}
                  onPress={async () => {
                    setIsLoading(true);
                    await fetchData(undefined, undefined, undefined, item.name);
                    setIsLoading(false);
                  }}
                />
              )}
            />
          </View>
          {isLoading ? (
            <ActivityIndicator
              size="large"
              style={HomeStyle.activityIndicator}
            />
          ) : errorMessage ? (
            <Text>{errorMessage}</Text>
          ) : (
            data && (
              <FlatList
                scrollEnabled={false}
                style={{flex: 1}}
                data={data}
                maxToRenderPerBatch={10}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <View style={RecipeStyle.recipeCard} key={item.label}>
                    <Text
                      style={{color: 'white'}}
                      onPress={() =>
                        props.navigation.push('Recipe', {
                          recipeName: item.label,
                          recipeImage: item.image,
                          calories: item.calories,
                          ingridients: item.ingredientLines,
                          mealType: item.mealType,
                          dishType: item.dishType,
                          cuisineType: item.cuisineType,
                          totalWeight: item.totalWeight,
                        })
                      }>
                      {item.label}
                    </Text>
                    <Image
                      source={{uri: item.image}}
                      style={RecipeStyle.recipeImage}
                    />
                  </View>
                )}
              />
            )
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
