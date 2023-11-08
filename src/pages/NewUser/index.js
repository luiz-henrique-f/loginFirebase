import React, { useState } from 'react'
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import styles from "./style"
import { auth } from '../../config/firebase'
import { createUserWithEmailAndPassword  } from "firebase/auth";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function NewUser({ navigation }){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [errorRegister, setErrorRegister] = useState("");

    const register = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigation.navigate("PageInitial")
        })
        .catch((error) => {
            setErrorRegister(true)
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });

    }

    return(
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        >
            <Text style={styles.title}>Crie sua conta</Text>
            <TextInput 
            style={styles.input}
            placeholder='informe seu e-mail'
            type="text"
            onChangeText={(text) => setEmail(text)}
            value={email}
            />
            <TextInput 
            style={styles.input}
            secureTextEntry={true}
            placeholder='informe sua senha'
            type="text"
            onChangeText={(text) => setPassword(text)}
            value={password}
            />
            {errorRegister === true
            ?
            <View style={styles.contentAlert}>
                <MaterialCommunityIcons 
                name="alert-circle"
                size={24}
                color="#bdbdbd"
                />
                <Text style={styles.warningAlert}>invalid e-mail or password</Text>
            </View>
            :
            <View />
            }

            {email === '' || password === ''
            ?
            <TouchableOpacity
            disabled={true}
            style={styles.buttonRegister}
            >
                <Text style={styles.textButtonRegister}>Register</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity
            style={styles.buttonRegister}
            onPress={register}
            >
                <Text style={styles.textButtonRegister}>Register</Text>
            </TouchableOpacity>
            }
            <Text style={styles.login}>
                Já tem uma conta?&nbsp;
                <Text
                style={styles.linkLogin}
                onPress={() => navigation.navigate("Login")}
                >
                    Login...
                </Text>
            </Text>
            <View style={{height: 100}} />
        </KeyboardAvoidingView>
    )
}