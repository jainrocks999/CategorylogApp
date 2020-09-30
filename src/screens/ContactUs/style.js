
import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    Main: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,
        backgroundColor: '#FFFFFF',
    },
    second: {
        marginTop: 10,
        backgroundColor: '#FFFFFF',
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    touch: {
        height: 40,
        width: 30
    },
    image: {
        height: 40,
        width: 30,
    },
    imageone: {
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
        fontWeight: 'bold',
        marginVertical: 20
    },
    emailtext: {
        fontSize: 18,
        marginBottom: 15
    },
    viewdata: {
        paddingLeft: 10,
        paddingRight: 30
    },
    text: {
        fontSize: 18, fontWeight: 'bold', marginVertical: 20
    },
    renderview: {
        borderWidth: 0.5,
        borderBottomColor: 'gray',
        width: '100%',
        height: 200,
    },
    viewtwo: {
        marginTop: 20,
        height: 35,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    textsetone: {
        color: '#fff',
        fontSize: 12,
        alignSelf: 'center',
    },
    btnset: {
        marginTop: 40,
        marginBottom: 20,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    viewsecond: {
        marginLeft: 10,
        marginRight: 30,
        marginTop: 20,
    },
    viewvalue: {
        fontSize: 16,
        marginBottom: 15,
        fontWeight: 'bold'
    }



});