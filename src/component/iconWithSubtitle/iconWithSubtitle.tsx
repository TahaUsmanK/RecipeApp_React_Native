import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const IconWithSubtitle = ({
  iconName,
  subtitle,
  onPress,
}: {
  iconName: string;
  subtitle: string;
  onPress: () => void;
}) => {
  return (
    <View style={{alignItems: 'center', marginLeft: 10, marginRight: 10}}>
      <Icon.Button
        name={iconName}
        onPress={onPress}
        color="black"
        backgroundColor="transparent"
        iconStyle={{margin: 10}}
        underlayColor="white"
      />
      <Text
        style={{
          flexDirection: 'column',
          textAlign: 'center',
          flexWrap: 'wrap',
        }}>
        {subtitle}
      </Text>
    </View>
  );
};

export default IconWithSubtitle;
