import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {scale} from '../../config/scale';
import {theme} from '../../styles/theme';

interface PrimaryButtonProps {
  children: React.ReactNode;
  filled?: boolean;
  onPress: (event: GestureResponderEvent) => void;
}

export const PrimaryButton = ({
  children,
  filled = false,
  onPress,
}: PrimaryButtonProps) => (
  <Pressable
    style={[styles.button, filled ? styles.filled : styles.outlined]}
    onPress={onPress}>
    <View style={styles.buttonContent}>
      <Text
        style={[styles.text, filled ? styles.filledText : styles.outlinedText]}>
        {children}
      </Text>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    borderRadius: scale * 22,
    paddingHorizontal: scale * 24,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    height: scale * 34,
  },
  filled: {
    backgroundColor: theme.colors.green.light,
  },
  outlined: {
    borderWidth: 1,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.green.light,
  },
  text: {
    fontSize: scale * 16,
    fontFamily: 'Mono-Regular',
  },
  filledText: {
    color: theme.colors.white,
  },
  outlinedText: {
    color: theme.colors.green.light,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: scale * 8,
  },
});
