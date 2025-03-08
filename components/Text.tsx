import { Text as RNText, TextProps, StyleSheet } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';

interface CustomTextProps extends TextProps {
  children?: React.ReactNode;
  fontFace?: 'Regular' | 'Bold' | 'Italic' | 'BoldItalic';
}

const Text: React.FC<CustomTextProps> = ({ children, style, ...props }) => {
  const [loaded] = useFonts({
    'NotoSans-Regular': require('@/assets/fonts/Noto_Sans/static/NotoSans-Regular.ttf'),
    'NotoSans_Condensed-Regular': require('@/assets/fonts/Noto_Sans/static/NotoSans_Condensed-Regular.ttf'),
    'NotoSans-Bold': require('@/assets/fonts/Noto_Sans/static/NotoSans-Bold.ttf'),
    'NotoSans-Italic': require('@/assets/fonts/Noto_Sans/static/NotoSans-Italic.ttf'),
    'NotoSans-BoldItalic': require('@/assets/fonts/Noto_Sans/static/NotoSans-BoldItalic.ttf'),  
  });

  if (!loaded) {
    return null;
  }

  return (
    <RNText style={{ fontFamily: 'NotoSans_Condensed-Regular', fontSize: 20 }} {...props}>
      {children}
    </RNText>
  );
};


export default Text;