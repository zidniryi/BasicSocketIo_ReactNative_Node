import React, { Component } from 'react'
import { Text, View } from 'react-native'
import io from 'socket.io-client'
export default class App extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
