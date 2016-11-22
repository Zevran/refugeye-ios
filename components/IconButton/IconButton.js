import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

import { FontAwesome } from '@exponent/vector-icons';

class IconButton extends Component {

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <FontAwesome color="#515151" name={this.props.name} size={32} style={styles.icon} />
      </TouchableOpacity>
    )
  }
}

let iconSize = 48;

let styles = StyleSheet.create({
  icon: {
    marginTop: 24,
    backgroundColor: 'transparent'
  }
});

module.exports = IconButton;
