import {
  Button,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from 'react-native';
import React, { Component } from 'react';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Kezdőlap',
  };

  state = {
    titleText: 'Padthai - Nyugati',
    bodyText:
      'A Padthai Nyugati téri wokbárja egy kellemes hely a főváros szívében, ahol igazodva a gyors életvitelhez szeretnénk megmutatni Neked, hogy egy gyors ebéd vagy vacsora is lehet egészséges, ha minőségi alapanyagok találkoznak az évezredes thai konyhatechnikával és a keleti kultúrából áramló nyugalommal.',
    topPicText:
      'Ételeinket helyszíni fogyasztásra, illetve elvitelre is kérheted',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView>
        <Button
          title="Étlap"
          color="rgb(103,182,177)"
          onPress={() => navigate('Étlap', { name: 'Etlap' })}
        />
        <Button
          title="Éttermeink"
          color="rgb(189,37,63)"
          onPress={() => navigate('Éttermeink', { name: 'Ettermeink' })}
        />
        <Button
          title="Elérhetőség"
          color="rgb(103,182,177)"
          onPress={() => navigate('Elérhetőség', { name: 'Elerhetoseg' })}
        />
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.titleText}>{this.state.titleText}</Text>
            <Text style={styles.bodyText}>{this.state.bodyText}</Text>
            <Image
              style={styles.topPic}
              source={require('./pic/padthaimain.jpg')}
            />
            <Text style={styles.picText}>{this.state.topPicText}</Text>
            <Image
              style={styles.bottomPic}
              source={require('./pic/padthaielvitel.jpg')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'rgb(229,225,216)',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
    paddingTop: 10,
    color: 'black',
    textAlign: 'center',
  },
  bodyText: {
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'left',
    color: 'black',
  },
  picText: {
    fontSize: 14,
    paddingTop: 4,
    paddingBottom: 4,
    textAlign: 'center',
    fontStyle: 'italic',
    color: 'black',
  },
  topPic: {
    width: '100%',
    height: 250,
  },
  bottomPic: {
    width: '100%',
    height: 300,
    marginBottom: 100,
  },
});
