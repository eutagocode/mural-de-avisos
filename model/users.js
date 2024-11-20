import { v6 } from "uuid";
const uuid = v6;

class Users {
    constructor(name, email) {
        this.id = uuid();
        this.name = name;
        this.email = email;
    }
}

export class UsersCrud extends Users {
    users = [];

    getAll() {
        return this.users;
    }

    newUser(name, email) {
        const user = new Users(name, email);
        this.users.push(user);
    }

    updateUser(id, name, email) {
        const user = this.users.filter((user) => user.id == id);
        if (user < 0 || user == "") return;
        user.map((user) => {
            if (name == "") name = user.name;
            if (email == "") email = user.email;
            user.name = name;
            user.email = email;
        });

        console.log(user);
    }

    deleteUser(id) {
        const userIndex = this.users.findIndex((user) => user.id == id);
        if (userIndex < 0) return;
        this.users.splice(userIndex, 1);
    }
}
