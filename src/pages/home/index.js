import { useState } from 'react';
import Slider from '@react-native-community/slider';

import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import { ModalPassword } from '../../components/modal';



//Variável criada para armazenar as informações da senha
let charset = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%¨&*ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export function Home() {

  //hook que é utilizado para limitar a quantidade de caracteres da senha.
  const [size, setSize] = useState(10)

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
        source={require("../../assets/lock.png")}
          style={styles.logo}
      />

      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider 
          style={{height: 50}}
          minimumValue={10}
          maximumValue={20}
          maximumTrackTintColor='#280595'
          minimumTrackTintColor='#3a4db3'
          thumbTintColor='#4b9093'
          value={size}
          onValueChange={(value) => setSize(Number(value.toFixed(0)))}
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
    backgroundColor: "#f4f7f8",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo:{
    marginBottom: 60,
    width: 150,
    height: 150
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
    backgroundColor: '#280595',
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
    fontWeight: 'bold',
    color: "#374057"
  }
});
