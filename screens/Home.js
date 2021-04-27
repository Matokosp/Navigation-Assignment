import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, FlatList, TouchableOpacity, Image } from 'react-native';
import Card from '../shared/card'

export default function Home({ navigation }) {

  const [sections, setSections] = useState([
    { key:'1', image: 'https://www.html.am/templates/downloads/bryantsmith/landscapetitles/images/image1.jpg', title: 'Template title 1', text: 'You may use this template in any way you would like, please just leave the link at the bottom to our site in place. In order to add your own pictures, simply insert an image as usual, and just add class=&quot;picture&quot; to each image. The shadow is automatically added to the images. Make sure your image is exactly 750px wide for best results.' },
    { key:'2', image: 'https://www.html.am/templates/downloads/bryantsmith/landscapetitles/images/image2.jpg', title: 'Template title 2', text: 'You may use this template in any way you would like, please just leave the link at the bottom to our site in place. In order to add your own pictures, simply insert an image as usual, and just add class=&quot;picture&quot; to each image. The shadow is automatically added to the images. Make sure your image is exactly 750px wide for best results.' },
    { key:'3', image: 'https://www.html.am/templates/downloads/bryantsmith/landscapetitles/images/image3.jpg', title: 'Template title 3', text: 'You may use this template in any way you would like, please just leave the link at the bottom to our site in place. In order to add your own pictures, simply insert an image as usual, and just add class=&quot;picture&quot; to each image. The shadow is automatically added to the images. Make sure your image is exactly 750px wide for best results.' },
    { key:'4', image: 'https://www.html.am/templates/downloads/bryantsmith/landscapetitles/images/image1.jpg', title: 'Template title 4', text: 'You may use this template in any way you would like, please just leave the link at the bottom to our site in place. In order to add your own pictures, simply insert an image as usual, and just add class=&quot;picture&quot; to each image. The shadow is automatically added to the images. Make sure your image is exactly 750px wide for best results.' },
    { key:'5', image: 'https://www.html.am/templates/downloads/bryantsmith/landscapetitles/images/image2.jpg', title: 'Template title 5', text: 'You may use this template in any way you would like, please just leave the link at the bottom to our site in place. In order to add your own pictures, simply insert an image as usual, and just add class=&quot;picture&quot; to each image. The shadow is automatically added to the images. Make sure your image is exactly 750px wide for best results.' },
    { key:'6', image: 'https://www.html.am/templates/downloads/bryantsmith/landscapetitles/images/image3.jpg', title: 'Template title 6', text: 'You may use this template in any way you would like, please just leave the link at the bottom to our site in place. In order to add your own pictures, simply insert an image as usual, and just add class=&quot;picture&quot; to each image. The shadow is automatically added to the images. Make sure your image is exactly 750px wide for best results.' },
  ])

  const pressAbout = () => {
    navigation.navigate('About')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleBlue}>Landscape</Text>
          <Text style={styles.titleBlack}>Titles</Text>
        </View>
        <View style={styles.btn}>
          <Button
            color='#fff'
            title='About Page'
            onPress={pressAbout}
          />
        </View>
        <FlatList
          data={sections}
          renderItem={({ item }) => (
            <View>
              <Image style={styles.banner} source={{ uri: item.image}} />
              <View style={styles.textContent}>
                <Text style={styles.sectionTitle}>{item.title}</Text>
                <Text style={styles.textP}>{item.text}</Text>
                <View style={styles.linkCont}>
                  <TouchableOpacity
                  onPress={() => navigation.navigate('Image', item)}
                  style={styles.sectionLink}
                  >
                    <Text style={styles.linkText}>See more</Text>
                  </TouchableOpacity>
                </View>
              </View>      
            </View>
          )}
          style={styles.contentList}
        />
      </View>   
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1364a6',
    alignItems: 'center',
  },
  content: {
    backgroundColor: '#fff',
    width: '90%',
    flex: 1,
    flexDirection: 'column',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 15
  },
  titleBlack: {
    color: 'black',
    fontSize: 30,
    fontWeight: '800'
  },
  titleBlue: {
    color: '#1652b4',
    fontSize: 30,
    fontWeight: '800'
  },
  btn: {
    backgroundColor: 'salmon',
    marginTop: 20,
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 20
  },
  contentList: {
    marginTop: 20,
    paddingTop: 30
  },
  textContent: {
    padding: 20
  },
  banner: {
    width: '100%',
    height: 100
  },
  sectionTitle: {
    color: '#123f83',
    fontSize: 20,
    fontWeight: '700',
  },
  textP: {
    marginTop: 15
  },
  linkCont: {
    margin: 20,
    alignItems: 'center'
  },
  sectionLink: {
    backgroundColor: 'aliceblue',
    width: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
  },
});
