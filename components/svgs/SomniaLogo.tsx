import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import {
  Svg,
  Path,
  Circle,
  G,
  Defs,
  RadialGradient,
  Stop,
  LinearGradient,
} from 'react-native-svg';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';

const SomniaLogo: React.FC = () => {
  // Font yükleme
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
  });

  // Animasyon değerleri
  const cloudOpacity = useRef(new Animated.Value(0)).current;
  const cloudMovement = useRef(new Animated.Value(0)).current;
  const sunOpacity = useRef(new Animated.Value(0)).current;
  const sunScale = useRef(new Animated.Value(0.5)).current;
  const rayOpacity = useRef(new Animated.Value(0)).current;
  const rayRotation = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animasyon dizisini başlat
    Animated.sequence([
      // Bulutların belirmesi
      Animated.timing(cloudOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
        easing: Easing.ease,
      }),

      // Bulutların hafif hareketi
      Animated.parallel([
        Animated.timing(cloudMovement, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: true,
          easing: Easing.inOut(Easing.sin),
        }),

        // Güneşin belirmesi
        Animated.timing(sunOpacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
          delay: 500,
        }),

        // Güneşin büyümesi
        Animated.timing(sunScale, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
          easing: Easing.elastic(1),
        }),
      ]),

      // Güneş ışınlarının parlaması
      Animated.timing(rayOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),

      // Güneş ışınlarının dönmesi
      Animated.parallel([
        Animated.timing(rayRotation, {
          toValue: 1,
          duration: 20000,
          useNativeDriver: true,
          easing: Easing.linear,
        }),

        // "Somnia" yazısının belirmesi
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
          delay: 300,
          easing: Easing.ease,
        }),
      ]),
    ]).start();

    // Sürekli dönen ışınlar için
    Animated.loop(
      Animated.timing(rayRotation, {
        toValue: 1,
        duration: 20000,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ).start();
  }, []);

  // Animasyon çevirilerini hesapla
  const cloudTranslateX = cloudMovement.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, 5, 0],
  });

  const sunTranslateY = sunOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [10, 0],
  });

  const spinRotation = rayRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  if (!fontsLoaded) {
    return <View style={styles.container} />;
  }

  return (
    <View style={styles.container}>
      {/* Ana SVG konteynırı */}
      <View style={styles.svgContainer}>
        {/* Bulutlar */}
        <Animated.View
          style={[
            styles.cloudsContainer,
            {
              opacity: cloudOpacity,
              transform: [{ translateX: cloudTranslateX }],
            },
          ]}
        >
          <Svg width="200" height="120" viewBox="0 0 200 120">
            <Defs>
              <LinearGradient
                id="cloudGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <Stop offset="0%" stopColor="#f1f5ff" />
                <Stop offset="100%" stopColor="#d8e1ff" />
              </LinearGradient>
            </Defs>
            {/* Sol üst bulut */}
            <Path
              d="M40,50 C40,36.2 51.2,25 65,25 C72.6,25 79.4,28.4 84,33.8 C87.8,25.8 96.2,20 106,20 C119.8,20 131,31.2 131,45 C131,46.4 130.8,47.8 130.6,49 C138.8,50.2 145,57.4 145,66 C145,75.4 137.4,83 128,83 L65,83 C54,83 45,74 45,63 C45,59.4 46,56 47.8,53.2 C44.6,52.6 42,51 40,48.8 L40,50 Z"
              fill="url(#cloudGradient)"
            />
            {/* Sağ alt bulut */}
            <Path
              d="M120,90 C120,80.1 128.1,72 138,72 C143.5,72 148.4,74.4 151.7,78.2 C154.4,72.5 160.4,68.5 167.5,68.5 C177.4,68.5 185.5,76.6 185.5,86.5 C185.5,87.5 185.4,88.5 185.2,89.3 C191.1,90.2 195.5,95.4 195.5,101.8 C195.5,108.6 190,114.1 183.2,114.1 L138,114.1 C130,114.1 123.5,107.6 123.5,99.6 C123.5,97 124.3,94.5 125.6,92.5 C123.2,92.1 121.3,90.9 120,89.3 L120,90 Z"
              fill="url(#cloudGradient)"
              opacity="0.8"
            />
            {/* Sol alt bulut */}
            <Path
              d="M5,100 C5,90.1 13.1,82 23,82 C28.5,82 33.4,84.4 36.7,88.2 C39.4,82.5 45.4,78.5 52.5,78.5 C62.4,78.5 70.5,86.6 70.5,96.5 C70.5,97.5 70.4,98.5 70.2,99.3 C76.1,100.2 80.5,105.4 80.5,111.8 C80.5,118.6 75,124.1 68.2,124.1 L23,124.1 C15,124.1 8.5,117.6 8.5,109.6 C8.5,107 9.3,104.5 10.6,102.5 C8.2,102.1 6.3,100.9 5,99.3 L5,100 Z"
              fill="url(#cloudGradient)"
              opacity="0.6"
            />
          </Svg>
        </Animated.View>

        {/* Güneş ve Işınları */}
        <Animated.View
          style={[
            styles.sunContainer,
            {
              opacity: sunOpacity,
              transform: [{ translateY: sunTranslateY }, { scale: sunScale }],
            },
          ]}
        >
          <Svg width="180" height="180" viewBox="0 0 180 180">
            <Defs>
              <RadialGradient
                id="sunGradient"
                cx="50%"
                cy="50%"
                rx="50%"
                ry="50%"
                fx="50%"
                fy="50%"
              >
                <Stop offset="0%" stopColor="#FFEF5A" />
                <Stop offset="100%" stopColor="#FFB344" />
              </RadialGradient>
            </Defs>
            {/* Güneş Işınları */}
            <Animated.View
              style={{
                position: 'absolute',
                width: 180,
                height: 180,
                opacity: rayOpacity,
                transform: [{ rotate: spinRotation }],
              }}
            >
              <Svg width="180" height="180" viewBox="0 0 180 180">
                <G>
                  {Array.from({ length: 12 }).map((_, i) => (
                    <Path
                      key={i}
                      d={`M90,25 L90,5 M90,175 L90,155 M155,90 L175,90 M5,90 L25,90 M137,43 L151,29 M29,151 L43,137 M137,137 L151,151 M29,29 L43,43`}
                      stroke="#FFD080"
                      strokeWidth="4"
                      strokeLinecap="round"
                      transform={`rotate(${i * 30} 90 90)`}
                    />
                  ))}
                </G>
              </Svg>
            </Animated.View>

            {/* Güneş Diski */}
            <Circle cx="90" cy="90" r="35" fill="url(#sunGradient)" />
          </Svg>
        </Animated.View>

        {/* Somnia Yazısı */}
        <Animated.View
          style={[
            styles.textContainer,
            {
              opacity: textOpacity,
            },
          ]}
        >
          <Text style={styles.somniaText}>Somnia</Text>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 240,
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  svgContainer: {
    width: 200,
    height: 200,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cloudsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  sunContainer: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 0,
  },
  textContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    zIndex: 2,
    alignItems: 'center',
  },
  somniaText: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 32,
    color: '#4338ca',
    textShadowColor: 'rgba(255, 255, 255, 0.8)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
});

export default SomniaLogo;
