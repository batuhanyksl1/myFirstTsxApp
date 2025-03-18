import {
  StyleSheet,
  Text,
  Pressable,
  TextStyle,
  useColorScheme,
  ViewStyle,
  ActivityIndicator,
  View,
} from 'react-native';
import * as React from 'react';
import colors from '@/color';
import { Link } from 'expo-router';
import BLink from './BLink';

type ButtonSize = 'xsm' | 'sm' | 'md' | 'lg' | 'xlg';
type ButtonVariant = 'filled' | 'outline' | 'ghost' | 'accept' | 'decline';

interface IPushButton {
  href: string;
  loading?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function PushButton({
  href,
  loading = false,
  disabled = false,
  children,
  size = 'md',
  variant = 'filled',
  style,
  textStyle,
}: IPushButton) {
  const sizeStyles: Record<
    ButtonSize,
    { height: number; fontSize: number; padding: number }
  > = {
    xsm: { height: 28, fontSize: 12, padding: 8 },
    sm: { height: 36, fontSize: 14, padding: 10 },
    md: { height: 44, fontSize: 16, padding: 12 },
    lg: { height: 52, fontSize: 18, padding: 14 },
    xlg: { height: 60, fontSize: 20, padding: 16 },
  };

  const colorScheme = useColorScheme();

  function getTextColor(): string {
    switch (variant) {
      case 'filled':
        return colors.secondary.main;
      case 'outline':
        return colors.primary.main;
      case 'accept':
        return colors.secondary.main;
      case 'decline':
        return colors.secondary.main;
      default:
        return 'black';
    }
  }

  function getVariantStyle(): {
    backgroundColor: string;
    borderColor?: string;
    borderWidth?: number;
  } {
    switch (variant) {
      case 'filled':
        return {
          backgroundColor: colors.primary.main,
          borderWidth: 1,
          borderColor: colors.primary.main,
        };
      case 'outline':
        return {
          backgroundColor: colors.secondary.main,
          borderWidth: 1,
          borderColor: colors.primary.main,
        };
      case 'accept':
        return {
          backgroundColor: colors.accept.main,
          borderWidth: 1,
          borderColor: colors.accept.main,
        };
      case 'decline':
        return {
          backgroundColor: colors.decline.main,
          borderWidth: 1,
          borderColor: colors.decline.main,
        };
      default:
        return {
          backgroundColor: 'transparent',
          borderColor: 'black',
          borderWidth: StyleSheet.hairlineWidth,
        };
    }
  }

  return (
    <Link href={href as any}>
      <Pressable
        style={[
          {
            borderRadius: 25,
            height: sizeStyles[size].height,
            paddingHorizontal: sizeStyles[size].padding,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          },
          getVariantStyle(),
          style, // Ensure this is last to override other styles if provided
        ]}
      >
        <View style={style}>
          <Text
            style={[
              {
                fontSize: sizeStyles[size].fontSize,
                color: getTextColor(),
              },
              textStyle,
            ]}
          >
            {loading ? <ActivityIndicator /> : children}
          </Text>
        </View>
      </Pressable>
    </Link>
  );
}

// her opsiyon aynı parametreleri muhakkak alacak ise o zaman record ile kullan
// eğer her opsiyon yok ise get bla bla fonksiyonu ile yapabiliriz
