const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Produtos iniciais já com imagens
let produtos = [
  { 
    id: 1, 
    nome: "Teclado Mecânico", 
    quantidade: 25, 
    preco: 350.50, 
    imagem: "https://cdn.pixabay.com/photo/2016/11/29/04/15/keyboard-1869236_1280.jpg" 
  },
  { 
    id: 2, 
    nome: "Mouse Gamer", 
    quantidade: 40, 
    preco: 150.00, 
    imagem: "https://cdn.pixabay.com/photo/2016/03/27/21/16/mouse-1283644_1280.jpg" 
  },
  { 
    id: 3, 
    nome: "Monitor Full HD", 
    quantidade: 12, 
    preco: 899.99, 
    imagem: "https://cdn.pixabay.com/photo/2015/03/26/09/54/monitor-690042_1280.jpg" 
  }
];

// READ - todos os produtos
app.get("/produtos", (req, res) => res.json(produtos));

// READ - produto específico
app.get("/produtos/:id", (req, res) => {
  const produto = produtos.find(p => p.id == req.params.id);
  res.json(produto);
});

// CREATE - adiciona produto
app.post("/produtos", (req, res) => {
  const novo = { id: Date.now(), ...req.body };
  produtos.push(novo);
  res.json(novo);
});

// UPDATE - atualiza produto
app.put("/produtos/:id", (req, res) => {
  produtos = produtos.map(p => 
    p.id == req.params.id ? { ...p, ...req.body } : p
  );
  res.json({ ok: true });
});

// DELETE - remove produto
app.delete("/produtos/:id", (req, res) => {
  produtos = produtos.filter(p => p.id != req.params.id);
  res.json({ ok: true });
});

// Start do servidor
app.listen(3000, () => console.log("Servidor da API rodando na porta 3000"));
