import {useState, useEffect} from "react";

import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused } from "@react-navigation/native";
import useStorage from "../../hooks/useStorage";
import {PasswordItem} from "./components/passwordItem";

export function Passwords(){

    //Variável para listar as senhas salvas.
    const [listPasswords, setListPasswords] = useState([]);

    //Variável para atualizar a tela assim que o usuário entrar.
    const focused = useIsFocused();

    //Variável para listar as senhas salvas pelo usuário.
    const {getItem, removeItem} = useStorage();

    //Função para mostar as senhas na tela.
    useEffect(() => {
        async function loadPasswords(){
            const Passwords = await getItem("@pass");
            setListPasswords(Passwords);
        }

        loadPasswords();
    }, [focused]);


    //criando função para deletar a senha.
    async function handleDeletePassword(item){
        const passwords = await removeItem("@pass", item)
        setListPasswords(passwords);
    }

    return(
        <SafeAreaView style={{flex: 1, backgroundColor: "#f4f7f8"}}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senhas</Text>
            </View>

            <View style={styles.content}>
                <FlatList 
                    style={styles.flatListStyle}
                    data={listPasswords}
                    keyExtractor={(item) => String(item)}
                    renderItem={ ({item}) => <PasswordItem data={item} removePassword={() => handleDeletePassword(item)} />}
                />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: "#4b9093",
        paddingTop: 58,
        paddingBottom: 14,
        paddingLeft: 14,
        paddingRight: 14,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
    },
    title:{
        fontSize: 18,
        color: "#FFF",
        fontWeight: "bold",
    },
    content:{
        flex: 1,
        paddingLeft: 14,
        paddingRight: 14,
        backgroundColor: "#f4f7f8",
    },
    flatListStyle:{
        flex: 1,
        paddingTop: 14,
    }
})