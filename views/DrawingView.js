import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View
} from 'react-native';
import { takeSnapshotAsync } from 'exponent';

import Sketch from '../components/Sketch/Sketch';
import IconButton from '../components/IconButton/IconButton';
import PictoList from '../components/PictoList/PictoList';

export default class DrawingView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      result: null
    }
  }

  static route = {
    navigationBar: {
      visible: false
    }
  }

  handleCancel = () => {
    this._drawingView.reset();
  }

  handleUndo = () => {
    this._drawingView.stepBack();
  }

  handleSave = async () => {
    let result = await takeSnapshotAsync(this._drawingView, {
      format: 'png',
      result: 'base64',
      quality: 1.0
    });

    this.setState({
      result
    });
  }

  renderHeader() {
    return (
      <View style={{position: 'absolute', top: 0, left: 0, bottom: 0}}>
        <View style={styles.options}>
          <IconButton name="info-circle" />
          <IconButton onPress={this.handleCancel} name="trash" />
          <IconButton onPress={this.handleSave} name="download" />
        </View>
      </View>
    )
  }

  renderIcons() {
    return (
      <ScrollView style={{
        width: Dimensions.get('window').height / 2,
        height: Dimensions.get('window').height,
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0
      }}>
        <PictoList />
      </ScrollView>
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Sketch
          ref={view => { this._drawingView = view; }}
          containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0.01)'}}
          height={Dimensions.get('window').height}
          width={Dimensions.get('window').width - (Dimensions.get('window').height / 2)}
        />
        {this.renderIcons()}
        {this.renderHeader()}
        {/* {this.state.result && (
          <Image
            source={{uri: `data:image/png;base64,${this.state.result}`}}
            style={{width: Dimensions.get('window').width / 2, height: 100}}
          />
        )} */}
      </View>
    );
  }
}

let styles = StyleSheet.create({
  options: {
    marginLeft: 15,
    flex: 1,
    width: 35,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
