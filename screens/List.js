import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from 'react-native';

const contacts = require('../resources/contacts.json');

class List extends Component {
  constructor(props) {
    super(props)

    this.renderItem = this.renderItem.bind(this);
  }

  renderItem({ item }) {

    onPress = (item) => {
      this.props.navigation.navigate('Detail', {
        title: item.name,
        body: item
      })
    }

    return (
      <TouchableHighlight underlayColor='#e4e4e4' style={ styles.contact } onPress={ () => onPress(item) }>
        <Text style={ styles.contactText }>
          { item.name }
        </Text>
      </TouchableHighlight>
    );
  }

  keyExtractor(item, index) {
    return `${index}`;
  }

  renderSeparator() {
    const style = { height: 1, backgroundColor: '#ddd', marginLeft: 10 };
    return <View style={style} />;
  }

  render() {
    return (
      <View style={ styles.container }>
        <FlatList data={ contacts } renderItem={ this.renderItem } keyExtractor={this.keyExtractor} ItemSeparatorComponent={this.renderSeparator}/>
      </View>
    )
  }
}

List.navigationOptions = {
  title: 'Contacts',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contact: {
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  contactText: {
    fontSize: 18,
    paddingLeft: 10
  }
});

export default List
