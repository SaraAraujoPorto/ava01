import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Dimensions, Button } from "react-native";
import { ProdutosContext } from "../context/ProdutosContext";

const screenWidth = Dimensions.get("window").width;

export default function ListaProdutosScreen({ navigation }) {
  const { produtos, excluirProduto } = useContext(ProdutosContext);

  return (
    <View style={styles.container}>
      <View style={styles.botoes}>
        <Button title="Adicionar Produto" onPress={() => navigation.navigate("Adicionar")} />
        <Button title="Ver Estoque" onPress={() => navigation.navigate("Estoque")} />
      </View>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.item}>
            {item.imagem && <Image source={{ uri: item.imagem }} style={[styles.imagem, { width: screenWidth - 40 }]} resizeMode="contain" />}
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>Quantidade: {item.quantidade}</Text>
            <Text>Preço: R$ {item.preco}</Text>
            <View style={styles.acoes}>
              <TouchableOpacity onPress={() => navigation.navigate("Editar", { produto: item })}>
                <Text style={styles.editar}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => excluirProduto(item.id)}>
                <Text style={styles.excluir}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  botoes: { flexDirection: "row", justifyContent: "space-between", marginBottom: 10 },
  item: { padding: 10, borderWidth: 1, borderColor: "#ccc", marginBottom: 5, borderRadius: 5 },
  nome: { fontWeight: "bold", fontSize: 16 },
  imagem: { height: 150, marginBottom: 5 },
  acoes: { flexDirection: "row", justifyContent: "space-around", marginTop: 5 },
  editar: { color: "blue", fontWeight: "bold" },
  excluir: { color: "red", fontWeight: "bold" },
});
