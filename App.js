import { Button, Text, View, Alert } from 'react-native'
import React, { Component } from 'react'
import { styles1 } from './pages/sty1'
import { cardsGrid, cardsShow } from './pages/cards'
import { chatPan } from './pages/chat'

const cardsPan = (props, state) => {
  if (!state.chating) {
    return [cardsShow(state), cardsGrid(props, state)]
  }
  else {
    return [cardsShow(state), chatPan(props, state)]
  }
}

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

const get_card_name = (idx) => {
  return '钱币一'
}

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
      pan: 1,
      cards: [],
      cardsIdx: [],
      chating: true,
      chats: [[0, '你好，请问有什么问题么']],// 1 user,0 chatgpt
      TextEditing: '',
    };

    this.pro = {
      choseCardCallback: (ix) => this.choseCard(ix),
      TextChangeCallback: (text) => this.textChange(text),
      TextSendCallback: () => this.textSend(),
    }
    this.updateShuffleCards()
  }

  restart() {
    copy = {
      pan: 1,
      cards: [],
      cardsIdx: [],
      chating: true,
      chats: [[0, '你好，请问有什么问题么']],// 1 user,0 chatgpt
      TextEditing: '',
    };
    this.setState(copy)
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
    this.state.chats.push([1, this.state.TextEditing])
    this.setState({
      TextEditing: '',
      chats: this.state.chats
    })
    this.chatGptRespose()
  }

  choosingCard(bool) {
    if (!bool) {
      card0 = get_card_name(this.state.cards[0])
      card1 = get_card_name(this.state.cards[1])
      card2 = get_card_name(this.state.cards[2])
      this.state.chats = this.state.chats.concat(
        [
          [1,'我抽到的牌是:'],
          [1,card0],
          [1,card1],
          [1,card2],
        ]
      )
      this.setState({
        TextEditing: '',
        chats: this.state.chats
      })
      this.chatGptRespose()
    }
    this.setState({ chating: !bool })
  }

  chatGptRespose() {
    if (this.state.chats.length == 2) {
      this.updateShuffleCards()
      Alert.alert("Tarot Cards", 'ok let do it',
        [
          {
            text: 'Cancel',
            onPress: () => this.restart(),
          }
          ,
          {
            text: 'OK',
            onPress: () => this.choosingCard(true),
          }
        ]
      )
    }
  }

  choseCard(cardIdx) {

    this.state.cardsIdx.push(cardIdx)
    this.state.cards.push(this.pro.shuffleCards[cardIdx])
    this.setState({
      cards: this.state.cards,
      cardsIdx: this.state.cardsIdx,
    })

    if (this.state.cards.length >= 3) {
      Alert.alert("Tarot Cards", 'Selection completed',
        [
          {
            text: 'OK',
            onPress: () => this.choosingCard(false),
          }
        ])

      return
    }
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