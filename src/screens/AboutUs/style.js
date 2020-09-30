
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
        height: 30
    },
    view: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewone: {
        paddingLeft: 10,
        paddingRight: 40,
    },
    textheading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
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


});