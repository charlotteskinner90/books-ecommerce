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
import { withNavigation } from 'react-navigation';
import { MonoText } from '../components/StyledText';
import data from '../assets/data/data.json';

class BookListerScreen extends React.Component {
  openBookDetails = (data) => {
    const { navigate } = this.props.navigation;
    return navigate("DetailsScreen", { data });
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigate("HomeScreen")}>
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
          <Text style={styles.title}>Books Now</Text>
        </View>
      </TouchableWithoutFeedback>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View>
            <Text style={styles.header}>Little Miss Books</Text>
            <FlatList
              data={data.slice(0, 3)}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatlistContainer}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => {
                const { id, name, uri } = item;
                return (
                  <TouchableOpacity style={styles.imageThumbnailContainer} onPress={() => this.openBookDetails(item)}>
                    <Image
                      style={styles.imageThumbnail}
                      source={{uri: uri}}
                    />
                    <Text style={styles.label}>{name}</Text>
                  </TouchableOpacity>
                )
              }}
            />
          </View>
          <View>
            <Text style={styles.header}>Mr Men Books</Text>
            <FlatList
              data={data.slice(3, 6)}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.flatlistContainer}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => {
                const { id, name, uri } = item;
                return (
                  <TouchableOpacity style={styles.imageThumbnailContainer} onPress={() => this.openBookDetails(item)}>
                    <Image
                      style={styles.imageThumbnail}
                      source={{uri: uri}}
                    />
                    <Text style={styles.label}>{name}</Text>
                  </TouchableOpacity>
                )
              }}
            />
        </View>
        </ScrollView>
    </View>
  );
  }
  
}

export default withNavigation(BookListerScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  welcomeContainer: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 60,
    backgroundColor: '#ff6d41',
  },
  title: {
    fontSize: 40,
    color: '#ffffff',
    lineHeight: 42,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  flatlistContainer: {
    marginVertical: 20,
    marginLeft: 10,
  },
  imageThumbnailContainer: {
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 4,
    },
    shadowRadius: 10,
    backgroundColor: '#ffffff',
    elevation: 8,
    marginHorizontal: 10,
    borderRadius: 4,
    padding: 10,
  },
  imageThumbnail: {
    width: 200,
    height: 200,
    borderRadius: 4,
  },
  label: {
    fontSize: 14,
    textAlign: 'center',
    paddingVertical: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
  }
});
