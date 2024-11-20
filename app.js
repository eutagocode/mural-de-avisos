import express from "express";
import { v7 } from "uuid";
const uuid = v7;
const app = express();
const PORT = 3000;
app.use(express.json());

class Users {
    constructor(name, email) {
        this.id = uuid();
        this.name = name;
        this.email = email;
    }
}

const users = [];

app.get("/all", (req, res) => {
    res.json(JSON.stringify(users));
});

app.post("/new", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    if (name === "" || email === "") return;

    const user = new Users(name, email);

    users.push(user);

    res.send("Usuário adicionado com sucesso!");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
