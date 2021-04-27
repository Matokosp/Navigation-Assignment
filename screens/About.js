import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button } from 'react-native';

export default function About({ navigation }) {

  const pressHandler = () => {
    navigation.navigate('Home')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.btnWrap}>
        <Button
          title='Go back to Home'
          onPress={pressHandler}
          color='#fff'
        />
      </View>
      <View style={styles.textCont}>
        <Text style={styles.title}>About</Text>
        <Text style={styles.text}>This page shows you information about the best parks in the United States that you can visit. Each park has its own page with amazing information and referential images.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'antiquewhite',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnWrap: {
    backgroundColor: 'salmon',
    borderRadius: 20,
    marginTop: 30
  },
  textCont: {
    paddingLeft: '10%',
    paddingRight: '10%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    textTransform: 'uppercase',
    marginBottom: 20,
    color: 'gray'
  }
});
