import { usuarios } from "../dados/listagem-usuarios.js";

function login(usuario, senha) {

    const usuarioEncontrado = usuarios.find(
        item => item.email === usuario && item.senha === senha
    );

    return new Promise((resolve, reject) => {

        if (usuarioEncontrado) {

            resolve(usuarioEncontrado);

        } else {

            reject("Dados incorretos. Favor verificar e tentar novamente");

        }

    });
}

export { login };