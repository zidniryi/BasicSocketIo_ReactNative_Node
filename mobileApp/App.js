import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import io from 'socket.io-client'
console.disableYellowBox = true
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMsg: ''

    };
  }
  componentDidMount() {
    const socket = io("http://192.168.5.42:3000")
  }
  render() {
    return (
      <View style={styles.viewContainer}>
        <TextInput
          style={styles.textChat}
          autoCorrect={false}
          onChangeText={chatMsg => this.setState({
            chatMsg
          })}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1
  },
  textChat: {
    height: 40,
    borderWidth: 1
  }
});

