import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
import {Footer} from '../../components/footer';
import {SCREENS} from '../../constants/screenNames';
import {screenOptions, tabScreenOptions} from './config/tabNavigationOptions';
import {CharacterListScreen} from './screens/CharacterList';
import {FavoriteCharactersScreen} from './screens/FavoriteCharacters';
import {styles} from './TabNavigationStack.styled';

const Tab = createBottomTabNavigator();

export const TabNavigationStack = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name={SCREENS.ALL_CHARACTERS}
          component={CharacterListScreen}
          options={tabScreenOptions}
        />
        <Tab.Screen
          name={SCREENS.LIKED_CHARACTERS}
          component={FavoriteCharactersScreen}
          options={tabScreenOptions}
        />
      </Tab.Navigator>
      <Footer />
    </View>
  );
};
