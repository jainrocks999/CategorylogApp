
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    Main: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
        backgroundColor: '#FFFFFF',
    },
    second: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        padding: 8,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    touch: {
        height: 30,
        width: 30,
        marginLeft: 8
    },
    image: {
        width: 120,
        height: 30,
    },
    view: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewone: {
        paddingLeft: 10,
        paddingRight: 40,
    },
    textheading: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    textheadingsecond: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 40,
    },
    text: {
        fontSize: 12,
        marginTop: 20,
    },
    textdecording: {
        fontSize: 12,
        marginTop: 15,
        marginBottom: 5,
        textDecorationLine: 'underline',
    },
    textset: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 40
    },
    textsetone: {
        fontSize: 12,
        marginTop: 20,
        marginLeft: 10
    },
    btnset: {
        marginTop: 10,
        width: '99%',
        height: 35,
        justifyContent: 'center',
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },




});