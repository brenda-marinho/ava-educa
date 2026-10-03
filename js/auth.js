function login(usuario, senha) {

    if (usuario === "admin@email.com" && senha === "123456") {
        return {
            email: usuario,
            nome: "Administrador"
        };
    }

    return null;
}
