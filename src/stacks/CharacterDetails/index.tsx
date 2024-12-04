import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {tabScreenOptions} from '../TabNavigation/config/tabNavigationOptions';
import {CharacterDetailsStackRoutes} from './CharacterDetails.routes';
import {CharacterDetailsScreen} from './screens/CharacterDetails/CharacterDetails.screen';

const Stack = createNativeStackNavigator();

export const CharacterDetailsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={CharacterDetailsStackRoutes.CharacterDetailsScreen}
        component={CharacterDetailsScreen}
        options={tabScreenOptions}
      />
    </Stack.Navigator>
  );
};
