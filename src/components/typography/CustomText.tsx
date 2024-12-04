import {StyleSheet, Text, TextProps} from 'react-native';

type FontFamily = 'Inter' | 'DM_Mono';
type FontWeight = 400 | 500;

interface CustomTextProps extends TextProps {
  fontFamily?: FontFamily;
  fontWeight?: FontWeight;
  children: React.ReactNode;
}

export const CustomText = ({
  fontFamily = 'Inter',
  fontWeight = 400,
  children,
  style,
  ...props
}: CustomTextProps) => {
  const fontStyles = {
    fontFamily: fontFamily,
    fontWeight: fontWeight,
  };

  return (
    <Text style={[styles.text, fontStyles, style]} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});
