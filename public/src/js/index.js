let cardId = "";

const getUsers = async () => {
    const response = await fetch("http://localhost:3000/api/all");
    const data = await response.json();
    const users = JSON.parse(data);
    let userElements = "";
    const date = new Date();

    for (const user of users) {
        const userElement = `
            <div id="${user.id}" class="card">
                <header class="header_card">
                    <p>${date.getDate()}/${
            date.getMonth() + 1
        }/${date.getFullYear()}</p>
                    <div class="actions_card">
                        <button onclick="showEditForm(this)">
                            <img
                                src="./src/assets/images/editsquare.svg"
                                alt="ícone de lapis"
                            />
                        </button>
                        <button onclick="deleteUser(this)">
                            <img
                                src="./src/assets/images/delete.svg"
                                alt="ícone de lixeira"
                            />
                        </button>
                    </div>
                </header>
                <main class="main_card">
                    <div class="profile_content">
                        <img
                            src="./src/assets/images/profile.svg"
                            alt="ícone de usuário"
                        />
                    </div>
                    <div class="showcase-text">
                        <h2>${user.name}</h2>
                        <p>${user.email}</p>
                    </div>
                </main>
            </div>
        `;
        userElements += userElement;
    }
    document.getElementById("users").innerHTML = userElements;
};

document.addEventListener("DOMContentLoaded", getUsers);

const createUser = async () => {
    let name = document.getElementById("input-name").value;
    let email = document.getElementById("input-email").value;

    const user = { name, email };

    await fetch("http://localhost:3000/api/new", {
        method: "post",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify(user),
    });

    getUsers();
};

const deleteUser = async (element) => {
    const cards = document.querySelectorAll(".card");

    for (const card of cards) {
        const elementId = element.parentElement.parentElement.parentElement.id;
        if (card.id == elementId) {
            await fetch(`http://localhost:3000/api/delete/${card.id}`, {
                method: "delete",
            });
        }
    }

    getUsers();
};

const showEditForm = (element) => {
    const editContainer = document.getElementById("editContainer");

    if (editContainer.style.display == "none") {
        editContainer.style.display = "grid";
    } else {
        editContainer.style.display = "none";
        return;
    }

    const elementId = element.parentElement.parentElement.parentElement.id;

    cardId = elementId;
};

const editUser = async () => {
    const cards = document.querySelectorAll(".card");
    const name = document.getElementById("form-input-name").value;
    const email = document.getElementById("form-input-email").value;

    const user = { name, email };

    for (let card of cards) {
        if (card.id == cardId) {
            await fetch(`http://localhost:3000/api/update/${card.id}`, {
                method: "put",
                headers: new Headers({ "content-type": "application/json" }),
                body: JSON.stringify(user),
            });
        }
    }

    getUsers();

    showEditForm();
};
