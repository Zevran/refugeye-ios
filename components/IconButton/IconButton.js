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
        <FontAwesome color={iconColor} name={this.props.name} size={iconSize} style={styles.icon} />
      </TouchableOpacity>
    )
  }
}

const iconSize = 32;
const iconColor = "#515151";

const styles = StyleSheet.create({
  icon: {
    marginTop: 24,
    backgroundColor: 'transparent'
  }
});

module.exports = IconButton;
