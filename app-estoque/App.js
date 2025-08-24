import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ListaProdutosScreen from "./screens/ListaProdutosScreen";
import AddProdutoScreen from "./screens/AddProdutoScreen";
import EditProdutoScreen from "./screens/EditProdutoScreen";
import EstoqueScreen from "./screens/EstoqueScreen";
import { ProdutosProvider } from "./context/ProdutosContext";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ProdutosProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="ListaProdutos"
          screenOptions={{
            headerStyle: { backgroundColor: "#4CAF50" },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold" }
          }}
        >
          <Stack.Screen
            name="ListaProdutos"
            component={ListaProdutosScreen}
            options={{ title: "Lista de Produtos" }}
          />
          <Stack.Screen
            name="Adicionar"
            component={AddProdutoScreen}
            options={{ title: "Adicionar Produto" }}
          />
          <Stack.Screen
            name="Editar"
            component={EditProdutoScreen}
            options={{ title: "Editar Produto" }}
          />
          <Stack.Screen
            name="Estoque"
            component={EstoqueScreen}
            options={{ title: "Estoque" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ProdutosProvider>
  );
}
