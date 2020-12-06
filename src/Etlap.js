import {
  Text,
  ImageBackground,
  StyleSheet,
  View,
  SafeAreaView,
  SectionList,
} from 'react-native';
import React, { Component } from 'react';
import Constants from 'expo-constants';

const DATA = [
  {
    title: 'Alapok',
    data: [
      '1. Rizstészta',
      '2. Tojásos tészta',
      '3. Üvegtészta',
      '4. Teljes kiőrlésű tészta',
      '5. Fehér rizs',
      '6. Barna rizs',
      '7. Zöldség alap',
      '8. Udon tészta',
    ],
  },
  {
    title: 'Feltétek',
    data: [
      '1. Csirke',
      '2. Sertés',
      '3. Tofu',
      '4. Marha',
      '5. Kacska',
      '6. Rák',
    ],
  },
  {
    title: 'Szószok',
    data: [
      '1. Thailand padthai',
      '2. China édes-savanyú',
      '3. Burma green curry',
      '4. Indonesia satay',
      '5. Laosz red curry',
      '6. Japan teriyaki',
      '7. Malay coconut curry',
    ],
  },
  {
    title: 'Levesek',
    data: ['1. Tom yum', '2. Tom kha'],
  },
  {
    title: 'Édességek',
    data: ['1. Pohárdesszertek', '2. Thai palacsinta'],
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default class EtlapScreen extends Component {
  static navigationOptions = {
    title: 'Kezdőlap',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 0,
    backgroundColor: 'rgb(229,225,216)',
  },
  item: {
    backgroundColor: 'rgb(103,182,177)',
    padding: 2,
    marginVertical: 4,
    marginHorizontal: 10,
    textDecorationLine: 'underline',
    textDecorationColor: 'white',
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 15,
    backgroundColor: 'rgb(189,37,63)',
    color: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'white',
  },
});
