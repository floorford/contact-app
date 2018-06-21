import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Detail extends Component {
  render() {
    const data = this.props.navigation.getParam('body');

    const source = {
      uri: data.picture
    };

    const style = {
      height: 200,
      width: 200,
      marginBottom: 10,
      alignSelf: 'center'
    };

    data.gender === 'female' ? (pronoun = 'She', pronoun2 = 'Her') : (pronoun = 'He', pronoun2 = 'His');

    return (
      <View style={ styles.container }>
        <Image source={ source } style={ style }/>
        <Text style={ styles.text }>
          {data.name} is { data.gender }.
        </Text>
        <Text style={ styles.text }>
          { pronoun } lives at { data.address }.
        </Text>
        <Text style={ styles.text }>
          { pronoun } works at { data.company }.
        </Text>
        <Text style={ styles.text }>
          { pronoun2 } favourite film is { data.filmName }.
        </Text>
      </View>
    )
  }
}

Detail.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('title')
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
  },
  text: {
    fontSize: 18,
    marginTop: 5,
  },
});

export default Detail
