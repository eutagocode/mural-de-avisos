import express from "express";
import { UsersCrud } from "./model/users.js";
const app = express();
const PORT = 3000;
app.use(express.json());
const users = new UsersCrud();

app.get("/all", (req, res) => {
    res.json(JSON.stringify(users.getAll()));
});

app.post("/new", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    if (name === "" || email === "") return;

    users.newUser(name, email);

    res.send(users);
});

app.put("/update/:id", (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const email = req.body.email;

    users.updateUser(id, name, email);

    res.send("Usuário localizado com sucesso!");
});

app.delete("/delete/:id", (req, res) => {
    users.deleteUser(req.params.id);
    res.send("Usuário apagado com sucesso!");
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
