import { StyleSheet } from "react-native";

export const styles1 = StyleSheet.create({
    showMid: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    card: {
        backgroundColor: '#acf',
        width: '6.5%',
        height: '15.4%',
        margin: '0.5%',
        borderColor: '#1f4',
        borderRadius: 5,
        borderWidth: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardChosed: {
        backgroundColor: '#fff',
        width: '6.5%',
        height: '15.4%',
        margin: '0.5%',
        borderColor: '#111',
        borderRadius: 5,
        borderWidth: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardTable: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'space-around',
        backgroundColor: '#bqf',
        width: '100%',
        height: '40%',
    },
    showCardTable: {
        display: 'flex',
        backgroundColor: '#ffa',
        justifyContent: 'space-around',
        width: '100%',
        height: '50%',
    },
    h1: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    content: {
        position: "absolute",
        top: 0,
        width: '100%',
        height: '93%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: '3%'
    },
    footerNav: {
        position: "absolute",
        bottom: 0,
        width: '100%',
        height: '7%',
        backgroundColor: '#9ff',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    father: {
        backgroundColor: '#f9f',
        width: '100%',
        height: '100%',
    },
    chatPage: {
        width: '100%',
        height: '100%',
        paddingVertical:'5%'
    },
    chatPan: {
        display: 'flex',
        width: '100%',
        height: '90%',
        paddingVertical:'5%'
    },
    chatPopLeft:
    {
        maxWidth: '70%',
        paddingHorizontal: '2%',
        paddingVertical: '3%',
        backgroundColor: '#1f4',
        alignSelf: 'flex-start',
        borderColor: '#1ff',
        borderRadius: 5,
        borderWidth: 2,
        marginVertical:'1%',
    },
    chatPopRight:
    {
        maxWidth: '70%',
        paddingHorizontal: '2%',
        paddingVertical: '3%',
        backgroundColor: '#1f4',
        alignSelf: 'flex-end',
        borderColor: '#1f4',
        borderRadius: 5,
        borderWidth: 2,
        marginVertical:'1%',
    },
    chatText: 
    {

    },
    InputBar:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        width: '100%',
        height: '7%',
    },
    ChatInput:{
        backgroundColor: '#fff',
        width: '80%',
        height: '100%',
        borderColor: '#1ff',
        borderRadius: 5,
        borderWidth: 2,
    },
    SendButton:{
        width: '17%',
        height: '100%',
        backgroundColor:'#7823'
    },
    SendButtonDeactivated:{
        width: '17%',
        height: '100%',
        backgroundColor:'#ffff'
    }
})