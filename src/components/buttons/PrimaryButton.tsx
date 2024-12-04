import {Pressable, Text, View} from 'react-native';
import {PrimaryButtonProps} from '../../typescript/buttonTypes';
import {styles} from './PrimaryButton.styled';

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
