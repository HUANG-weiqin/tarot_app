const { Text, View } = require("react-native")
import { styles1 } from './sty1'


export const cardsGrid = (props, state) => {
    var ls = []
    for (let i = 0; i < 78; i++) {
        if (!state.cardsIdx.includes(i)) {
            ls.push(
                <View style={[styles1.card]} onTouchEnd={() => props.choseCardCallback(i)}>
                    <Text>X</Text>
                </View>
            )
        }
        else {
            ls.push(
                <View style={[styles1.cardChosed]}>
                    <Text>{props.shuffleCards[i]}</Text>
                </View>
            )
        }
    }
    return <View style={styles1.cardTable}>
        {ls}
    </View>

}

const cardsShow = (state) => {
    const styles = {
        cTop: {
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#ffa',
            alignItems: 'center',
            justifyContent: 'space-around',
            height: '45%',
        },
        cBas: {
            display: 'flex',
            flexDirection: 'row',
            backgroundColor: '#ffa',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            height: '45%',
        },
        card: {
            backgroundColor: '#acf',
            width: '30%',
            height: '90%',
            borderColor: '#1f4',
            borderRadius: 15,
            borderWidth: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    }

    v1 = v2 = v3 = 'X'


    if (state.cards.length >= 1) {
        v1 = state.cards[0]
    }
    if (state.cards.length >= 2) {
        v2 = state.cards[1]
    }
    if (state.cards.length >= 3) {
        v3 = state.cards[2]
    }


    return <View style={styles1.showCardTable}>
        <View style={styles.cTop}>
            <View style={styles.card}><Text>{v2}</Text></View>
        </View>
        <View style={styles.cBas}>
            <View style={styles.card}><Text>{v1}</Text></View>
            <View style={styles.card}><Text>{v3}</Text></View>
        </View>
    </View>

}

export const cardsPan = (props, state) => {
    return [cardsShow(state), cardsGrid(props, state)]
}