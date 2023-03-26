import { Button, Text, View, Alert } from 'react-native'
import React, { Component } from 'react'
import { styles1 } from './pages/sty1'
import { cardsPan } from './pages/cards'
import { chatPan } from './pages/chat'

const content_center = (choix, props, state) => {

  switch (choix) {
    case 1:
      return cardsPan(props, state);
    case 2:
      return chatPan(props, state);
    case 3:
      return <Text style={styles1.h1}>me</Text>;
    default:
      return <Text style={styles1.h1}>def</Text>;
  }

};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      pan: 2,
      cards: [],
      cardsIdx: [],
      chats: [[1, 'fucksss'], [0, 'kkkisssssss']],
      TextEditing: ''
    };
    this.pro = {
      choseCardCallback: (ix) => this.choseCard(ix),
      TextChangeCallback: (text) => this.textChange(text),
      TextSendCallback: () => this.textSend(),
    }
    this.updateShuffleCards()
  }

  updateShuffleCards() {
    this.pro['shuffleCards'] = shuffleArray([...Array(78).keys()])
  }

  chose(idx) {
    this.setState({ pan: idx })
  }

  textChange(text) {
    this.setState({ TextEditing: text })
  }
  textSend() {
    //Alert.alert("fuck","send")
    this.state.chats.push([1, this.state.TextEditing])
    this.setState({
      TextEditing: '',
      chats: this.state.chats
    })
  }

  choseCard(cardIdx) {
    if (this.state.cards.length >= 3) {
      Alert.alert("restart", 'game restart!!!')
      this.updateShuffleCards()
      this.setState({ cards: [] })
      this.setState({ cardsIdx: [] })
      return
    }
    this.state.cardsIdx.push(cardIdx)
    this.state.cards.push(this.pro.shuffleCards[cardIdx])
    this.setState({
      cards: this.state.cards,
      cardsIdx: this.state.cardsIdx,
    })
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