import React, { Component } from 'react'
import { Text, View } from 'react-native'
import io from 'socket.io-client'
export default class App extends Component {
  componentDidMount() {
    const socket = io("http://192.168.5.42:3000")
  }
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
