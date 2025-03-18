import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  View,
  TouchableOpacityProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

// Button çeşitleri için tip tanımı
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';

// Button boyutları için tip tanımı
export type ButtonSize = 'small' | 'medium' | 'large';

// CustomButton props arayüzü
export interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  loadingText?: string;
}

// Tema renkleri - normalde bir tema dosyasından alınır
const COLORS = {
  primary: '#007AFF',
  secondary: '#5856D6',
  white: '#FFFFFF',
  black: '#000000',
  grey: '#A9A9A9',
  lightGrey: '#E5E5E5',
  transparent: 'transparent',
};

// CustomButton komponenti
const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  buttonStyle,
  textStyle,
  loadingText,
  onPress,
  ...rest
}) => {
  // Button arka plan rengini belirleme
  const getBackgroundColor = () => {
    if (disabled) return COLORS.lightGrey;

    switch (variant) {
      case 'primary':
        return COLORS.primary;
      case 'secondary':
        return COLORS.secondary;
      case 'outline':
      case 'text':
        return COLORS.transparent;
      default:
        return COLORS.primary;
    }
  };

  // Button metin rengini belirleme
  const getTextColor = () => {
    if (disabled) return COLORS.grey;

    switch (variant) {
      case 'primary':
      case 'secondary':
        return COLORS.white;
      case 'outline':
      case 'text':
        return variant === 'outline' ? COLORS.primary : COLORS.primary;
      default:
        return COLORS.white;
    }
  };

  // Button kenar çizgisini belirleme
  const getBorderColor = () => {
    if (disabled) return COLORS.lightGrey;

    return variant === 'outline' ? COLORS.primary : getBackgroundColor();
  };

  // Button boyutunu belirleme
  const getButtonHeight = () => {
    switch (size) {
      case 'small':
        return 32;
      case 'medium':
        return 44;
      case 'large':
        return 54;
      default:
        return 44;
    }
  };

  // Button padding'ini belirleme
  const getButtonPadding = () => {
    switch (size) {
      case 'small':
        return { paddingHorizontal: 10 };
      case 'medium':
        return { paddingHorizontal: 16 };
      case 'large':
        return { paddingHorizontal: 24 };
      default:
        return { paddingHorizontal: 16 };
    }
  };

  // Text boyutunu belirleme
  const getTextSize = () => {
    switch (size) {
      case 'small':
        return 12;
      case 'medium':
        return 14;
      case 'large':
        return 16;
      default:
        return 14;
    }
  };

  // Button stil nesnesi
  const buttonStyles = [
    styles.button,
    {
      backgroundColor: getBackgroundColor(),
      borderColor: getBorderColor(),
      borderWidth: variant === 'outline' ? 1 : 0,
      height: getButtonHeight(),
      width: fullWidth ? '100%' : 'auto',
    },
    getButtonPadding(),
    buttonStyle,
  ];

  // Text stil nesnesi
  const textStyles = [
    styles.text,
    {
      color: getTextColor(),
      fontSize: getTextSize(),
    },
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled || isLoading}
      activeOpacity={0.7}
      {...rest}
    >
      <View style={styles.contentContainer}>
        {isLoading ? (
          <>
            <ActivityIndicator
              size="small"
              color={getTextColor()}
              style={styles.loadingIndicator}
            />
            {loadingText ? <Text style={textStyles}>{loadingText}</Text> : null}
          </>
        ) : (
          <>
            {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
            <Text style={[textStyles, textStyle]}>{title}</Text>
            {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
  loadingIndicator: {
    marginRight: 8,
  },
});

export default CustomButton;
