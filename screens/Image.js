import React from 'react';
import { StyleSheet, Text, SafeAreaView, ImageBackground, View, TouchableOpacity, Touchable } from 'react-native';

export default function Image({ navigation }) {

  const back = () => {
    navigation.goBack()
  }


  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{ uri: navigation.getParam('image')}}
        style={styles.bkg}
        imageStyle={{
            resizeMode: 'contain'
          }}
      >
        <TouchableOpacity
          style={styles.btnWrap}
          onPress={back}
        >
          <Text style={styles.btnText}>Go back home</Text>
        </TouchableOpacity>
        <View style={styles.titleBanner}>
          <Text style={styles.title}>{ navigation.getParam('title') }</Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnWrap: {
    width: 140,
    backgroundColor: 'salmon',
    borderRadius: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5
  },
  btnText: {
    color: '#fff'
  },
  bkg: {
    flex: 1,
    resizeMode: 'cover',
    bottom: 0,
    width: '100%'
  },
  titleBanner: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'aliceblue',
    width: '50%',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: '800',
    fontSize: 18,
    color: '#1652b4'
  }
});