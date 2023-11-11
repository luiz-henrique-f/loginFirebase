import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'ios' ? 0 : 50,
    },
    title: {
        fontSize: 22,
        color: "#008000",
        marginBottom: 10,
        fontWeight: "bold"
    },
    input: {
        width: 300,
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#008000",
        marginLeft: "auto",
        marginRight: "auto",
        color: "#4d5156"
    },
    buttonRegister: {
        width: 200,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#008000",
        borderRadius: 50,
        marginTop: 30,
    },
    textButtonRegister: {
        color: "#ffffff"
    },
    contentAlert: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    warningAlert: {
        padding: 10,
        color: "#bdbdbd",
        fontSize: 16
    },
    login: {
        marginTop: 20,
        color: "#4d5156"
    },
    linkLogin: {
        color: "#1877f2",
        fontSize: 16,
    },
    formContainer: {
        display: "flex",
        flexDirection: "row",
    },
    iconForm: {
        position: "relative",
        top: 26,
        borderBottomWidth: 1,
        borderBottomColor: "#008000",
        marginBottom: 26,
    },
    iconBackground1: {
        position: "absolute",
        bottom: -45,
        left: -50,
        opacity: 0.1,
    },
    iconBackground2: {
        position: "absolute",
        transform: [{rotate: "180deg"}],
        top: -150,
        opacity: 0.1,
    },
    iconBackground22: {
        position: "absolute",
        transform: [{rotate: "180deg"}],
        top: -130,
        opacity: 0.06,
    },
});

export default styles