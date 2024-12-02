import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {TabStackNavigationProp} from '../stacks/TabNavigation/TabNavigation.routes';

export const useNavigateBack = () => {
  const navigation = useNavigation<TabStackNavigationProp>();

  const handleGoBack = useCallback(() => {
    navigation.navigate('CharacterListScreen');
  }, [navigation]);

  return handleGoBack;
};
