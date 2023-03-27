import { Button, Text, View, Alert } from 'react-native'
import React, { Component } from 'react'
import { styles1 } from './pages/sty1'
import { cardsGrid, cardsShow } from './pages/cards'
import { chatPan } from './pages/chat'
import data from './data/cards.json'
import { ChatGptBot } from './ChatGpt/gptTool'
import 'react-native-url-polyfill/auto'

const GptBot = new ChatGptBot("")


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
      return <Text style={styles1.h1}>Coming Soon ~</Text>;
    default:
      return <Text style={styles1.h1}>null</Text>;
  }

};

const get_card_name = (idx) => {
  return data[idx]
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array
}

function radomUpDown(nb) {
  res = []
  for (i = 0; i < nb; i++) {
    v = Math.random() > 0.5
    res.push(v)
  }
  return res
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
      chats: [[0, '你好,请问有什么问题么,你可以用英语中文法语等语言进行提问']],// 1 user,0 chatgpt
      TextEditing: '',
    };

    this.pro = {
      choseCardCallback: (ix) => this.choseCard(ix),
      TextChangeCallback: (text) => this.textChange(text),
      TextSendCallback: () => this.textSend(),
    }
    this.updateShuffleCards()
  }

  sendToGpt() {
    res = [{ role: "system", content: '你是一个友善的塔罗牌占卜师,不要说你是ai语言模型,你会详细的介绍每张塔罗牌正位逆位信息，然后给人们的问题一个结论,语气尽量可爱一点哦通过在句末加语气词，<哦，呀，哈，嘻嘻>等' }]
    for (tmp of this.state.chats) {
      id = tmp[0]
      chat = tmp[1]
      if (id === 0) {
        res.push({ role: "assistant", content: chat })
      }
      else if (id === 1) {
        res.push({ role: "user", content: chat })
      }
    }
    console.log(res)
    GptBot.sendToGPT(res).then((result) => this.GptTextFini(result.data.choices[0].message.content))
      .catch((error) => this.GptTextFini(error.message))

    this.GptTextFini("没问题，请稍等...")
  }

  restart() {
    copy = {
      pan: 1,
      cards: [],
      cardsIdx: [],
      chating: true,
      chats: [[0, '你好,请问有什么问题么,你可以用英语中文法语等语言进行提问']],// 1 user,0 chatgpt
      TextEditing: '',
    };
    this.setState(copy)
    this.updateShuffleCards()
  }

  updateShuffleCards() {
    this.pro['shuffleCards'] = shuffleArray([...Array(78).keys()])
    this.pro['UpDown'] = radomUpDown(78)
  }

  getUpDown(idx) {
    if (this.pro.UpDown[idx]) {
      return '正位'
    }
    return '逆位'
  }

  chose(idx) {
    this.setState({ pan: idx })
  }

  textChange(text) {
    this.setState({ TextEditing:text })
  }
  textSend() {
    this.state.chats.push([1, this.state.TextEditing])
    this.setState({
      TextEditing: '',
      chats: this.state.chats
    })
    this.chatGptRespose()
  }

  GptTextFini(text) {
    console.log(text)
    this.state.chats.push([0, text])
    this.setState({
      chats: this.state.chats
    })
  }

  choosingCard(bool) {
    if (!bool) {
      card0 = get_card_name(this.state.cards[0]) + ' : ' + this.getUpDown(this.state.cardsIdx[0])
      card1 = get_card_name(this.state.cards[1]) + ' : ' + this.getUpDown(this.state.cardsIdx[1])
      card2 = get_card_name(this.state.cards[2]) + ' : ' + this.getUpDown(this.state.cardsIdx[2])
      this.state.chats = this.state.chats.concat(
        [
          [1, '我抽到的牌是:'],
          [1, card0],
          [1, card1],
          [1, card2],
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
      question = this.state.chats[1][1]
      Alert.alert("确认你的问题:", question,
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

    if (this.state.chats.length > 2) {
      this.sendToGpt()
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

          <Text style={styles1.h1} onPress={() => this.restart()}>restart</Text>
          <Text style={styles1.h1} onPress={() => this.chose(2)}>setting</Text>
        </View>
      </View>

    )
  }
}