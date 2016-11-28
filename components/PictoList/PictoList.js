import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import { Asset } from 'exponent';

import list from './list.json';
const pictosDir = '../../assets/icons';
const pictosList = require('./List');

class Picto extends Component {

  static propTypes = {
    source: PropTypes.number.isRequired,
    onPress: PropTypes.func
  };

  render() {
    const { source } = this.props;
    // const ressource = require(source);
    const image = Asset.fromModule(source);
    console.log(image);

    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Image source={{uri: image.uri}} style={{
          width: 50,
          height: 50
        }} />
      </TouchableOpacity>
    )
  }
}

class PictoList extends Component {

  static propTypes = {
    lang: PropTypes.string,
    // list: PropTypes.array.isRequired
  };

  static defaultProps = {
    lang: 'english'
  };

  parseJsonList() {
    const pictos = list.map((item, key) => {
      return (
        <Picto key={key} source={`${pictosDir}/${item.filename}`} onPress={(item) => {
          console.log(item);
        }} />
      );
    });

    if (pictos.length === 0) {
      return null;
    }

    return pictos;
  }

  parsePictosList() {
    const pictos = [];

    for (let item in pictosList) {
      if (pictosList.hasOwnProperty(item)) {
        pictos.push(
          <Picto key={item} source={pictosList[item].source} onPress={() => console.log(pictosList[item])} />
        );
      }
    }

    if (pictos.length === 0) {
      return null;
    }

    return pictos;
  }

  render() {
    // const { list } = this.props;

    return (
      <View style={styles.list}>
        {this.parsePictosList()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  picto: {
    backgroundColor: 'transparent'
  },
  list: {

  }
});

module.exports = PictoList;
