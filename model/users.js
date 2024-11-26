// Importação do UUID
import { v7 } from "uuid";
const uuid = v7;

// Modelo dos usuários
class Users {
    constructor(name, email) {
        this.id = uuid();
        this.name = name;
        this.email = email;
    }
}

// Métodos CRUD da aplicação
export class UsersCrud extends Users {
    users = [];

    // Método para ler os usuários
    getAll() {
        return this.users;
    }

    // Método para criar os usuários
    newUser(name, email) {
        const user = new Users(name, email);
        this.users.push(user);
    }

    // Método para atualizar os usuários
    updateUser(id, name, email) {
        const user = this.users.filter(({ id }) => id == id);
        if (user < 0 || user == "") return;
        user.map((user) => {
            user.name = name;
            user.email = email;
            if (name == "") name = user.name;
            if (email == "") email = user.email;
        });
    }

    // Método para apagar os usuários
    deleteUser(id) {
        const userIndex = this.users.findIndex(({ id }) => id == id);
        if (userIndex < 0) return;
        this.users.splice(userIndex, 1);
    }
}
