import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    containerTopo: {
        width: '100%',
        height: '10%',
        justifyContent: 'space-between',
        backgroundColor: "#ffffff"
    },
    containerTopoTitulo: {
        flex: 2
    },
    iconTree: {
        top: 50,
        left: 5
    },
    textHeader: {
        marginTop: 26,
        marginLeft: 30,
        fontSize: 17,
        color: '#000000'
    },
    container: {
        flex: 1,
        backgroundColor: '#dbdbdb'
    },
    containerConteudo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonLogout: {
        width: 60,
        height: 60,
        position: 'absolute',
        top: 32,
        right: -7,
        justifyContent: "center",
        alignItems: "center"
    },
    iconButtonLogout: {
        color: "#ffffff",
        fontSize: 25,
        fontWeight: "bold"
    },
    cards: {
        gap: 2
    },
    cardsInterval: {
        paddingBottom: 20
    },
    cardText: {
        backgroundColor: "#DCDCDC"
    }
});

export default styles