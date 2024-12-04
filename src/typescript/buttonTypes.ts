import {GestureResponderEvent, ViewStyle} from 'react-native';

export interface PrimaryButtonProps {
  children: React.ReactNode;
  filled?: boolean;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  icon?: React.ReactNode;
  width?: 'small' | 'medium' | 'big';
}
