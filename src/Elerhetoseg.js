import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Button,
  ImageBackground,
} from 'react-native';
import React, { Component } from 'react';

export default class ElerhetosegScreen extends Component {
  static navigationOptions = {
    title: 'Kezdőlap',
  };
  state = {
    nyitvatartasTitle: 'Nyitvatartás',
    nyitvatartasBody:
      'Hétfő: 11:00 - 22:00 \nKedd: 11:00 - 22:00 \nSzerda: 11:00 - 22:00 \nCsütörtök: 11:00 - 22:00 \nPéntek: 11:00 - 22:00 \nSzombat: 11:00 - 22:00 \nVasárnap: Zárva',
    elerhetosegTitle: 'Itt érhetsz el minket',
    elerhetosegBody:
      'Facebook: fb.com/padthaiwokbar\nTwitter: @padthaiwokbar\nInstagram: @padthaiwokbar\nTelefon: +36 1 551-5657',
    hazhozszallitasTitle: 'Házhozszállítás',
    hazhozszallitasBody: 'Netpincér: netpincer.hu\nWolt: wolt.com',
    helyszinTitle: 'Padthai Wokbar Nyugati tér',
    helyszinBody: '1066, Budapest, Teréz krt. 62',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.titleText}>{this.state.nyitvatartasTitle}</Text>
            <Text style={styles.bodyText}>{this.state.nyitvatartasBody}</Text>
            <Text style={styles.titleText}>{this.state.elerhetosegTitle}</Text>
            <Text style={styles.bodyText}>{this.state.elerhetosegBody}</Text>
            <Text style={styles.titleText}>
              {this.state.hazhozszallitasTitle}
            </Text>
            <Text style={styles.bodyText}>
              {this.state.hazhozszallitasBody}
            </Text>
            <Text style={styles.titleText}>{this.state.helyszinTitle}</Text>
            <Text style={styles.bodyText}>{this.state.helyszinBody}</Text>
            <Button
              title="Hol vagyunk?"
              color="rgb(103,182,177)"
              onPress={() => navigate('Térkép', { name: 'Terkep' })}
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  bodyText: {
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 25,
  },
});
