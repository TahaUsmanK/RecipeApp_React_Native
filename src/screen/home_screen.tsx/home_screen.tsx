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
import RecipeScreen from '../recipe_screen/recipe_screen';

const HomeScreen = (props: any) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [textInput, setTextInput] = useState('');

  const submitForm = async () => {
    if (!textInput) {
      Alert.alert('Please enter a recipe name');
      return;
    }
    setIsLoading(true);
    setData([]);
    await fetchData();
  };
  const fetchData = async () => {
    try {
      const response = await APIService(textInput);
      if (response && response.hits) {
        const recipeData = response.hits.map(
          (hit: {recipe: any}) => hit.recipe,
        );
        setData(recipeData);
        setIsLoading(false);
      } else {
        console.error('Invalid response format');
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <View style={HomeStyle.appBar}>
        <Icon.Button
          name="filter"
          backgroundColor="transparent"
          color="black"
        />
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
      {isLoading ? (
        <ActivityIndicator size="large" style={HomeStyle.activityIndicator} />
      ) : (
        data && (
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                  <View style={HomeStyle.recipeCard} key={item.label}>
                    <Text
                      style={HomeStyle.recipeName}
                      onPress={() =>
                        props.navigation.navigate('Recipe', {
                          recipeName: item.label,
                        })
                      }>
                      {item.label}
                    </Text>
                    <Image
                      source={{uri: item.image}}
                      width={330}
                      height={240}
                    />
                  </View>
                )}
              />
            )}
          />
        )
      )}
    </View>
  );
};

export default HomeScreen;
