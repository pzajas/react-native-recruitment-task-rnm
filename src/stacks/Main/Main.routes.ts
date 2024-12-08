import {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CharacterDetailsStackParamList} from '../CharacterDetails/CharacterDetails.routes';
import {TabNavigationStackParamList} from '../TabNavigation/TabNavigation.routes';

export type MainStackParamList = {
  TabNavigationStack: NavigatorScreenParams<TabNavigationStackParamList>;
  CharacterDetailsStack: NavigatorScreenParams<CharacterDetailsStackParamList>;
};

export type MainStackNavigationProp = NativeStackNavigationProp<
  MainStackParamList,
  'CharacterDetailsStack'
>;

export const MainStackRoutes: {
  [route in keyof MainStackParamList]: route;
} = {
  TabNavigationStack: 'TabNavigationStack',
  CharacterDetailsStack: 'CharacterDetailsStack',
};
