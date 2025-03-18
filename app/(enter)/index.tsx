import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  Dimensions,
  StatusBar,
  ImageBackground,
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import { BlurView } from 'expo-blur';
import {
  DreamVortexSvg,
  MoonSvg,
  StarVariants,
} from '@/components/svgs';

import { Link, useRouter } from 'expo-router';
// Dimensions
const { width, height } = Dimensions.get('window');
// Star shapes with different designs

// Floating objects SVGs
const floatingObjects = [
  `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 5C25.5 5 30 9.5 30 15C30 20.5 25.5 25 20 25C14.5 25 10 20.5 10 15C10 9.5 14.5 5 20 5Z" fill="#C4B5FD" fill-opacity="0.7"/>
    <path d="M15 30C20.5 30 25 34.5 25 40C25 45.5 20.5 50 15 50C9.5 50 5 45.5 5 40C5 34.5 9.5 30 15 30Z" fill="#C4B5FD" fill-opacity="0.5"/>
  </svg>`,
  `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 10L40 40H10L25 10Z" fill="#DDD6FE" fill-opacity="0.6"/>
  </svg>`,
  `<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="35" height="35" rx="5" fill="#A5B4FC" fill-opacity="0.5"/>
  </svg>`,
];

const DreamWelcomeScreen = () => {
  // Animation references
  const vortexRotation = useRef(new Animated.Value(0)).current;
  const vortexScale = useRef(new Animated.Value(0.8)).current;
  const moonOpacity = useRef(new Animated.Value(0)).current;
  const moonPosition = useRef(new Animated.Value(-100)).current;
  const cloudPosition1 = useRef(new Animated.Value(-300)).current;
  const cloudPosition2 = useRef(new Animated.Value(width)).current;
  const textFade = useRef(new Animated.Value(0)).current;
  const buttonFade = useRef(new Animated.Value(0)).current;
  const floatingObjectsY = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const router = useRouter();

  // For particle effects
  const [particles, setParticles] = useState<
    {
      id: string;
      x: number;
      y: number;
      size: number;
      opacity: number;
      speed: number;
      variant: number;
    }[]
  >([]);

  useEffect(() => {
    // Create initial particles
    const initialParticles = Array.from({ length: 30 }, () => ({
      id: Math.random().toString(),
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 4 + 2,
      opacity: Math.random() * 0.5 + 0.3,
      speed: Math.random() * 1 + 0.5,
      variant: Math.floor(Math.random() * StarVariants.length),
    }));
    setParticles(initialParticles);

    // Start animations sequence
    Animated.sequence([
      // Vortex appears first
      Animated.parallel([
        Animated.timing(vortexScale, {
          toValue: 1,
          duration: 2000,
          easing: Easing.elastic(1),
          useNativeDriver: true,
        }),
        Animated.timing(textFade, {
          toValue: 1,
          duration: 2000,
          delay: 500,
          useNativeDriver: true,
        }),
      ]),
      // Then other elements appear
      Animated.parallel([
        Animated.timing(moonOpacity, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(moonPosition, {
          toValue: width * 0.7,
          duration: 3000,
          easing: Easing.out(Easing.back(1.5)),
          useNativeDriver: true,
        }),
        Animated.timing(buttonFade, {
          toValue: 1,
          duration: 1000,
          delay: 500,
          useNativeDriver: true,
        }),
      ]),
    ]).start();

    // Continuous animations

    // Rotating vortex
    Animated.loop(
      Animated.timing(vortexRotation, {
        toValue: 1,
        duration: 20000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();

    // Pulsating effect for the center
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.1,
          duration: 1500,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 0.9,
          duration: 1500,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ]),
    ).start();

    // Floating objects animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatingObjectsY, {
          toValue: 20,
          duration: 4000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(floatingObjectsY, {
          toValue: -20,
          duration: 4000,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ]),
    ).start();

    // Cloud movements
    Animated.loop(
      Animated.sequence([
        Animated.timing(cloudPosition1, {
          toValue: width,
          duration: 40000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(cloudPosition1, {
          toValue: -200,
          duration: 0,
          useNativeDriver: true,
        }),
      ]),
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(cloudPosition2, {
          toValue: -200,
          duration: 45000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(cloudPosition2, {
          toValue: width,
          duration: 0,
          useNativeDriver: true,
        }),
      ]),
    ).start();

    // Particle movement animation
    const moveParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((p) => ({
          ...p,
          y: p.y - p.speed < 0 ? height : p.y - p.speed,
          x: p.x + Math.sin(p.y / 50) * 0.5,
        })),
      );
    };

    const particleInterval = setInterval(moveParticles, 50);
    return () => clearInterval(particleInterval);
  }, []);

  const navigateToSignUp = () => {
    console.log('Navigate to sign up screen');
  };

  const navigateToLogin = () => {
    console.log('Navigate to login screen');
  };

  // Calculate rotate interpolation for vortex
  const spin = vortexRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {/* Background gradient */}
      <View style={styles.backgroundGradient} />

      {/* Particles */}
      {particles.map((particle) => (
        <View
          key={particle.id}
          style={[
            styles.particle,
            {
              left: particle.x,
              top: particle.y,
              opacity: particle.opacity,
              width: particle.size,
              height: particle.size,
            },
          ]}
        >
          <SvgXml
            xml={StarVariants[particle.variant]}
            width={particle.size * 2}
            height={particle.size * 2}
          />
        </View>
      ))}

      {/* Animated Dream Vortex */}
      <Animated.View
        style={[
          styles.vortexContainer,
          {
            transform: [{ rotate: spin }, { scale: vortexScale }],
          },
        ]}
      >
        <SvgXml xml={DreamVortexSvg} width={width} height={width} />
      </Animated.View>

      {/* Floating objects */}
      {floatingObjects.map((objectSvg, index) => (
        <Animated.View
          key={index}
          style={[
            styles.floatingObject,
            {
              left: width * (0.2 + index * 0.25),
              top: height * (0.3 + index * 0.1),
              transform: [
                {
                  translateY: Animated.add(
                    floatingObjectsY,
                    new Animated.Value(index * 10),
                  ),
                },
                { rotate: `${index * 30}deg` },
              ],
            },
          ]}
        >
          <SvgXml
            xml={objectSvg}
            width={40 + index * 10}
            height={40 + index * 10}
          />
        </Animated.View>
      ))}

      {/* Clouds */}
      <Animated.View
        style={[
          styles.cloud,
          {
            transform: [{ translateX: cloudPosition1 }],
            top: height * 0.15,
          },
        ]}
      >
        <SvgXml xml={StarVariants[0]} width={200} height={100} />
      </Animated.View>

      <Animated.View
        style={[
          styles.cloud,
          {
            transform: [{ translateX: cloudPosition2 }],
            top: height * 0.35,
          },
        ]}
      >
        <SvgXml xml={StarVariants[0]} width={150} height={75} />
      </Animated.View>

      {/* Moon */}
      <Animated.View
        style={[
          styles.moon,
          {
            opacity: moonOpacity,
            transform: [{ translateX: moonPosition }],
          },
        ]}
      >
        <SvgXml xml={MoonSvg} width={120} height={120} />
      </Animated.View>

      {/* Content */}
      <View style={styles.contentContainer}>
        {/* Title with glass effect */}
        <Animated.View
          style={[
            styles.glassCard,
            {
              opacity: textFade,
              transform: [
                {
                  translateY: textFade.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <BlurView style={styles.blurViewText} tint="light" intensity={10} />
          <Text style={styles.titleText}>Ruhani Danışmanına</Text>
          <Text style={styles.subtitleText}>Hoşgeldin</Text>
          <Text style={styles.descriptionText}>
            Bilinçaltınızın derinliklerine yolculuk başlıyor.
          </Text>
        </Animated.View>

        {/* Buttons */}
        <Animated.View
          style={[
            styles.buttonContainer,
            {
              opacity: buttonFade,
              transform: [
                {
                  translateY: buttonFade.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => router.push('/(enter)/(authStack)')} // Sayfaya yönlendir
          >
            <BlurView style={styles.buttonBlur} tint="light" intensity={20} />
            <Text style={styles.primaryButtonText}>Yolculuğa Başla</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={navigateToLogin}
          >
            <Text style={styles.secondaryButtonText}>Rüyana Dön</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  backgroundGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#0F172A', // Very dark blue
    zIndex: -20,
  },
  particle: {
    position: 'absolute',
    zIndex: -10,
  },
  vortexContainer: {
    position: 'absolute',
    top: -width * 0.25,
    left: -width * 0.25,
    zIndex: -5,
  },
  vortexCenter: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    top: height * 0.25 - 50,
    left: width * 0.5 - 50,
    zIndex: -4,
    overflow: 'hidden',
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  floatingObject: {
    position: 'absolute',
    zIndex: -3,
  },
  cloud: {
    position: 'absolute',
    zIndex: -1,
  },
  moon: {
    position: 'absolute',
    top: height * 0.05,
    zIndex: 1,
  },
  contentContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 60,
    paddingHorizontal: 30,
    zIndex: 10,
  },
  glassCard: {
    width: '100%',
    borderRadius: 20,
    padding: 24,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    overflow: 'hidden',
  },
  blurViewText: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  titleText: {
    fontSize: 36,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    textShadowColor: 'rgba(139, 92, 246, 0.8)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
  },
  subtitleText: {
    fontSize: 28,
    fontWeight: '600',
    color: '#E0E7FF',
    textAlign: 'center',
    marginBottom: 16,
    textShadowColor: 'rgba(139, 92, 246, 0.6)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 8,
  },
  descriptionText: {
    fontSize: 16,
    color: '#BFDBFE',
    textAlign: 'center',
    lineHeight: 24,
  },
  buttonContainer: {
    width: '100%',
  },
  primaryButton: {
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.5)',
  },
  buttonBlur: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(139, 92, 246, 0.3)',
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.5,
    textShadowColor: 'rgba(139, 92, 246, 0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 5,
  },
  secondaryButton: {
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
  secondaryButtonText: {
    color: '#E0E7FF',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default DreamWelcomeScreen;
