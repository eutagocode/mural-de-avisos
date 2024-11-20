// Importação de pacotes
import express from "express";
// Importação de arquivos
import { UsersCrud } from "../model/users.js";
// Variáveis globais
const router = express.Router();
const users = new UsersCrud();

// Lendo usuários
router.get("/all", (req, res) => {
    res.json(JSON.stringify(users.getAll()));
});

// Criando usuários
router.post("/new", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    if (name === "" || email === "") return;

    users.newUser(name, email);

    res.send(users);
});

// Atualizando usuários
router.put("/update/:id", (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const email = req.body.email;

    users.updateUser(id, name, email);

    res.send("Usuário localizado com sucesso!");
});

// Apagando usuários
router.delete("/delete/:id", (req, res) => {
    users.deleteUser(req.params.id);
    res.send("Usuário apagado com sucesso!");
});

export default router;
