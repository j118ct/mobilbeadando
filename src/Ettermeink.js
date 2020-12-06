import {
  Text,
  ScrollView,
  Image,
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';
import React, { Component } from 'react';

export default class EttermeinkScreen extends Component {
  static navigationOptions = {
    title: 'Kezdőlap',
  };

  state = {
    arkadText: 'Éttermünk a budapesti Árkádban',
    arkadgyorText: 'Budapest után Győrben is kipróbálhatod kedvenc Padthaiodat',
    nyugatiText: 'Nézz be hozzánk a Nyugati pályaudvar mellett is',
    corvinText: 'A Corvin Plázában is megtaláltok minket',
    alleeText:
      'Hamarosan megnyílunk az Alleban is! A házhozszállítás már elérhető',
    egyetemterText: 'A tanórák között is beülhetsz hozzánk az Egyetem téren',
    bazilikaText: 'A Bazilika mellett éttermünket is megtekintheted',
    becsiutText: 'Óbudán is benézhetsz hozzánk',
    mammutText: 'Már a mammutban is elérhetőek vagyunk',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.kep} source={require('./pic/arkad.png')} />
          <Text style={styles.picText}>{this.state.arkadText}</Text>
        </View>
        <View style={styles.container}>
          <Image style={styles.kep} source={require('./pic/arkadgyor.png')} />
          <Text style={styles.picText}>{this.state.arkadgyorText}</Text>
        </View>
        <View style={styles.container}>
          <Image style={styles.kep} source={require('./pic/nyugati.png')} />
          <Text style={styles.picText}>{this.state.nyugatiText}</Text>
        </View>
        <View style={styles.container}>
          <Image style={styles.kep} source={require('./pic/corvin.png')} />
          <Text style={styles.picText}>{this.state.corvinText}</Text>
        </View>
        <View style={styles.container}>
          <Image style={styles.kep} source={require('./pic/allee.png')} />
          <Text style={styles.picText}>{this.state.alleeText}</Text>
        </View>
        <View style={styles.container}>
          <Image style={styles.kep} source={require('./pic/egyetemter.png')} />
          <Text style={styles.picText}>{this.state.egyetemterText}</Text>
        </View>
        <View style={styles.container}>
          <Image style={styles.kep} source={require('./pic/bazilika.png')} />
          <Text style={styles.picText}>{this.state.bazilikaText}</Text>
        </View>
        <View style={styles.container}>
          <Image style={styles.kep} source={require('./pic/becsiut.png')} />
          <Text style={styles.picText}>{this.state.becsiutText}</Text>
        </View>
        <View style={styles.container}>
          <Image style={styles.kep} source={require('./pic/mammut.png')} />
          <Text style={styles.picTextLast}>{this.state.mammutText}</Text>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    backgroundColor: 'rgb(229,225,216)',
  },
  kep: {
    width: '100%',
    height: 300,
    padding: 6,
  },
  picText: {
    fontSize: 14,
    paddingTop: 4,
    textAlign: 'center',
    fontStyle: 'italic',
    color: 'black',
  },
  picTextLast: {
    fontSize: 14,
    paddingTop: 4,
    textAlign: 'center',
    fontStyle: 'italic',
    color: 'black',
    marginBottom: 20,
  },
});
