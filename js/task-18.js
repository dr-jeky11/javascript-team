/**
 *? Напиши клас Client який створює об'єкт
 *? з ​​властивостями login email
 *? Оголоси приватні властивості #login #email,
 *? доступ до яких зроби через геттер та сеттер login email
 */

class Client {
    #login;
    #email;
    constructor(login, email) {
        this.#login = login;
        this.#email = email;
    }

    get login() {
        return this.#login;
    }

    set login(newLogin) {
        this.#login = newLogin;
    }

     get email() {
        return this.#email;
    }

    set email(newEmail) {
        this.#email = newEmail;
    }
}


const client = new Client("mango", "mango@gmail.com");
console.log(client.login);
console.log(client.email);
client.login = "banana";
client.email = "banana@gmail.com";
console.log(client);
console.log(client.login);