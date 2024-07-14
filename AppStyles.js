import { StyleSheet } from "react-native";

const StylesApp = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fundo semi-transparente
        padding: 0,
        borderRadius: 10,
        margin: 0,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        margin: 12,
        padding: 10,
        width: '80%',
        fontSize: 18,
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Fundo semi-transparente
    },
    button: {
        width: '80%',
        height: 50,
        marginTop: 20,
        fontSize: 18,
        borderRadius: 10,
        backgroundColor: 'rgb(240, 180, 0)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
    },
});

export { StylesApp }