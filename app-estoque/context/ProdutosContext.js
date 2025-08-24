import React, { createContext, useState } from "react";
import { Alert } from "react-native";

export const ProdutosContext = createContext();

export const ProdutosProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([]);

  const adicionarProduto = (produto) => {
    setProdutos([...produtos, { ...produto, id: Date.now().toString() }]);
    Alert.alert("Sucesso", "Produto adicionado com sucesso!");
  };

  const editarProduto = (produtoAtualizado) => {
    setProdutos(
      produtos.map((p) => (p.id === produtoAtualizado.id ? produtoAtualizado : p))
    );
    Alert.alert("Sucesso", "Produto atualizado com sucesso!");
  };

  const excluirProduto = (id) => {
    setProdutos(produtos.filter((p) => p.id !== id));
    Alert.alert("Sucesso", "Produto excluído com sucesso!");
  };

  return (
    <ProdutosContext.Provider
      value={{ produtos, adicionarProduto, editarProduto, excluirProduto }}
    >
      {children}
    </ProdutosContext.Provider>
  );
};
