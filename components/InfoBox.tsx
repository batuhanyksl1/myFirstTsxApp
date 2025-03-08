import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';

const { width } = Dimensions.get('window');

interface IInfoBox {
  header?: string;
  content?: string;
  writer?: string;
}

function InfoBox({ header, content, writer }: IInfoBox) {
  const [fontsLoaded] = useFonts({
    'Play-Regular': require('@/assets/fonts/Lilita_One,Play,Roboto/Play/Play-Regular.ttf'),
    'Atma-Bold': require('@/assets/fonts/Atma-Bold.ttf'),
    'Atma-Light': require('@/assets/fonts/Atma-Light.ttf'),
    'Atma-Medium': require('@/assets/fonts/Atma-Medium.ttf'),
    'Atma-Regular': require('@/assets/fonts/Atma-Regular.ttf'),
  });

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://cdn.britannica.com/31/150831-050-8B046AEB/molecule-molecules-beads-droplets-water-form-surface.jpg',
        }}
        style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={[styles.header, { fontFamily: 'Atma-Regular' }]}>
          {header}
        </Text>
        <Text style={[styles.text, { fontFamily: 'Atma-Medium' }]}>
          {content}
        </Text>
        {writer ? (
          <Text style={[styles.footer, { fontFamily: 'Play-Regular' }]}>
            Yazar: {writer}
          </Text>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    width: width * 0.95,
    backgroundColor: 'rgb(246, 246, 246)',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 15,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  header: {
    fontSize: 20,
    textAlign: 'left',
    //fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    textAlign: 'left',
  },
  footer: {
    fontSize: 13,
    textAlign: 'left',
    marginTop: 5,
  },
});

export default InfoBox;
