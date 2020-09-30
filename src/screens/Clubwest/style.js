
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
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    touch: {
        height: 40,
        width: 30
    },
    image: {
        width: 120,
        height: 30
    },
    view: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 20,
        margin: 10,
        marginTop: 20,
    },
    viewone: {
        paddingLeft: 10,
        paddingRight: 40,
    },
    textheading: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    flatview: {
        marginHorizontal: 20,
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        marginTop: 20,
    },
    text: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
        fontFamily: 'Poppins-Bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    renderview: {
        backgroundColor: '#fff',
        marginEnd: 10,
        margin: 10,
        borderRadius: 8,
        paddingVertical: 10,
        marginBottom: 4,
    },
    viewtwo: {
        width: '100%',
        marginTop: 8,
    },
    textsetone: {
        fontSize: 14,
        color: '#5A6779',
        fontFamily: 'Poppins',
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
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