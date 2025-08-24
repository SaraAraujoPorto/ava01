import React, { useState, useContext, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ProdutosContext } from "../context/ProdutosContext";

export default function EditProdutoScreen({ route, navigation }) {
  const { produto } = route.params;
  const { editarProduto } = useContext(ProdutosContext);

  const [nome, setNome] = useState(produto.nome);
  const [quantidade, setQuantidade] = useState(produto.quantidade);
  const [preco, setPreco] = useState(produto.preco);
  const [imagem, setImagem] = useState(produto.imagem);

  const selecionarImagem = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permissão para acessar a galeria é necessária!");
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) setImagem(result.assets[0].uri);
  };

  const salvarProduto = () => {
    editarProduto({ id: produto.id, nome, quantidade, preco, imagem });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Nome:</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />
      <Text>Quantidade:</Text>
      <TextInput style={styles.input} value={quantidade} onChangeText={setQuantidade} keyboardType="numeric" />
      <Text>Preço:</Text>
      <TextInput style={styles.input} value={preco} onChangeText={setPreco} keyboardType="numeric" />
      <Button title="Selecionar Imagem" onPress={selecionarImagem} />
      <Button title="Salvar Alterações" onPress={salvarProduto} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 5, marginBottom: 10, borderRadius: 5 },
});
