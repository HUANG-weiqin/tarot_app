import { Button, Text, View, Alert } from 'react-native'
import React, { Component } from 'react'
import { styles1 } from './pages/sty1'
import { cardsPan } from './pages/cards'

const content_center = (choix, props, state) => {

  switch (choix) {
    case 1:
      return cardsPan(props, state);
    case 2:
      return <Text style={styles1.h1}>tarot</Text>;
    case 3:
      return <Text style={styles1.h1}>me</Text>;
    default:
      return <Text style={styles1.h1}>def</Text>;
  }

};


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      pan: 1,
      cards: []
    };
    this.pro = { choseCardCallback: (ix)=>this.choseCard(ix) }
  }

  chose(idx) {
    this.setState({ pan: idx })
  }

  choseCard(cardId) {
    Alert.alert("cardId", cardId.toString())
    this.state.cards.push(cardId)
    this.setState({ cards: this.state.cards })
  }

  render() {
    return (
      <View style={styles1.father}>

        <View style={styles1.content}>{content_center(this.state.pan, this.pro, this.state)}</View>

        <View style={styles1.footerNav}>

          <Text style={styles1.h1} onPress={() => this.chose(1)}>ASK</Text>
          <Text style={styles1.h1} onPress={() => this.chose(2)}>tarot</Text>
          <Text style={styles1.h1} onPress={() => this.chose(3)}>me</Text>
        </View>
      </View>

    )
  }
}