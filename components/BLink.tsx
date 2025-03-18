import { View, Text, Pressable, ViewStyle, TextStyle } from 'react-native';
import React from 'react';
import { Link, LinkProps } from 'expo-router';

interface BLinkProps {
  href: LinkProps['href'];
  stil: ViewStyle | ViewStyle[];
  textStyle?: TextStyle;
}

const BLink: React.FC<BLinkProps> = ({ href, stil, textStyle }) => {
  return (
    <Link href={href} asChild>
      <Pressable>
        <View style={stil}>
          <Text style={textStyle}>Giriş Yap</Text>
        </View>
      </Pressable>
    </Link>
  );
};

export default BLink;
