
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';


export function SplashScreem({navigation}) {

  return (
    <View style={styles.container}>
      <Image 
        source={require("../../assets/logo_splash.png")}
          style={styles.logo}
      />
      
      <View style={styles.container2}>
          <Text style={styles.title}>
            Crie senhas seguras, deixe-as salvas e recupere quando quiser!
          </Text>

          <Text style={styles.subTitle3}>
            IMPORTANTE!
          </Text>

          <View style={styles.containerTitle}>

            <Text style={styles.subTitle2}>
              Clique duas vezes sobre a senha para copiar.
            </Text>

            <Text style={styles.subTitle}>
              Segure por 5 segundos a senha que deseja excluir.
            </Text>
          </View>
      </View>
    </View>  
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5
  },
  //logotipo
  logo:{
    marginTop: 30,
    marginBottom: 60,
    width: 250,
    height: 250
  },
  title:{
    color: "#374057",
    fontSize: 20,
  },
  subTitle:{
    color: "#374057",
    fontSize: 14,
    marginTop: 5,
  },
  subTitle2:{
    color: "#374057",
    fontSize: 14,
    marginTop: 5,
  },
  subTitle3:{
    color: "#ec3d4f",
    fontSize: 14,
    marginTop: 20,
    fontWeight: "bold"
  }
});
