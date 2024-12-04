import {useNavigation} from '@react-navigation/native';
import {TabStackNavigationProp} from '../stacks/TabNavigation/TabNavigation.routes';

export const useNavigateBack = () => {
  const navigation = useNavigation<TabStackNavigationProp>();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return handleGoBack;
};
