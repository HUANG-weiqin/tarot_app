import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { styles1 } from './styles/sty1'

export default class App extends Component {
  render() {
    return (
      <View style={styles1.father}>
        <View style={styles1.footerNav}>
          <Text style={styles1.h1}>App</Text>
        </View>
      </View>

    )
  }
}