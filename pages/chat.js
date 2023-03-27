const { Text, View, ScrollView, TextInput, Button } = require("react-native")
import { useRef } from 'react';
import { styles1 } from './sty1'

export const chatPan = (props, state) => {

    ls = []

    for (const c of state.chats) {
        let who = c[0]
        let chat = c[1]
        if (who === 0) {
            ls.push(<Text style={styles1.chatPopLeft}>{chat}</Text>)
        }
        else {
            ls.push(<Text style={styles1.chatPopRight}>{chat}</Text>)
        }

    }
    ls.push(<Text style={{height:'10%'}}>' '</Text>)

    let scrollViewRef;
    const handleContentSizeChange = (contentWidth, contentHeight) => {
        this.scrollViewRef.scrollToEnd({ animated: true });
    };


    return <View style={styles1.chatPage}>
        <ScrollView style={styles1.chatPan}
            ref={(r) => this.scrollViewRef = r}
            onContentSizeChange={handleContentSizeChange}
            showsVerticalScrollIndicator={false
            }>{ls}</ScrollView>
        <View style={styles1.InputBar}>
            <TextInput style={styles1.ChatInput}
                onChangeText={text => props.TextChangeCallback(text)}
                value={state.TextEditing} 
                maxLength={200}
                multiline={true}/>

            {state.TextEditing.length > 0 ?
                (
                    <Button
                        style={styles1.SendButton}
                        onPress={props.TextSendCallback}
                        title='Send'
                        color="#841" />

                )
                :
                (
                    <Button
                        style={styles1.SendButton}
                        title='Send'
                        color="#232" />
                )
            }
        </View>


    </View>


}