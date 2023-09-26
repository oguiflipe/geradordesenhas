
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';


export function SplashScreem({navigation}) {

  return (
    <View style={styles.container}>
      <Image 
        source={require("../../assets/logo_splash.png")}
          style={styles.logo}
      />
    <View style={styles.containerTitle}>
        <Text style={styles.title}>Crie senhas seguras, deixe-as salvas e recupere quando quiser!</Text>
        <Text style={styles.subTitle}>Segure por 5 segundos a senha que deseja excluir.</Text>
        <Text style={styles.subTitle2}>Clique duas vezes sobre a senha para copiar.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#4b9093",
    justifyContent: 'center',
    alignItems: 'center',
  },
  //logotipo
  logo:{
    marginTop: 60,
    marginBottom: 60,
    width: 250,
    height: 250
  },
  containerTitle:{
    marginLeft: -20
  },
  title:{
    color: "#fff",
    fontSize: 20,
  },
  subTitle:{
    color: "#fff",
    fontSize: 14,
    marginTop: 30,
  },
  subTitle2:{
    color: "#fff",
    fontSize: 14,
    marginTop: 5,
    marginBottom: 50,
  },
});
