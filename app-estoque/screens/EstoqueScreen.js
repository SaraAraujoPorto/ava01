import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { ProdutosContext } from "../context/ProdutosContext";

export default function EstoqueScreen() {
  const { produtos } = useContext(ProdutosContext);
  const totalProdutos = produtos.reduce((total, p) => total + Number(p.quantidade), 0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Estoque Detalhado</Text>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>Quantidade: {item.quantidade}</Text>
            <Text>Preço: R$ {item.preco}</Text>
          </View>
        )}
      />
      <Text style={styles.total}>Total de produtos: {totalProdutos}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
  item: { padding: 10, borderWidth: 1, borderColor: "#ccc", marginBottom: 5, borderRadius: 5 },
  nome: { fontWeight: "bold", fontSize: 16 },
  total: { fontSize: 18, fontWeight: "bold", marginTop: 10, textAlign: "center" },
});
