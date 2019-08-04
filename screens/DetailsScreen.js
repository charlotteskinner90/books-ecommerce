import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput } from 'react-native';
import CustomButton from '../components/CustomButton';
import data from '../assets/data/data.json';
import { withNavigation } from 'react-navigation';
import { NavigationActions } from 'react-navigation';


class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('data');
    return (
      <View>
        <View style={styles.welcomeContainer}>
          <Text style={styles.getStartedText}>{item.name}</Text>
          <Text style={styles.getStartedText}>Details</Text>
        </View>
        <ScrollView>
          <View style={styles.contentContainer}>
            <Image
              style={styles.imageThumbnail}
              source={{uri: item.uri}}
            />
            <Text style={styles.description}>{item.description}</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={{height: 40, width: 200, textAlign: 'center'}}
                placeholder="Email Address"
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
              />
            </View>
            <CustomButton
              buttonText="Add to Cart"
              onPress={() => {}}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default withNavigation(DetailsScreen);

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
    paddingTop: 60,
    paddingBottom: 60,
    backgroundColor: '#ff6d41',
  },
  getStartedText: {
    fontSize: 30,
    color: '#ffffff',
    lineHeight: 32,
    textAlign: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  description: {
    paddingVertical: 20,
    textAlign: 'center',
  },
  imageThumbnail: {
    width: 200,
    height: 200,
    borderRadius: 4,
  },
});
