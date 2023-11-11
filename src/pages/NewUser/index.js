import React, { useState } from "react";
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function NewUser({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorRegister, setErrorRegister] = useState("");

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("PageInitial");
      })
      .catch((error) => {
        setErrorRegister(true);
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <MaterialCommunityIcons name="rss" size={200} color="#008000" style={styles.iconBackground1} />
      <MaterialCommunityIcons name="cloud" size={400} color="#008000" style={styles.iconBackground2} />
      <MaterialCommunityIcons name="cloud" size={400} color="#008000" style={styles.iconBackground22} />
      <Text style={styles.title}>Crie sua conta</Text>

      <View style={styles.formContainer}>
        <MaterialCommunityIcons name="email" size={20} color="#ccc" style={styles.iconForm} />
        <TextInput
          style={styles.input}
          placeholder="Informe seu e-mail"
          type="text"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>

      <View style={styles.formContainer}>
        <MaterialCommunityIcons name="key-variant" size={20} color="#ccc" style={styles.iconForm} />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Informe sua senha"
          type="text"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>
      {errorRegister === true ? (
        <View style={styles.contentAlert}>
          <MaterialCommunityIcons name="alert-circle" size={24} color="#bdbdbd" />
          <Text style={styles.warningAlert}>invalid e-mail or password</Text>
        </View>
      ) : (
        <View />
      )}

      {email === "" || password === "" ? (
        <TouchableOpacity disabled={true} style={styles.buttonRegister}>
          <Text style={styles.textButtonRegister}>Register</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.buttonRegister} onPress={register}>
          <Text style={styles.textButtonRegister}>Register</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.login}>
        Já tem uma conta?&nbsp;
        <Text style={styles.linkLogin} onPress={() => navigation.navigate("Login")}>
          Login...
        </Text>
      </Text>
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
}
