import {
  GestureResponderEvent,
  Pressable,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from './PrimaryButton.styled';

interface PrimaryButtonProps {
  children: React.ReactNode;
  filled?: boolean;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  icon?: React.ReactNode;
  width?: 'small' | 'medium' | 'big';
}

export const PrimaryButton = ({
  children,
  filled = false,
  onPress,
  style,
  icon,
  width = 'big',
}: PrimaryButtonProps) => (
  <Pressable
    style={[
      styles.button,
      styles[width],
      filled ? styles.filled : styles.outlined,
      style,
    ]}
    onPress={onPress}>
    <View style={styles.buttonContent}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <Text
        style={[styles.text, filled ? styles.filledText : styles.outlinedText]}>
        {children}
      </Text>
    </View>
  </Pressable>
);
