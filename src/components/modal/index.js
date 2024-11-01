import { View, Text, StyleSheet, TouchableOpacity, Pressable} from "react-native";
import * as clipboard from 'expo-clipboard';

import useStorage from '../../hooks/useStorage';

export function ModalPassword({password, handleClose}){
    //declarando o controle de delete e save das senhas
    const {saveItem} = useStorage();

    //criando função para copiar a senha gerada no app.
    async function handleCopyPassword(){
        await clipboard.setStringAsync(password);

        //salvar no assync
        await saveItem("@pass", password);

        //informando o usuário que a senha foi salva
        alert("Senha salva com sucesso!");

        //fechar o modal após a cópia
        handleClose();
    }


    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha gerada</Text>

                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.text}>{password}</Text>
                </Pressable>

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.textButton}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleCopyPassword}>
                        <Text style={styles.textButtonSave}>Salvar Senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(24, 24, 24, 0.6)",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    content:{
        backgroundColor: "#fff",
        width: "85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8
    },
    title:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 24
    },
    innerPassword:{
        backgroundColor: "#280595",
        width: "90%",
        padding: 14,
        borderRadius: 8
    },
    text:{
        color:"#fff",
        textAlign: "center"
    },
    buttonArea:{
        flexDirection: "row",
        width: "90%",
        marginTop: 8,
        alignItems: "center",
        justifyContent: "space-between"
    },
    button:{
        flex: 1,
        alignItems: "center",
        marginTop: 14,
        marginBottom: 14,
        padding: 8,
    },
    buttonSave:{
        backgroundColor: "#280595",
        borderRadius: 8
    },
    textButtonSave:{
        color: "#FFF",
        fontWeight: "bold"
    }
})
