import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import CustomButton from '../components/CustomButton';

import { withNavigation } from 'react-navigation';
import { MonoText } from '../components/StyledText';
import data from '../assets/data/data.json';

class HomeScreen extends React.Component {
  openBookLister = () => {
    const { navigate } = this.props.navigation;
    return navigate("BookListerScreen");
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        accessible={true}
        accessibilityLabel="Tap to navigate to homepage"
        onPress={() => navigate("HomeScreen")}
      >
        <View style={styles.welcomeContainer}>
          <Ionicons
            name={
              Platform.OS === 'ios'
                ? 'ios-book'
                : 'md-book'
            }
            size={40}
            color={Colors.white}
          />
          <Text style={styles.title}>BookWorm</Text>
        </View>
      </TouchableWithoutFeedback>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View accessible={true} accessibilityLabel="Image of mr men characters">
            <Text style={styles.header}>Welcome to our book store!</Text>
            <Image
              style={styles.banner}
              source={require('../assets/images/app.gif')}
            />
            <View style={styles.buttonContainer} accessible={true} accessibilityLabel="Tap me to go to book lister">
              <CustomButton
                buttonText="Go To Store"
                onPress={() => this.openBookLister()}
              />
            </View>
          </View>
        </ScrollView>
    </View>
  );
  }
  
}

HomeScreen.navigationOptions = {
  header: null,
};

export default withNavigation(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  welcomeContainer: {
    alignItems: 'center',
    paddingTop: 100,
    paddingBottom: 70,
    backgroundColor: '#ff6d41',
  },
  title: {
    fontSize: 40,
    color: '#ffffff',
    lineHeight: 42,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  banner :{
    flex: 1,
    marginTop: -30,
    width: '100%'
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 20,
  }
});
