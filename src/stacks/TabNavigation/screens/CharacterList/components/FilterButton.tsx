import {Text} from 'react-native';
import {PrimaryButton} from '../../../../../components/buttons/PrimaryButton';

interface FilterButtonProps {
  onPress: () => void;
}

export const FilterButton: React.FC<FilterButtonProps> = ({onPress}) => (
  <PrimaryButton filled={true} onPress={onPress}>
    <Text>FILTER</Text>
  </PrimaryButton>
);
