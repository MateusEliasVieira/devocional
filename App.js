import React from 'react';
import { Text, View, TextInput, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import { StylesApp } from './AppStyles.js'

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/images/login.jpeg')}
      style={StylesApp.background}
    >
      <View style={StylesApp.container}>
        <StatusBar translucent backgroundColor="transparent" />

        <Text style={StylesApp.title}>Login</Text>
        <TextInput
          style={StylesApp.input}
          placeholder="Usuário"
          placeholderTextColor="#FFFFFF"
        />
        <TextInput
          style={StylesApp.input}
          placeholder="Senha"
          placeholderTextColor="#FFFFFF"
          secureTextEntry={true}
        />
        <TouchableOpacity style={StylesApp.button} onPress={() => alert('Botão clicado!')}>
          <Text style={StylesApp.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}


