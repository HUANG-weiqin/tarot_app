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

})