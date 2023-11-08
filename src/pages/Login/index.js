import React, { useState, useEffect } from 'react'
import { View, Text, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity } from 'react-native'

import { auth } from '../../config/firebase'
import styles from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { signInWithEmailAndPassword, onAuthStateChanged  } from "firebase/auth";

export default function Login({ navigation }){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [errorLogin, setErrorLogin] = useState("")

    const loginFirebase = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => { 
            const user = userCredential.user;
            navigation.navigate("PageInitial")
        })
        .catch((error) => {
            setErrorLogin(true)
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              navigation.navigate('PageInitial');
            }
          });
    }, [])

    return(
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        >   
            <MaterialCommunityIcons
                name="pine-tree"
                size={40}
                color="#008000"
                style={styles.iconTree}
            />
            <Text style={styles.title}>Meio Ambiente</Text>
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
            {errorLogin === true
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
            style={styles.buttonLogin}
            >
                <Text style={styles.textButtonLogin}>Login</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity
            style={styles.buttonLogin}
            onPress={loginFirebase}
            >
                <Text style={styles.textButtonLogin}>Login</Text>
            </TouchableOpacity>
            }
            <Text style={styles.registration}>
                Não tem uma conta?&nbsp;
                <Text
                style={styles.linkSubscribe}
                onPress={() => navigation.navigate("NewUser")}
                >
                    Cadastre-se
                </Text>
            </Text>
            <View style={{height: 100}} />
        </KeyboardAvoidingView>
    )
}