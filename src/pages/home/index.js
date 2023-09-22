import { useState } from 'react';


import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider';

import { ModalPassword } from '../../components/modal';



//Variável criada para armazenar as informações da senha
let charset = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%¨&*ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export function Home() {

  //hook que é utilizado para limitar a quantidade de caracteres da senha.
  const [size, setSize] = useState(6)

  //armazenando a informação para passar para outra tela.
  const [passwordValue, setPasswordValue] = useState("")

  //controlar o modal
  const [modalVisible, setModalVisible] = useState(false)

  //bloco de código que faz a geração de senhas
  function generatePassword(){

    let password = "";

    for(let i = 0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }

    setPasswordValue(password)
    setModalVisible(true)

  }

  return (
    <View style={styles.container}>
      <Image 
        source={require("../../assets/logo.png")}
          style={styles.logo}
      />

      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider 
          style={{height: 50}}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor='#ff0000'
          minimumTrackTintColor='#000'
          thumbTintColor='#392de9'
          value={size}
          onValueChange={ (value) => setSize(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      
      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword 
        password={passwordValue}
        handleClose={ ()=> setModalVisible(false)}
        />
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#f3f3ff",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo:{
    marginBottom: 60
  },
  area:{
    marginTop: 14,
    marginTop: 14,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 6
  },
  button:{
    backgroundColor: '#392de9',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20
  },
  buttonText:{
    color: "#fff",
    fontSize: 20
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold'
  }
});
