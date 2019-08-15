import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import publicIP from 'react-native-public-ip';
import io from 'socket.io-client'
console.disableYellowBox = true
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMsg: '',
      chatMsgs: [],
      ipMe: ''

    };
  }
  /**
   * To mount socket io
   * {@constant} to public with {this}
   */
  componentDidMount() {
    this.socket = io("http://192.168.5.42:3000")
    // Listener
    this.socket.on("chat message", msg => {
      this.setState({ chatMsgs: [...this.state.chatMsgs, msg] })
    })
    publicIP()
      .then(ip => {
        this.setState({ ipMe: ip })
        // '47.122.71.234'
      })
      .catch(error => {
        console.log(error);
        // 'Unable to get IP address.'
      });
  }
  submitMsg() {
    this.socket.emit("chat message", this.state.chatMsg)
    this.setState({ chatMsg: '' })

  }

  render() {
    console.log(this.state.ipMe)
    const chatMsgs = this.state.chatMsgs.map(chatMsg => (
      <Text style={styles.chatMsg}>{chatMsg}</Text>
    ))

    return (
      <View style={styles.viewContainer}>
        <TextInput
          style={styles.textChat}
          autoCorrect={false}
          onChangeText={chatMsg => this.setState({
            chatMsg
          })}
          value={this.state.chatMsg}
          onSubmitEditing={() => this.submitMsg()}
          placeholder="Type word for her .  . ."
        />
        {chatMsgs}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1
  },
  textChat: {
    height: 50,
    borderWidth: 1,
    borderColor: '#2ecc71',
    borderRadius: 5,
    marginBottom: 20
  },
  chatMsg: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    backgroundColor: '#2ecc71',
    borderRadius: 20,
    padding: 5,
    marginVertical: 4,
    width: '50%',
    color: '#FFFFFF',
    marginHorizontal: 5
  }

});

