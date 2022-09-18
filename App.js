import React, { useState } from "react";
import { StyleSheet, View, Button, ScrollView, Alert } from "react-native";
import { Input } from "react-native-elements";
import { collection, addDoc, doc, getDoc, getDocs } from "firebase/firestore";
import Login from "./views/login.js";
import SignUp from "./views/signUp.js";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { db } from "./firebase_config.js";
import { styles } from "styled-system";

const Stack = createStackNavigator();

export default function App() {
  let password2 = "";

  const [data, setdata] = useState({
    username: "",
    email: "",
    password: "",
    createdAt: new Date(),
  });

  const changeText = (key, value) => {
    setdata({ ...data, [key]: value });
  };

  const Agregar = () => {
    if (data.password != data.password2) {
      Alert.alert("La contraseña debe de coincidir");
    } else if (data.username == "" || data.email == "") {
      Alert.alert("Usuario o email obligatorio");
    } else {
      onSend(data);
    }
  };

  const onSend = async () => {
    const docRef = await addDoc(collection(db, "usuarios"), data);
  };

  const oneUserDB = async () => {
    const docRef = doc(db, "usuarios", "");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data: ", docSnap.data());
    } else {
      console.log("No such document");
    }
  };

  const allUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "usuarios"));

    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <View>
        <Input
          placeholder="Nombre de usuario"
          onChangeText={(value) => changeText("username", value)}
          value={data.username}
        />
      </View>
      <View>
        <Input
          placeholder="Correo electrónico"
          onChangeText={(value) => changeText("email", value)}
        />
      </View>
      <View>
        <Input
          placeholder="Contraseña"
          onChangeText={(value) => changeText("password", value)}
          secureTextEntry={true}
        />
      </View>
      <View>
        <Input
          placeholder="Confirmar contraseña"
          onChangeText={(value) => changeText("password2", value)}
          secureTextEntry={true}
        />
      </View>
      <View>
        <Button
          onPress={() => {
            Agregar();
          }}
          title="Enviar datos"
          color="#841584"
        />
      </View>
      <View>
        <Button
          onPress={() => {
            oneUserDB();
          }}
          title="Ver Datos"
          color="#841584"
        />
      </View>
    </ScrollView>
  );
}

const css = StyleSheet.create({
  input:{
    
  }
});
