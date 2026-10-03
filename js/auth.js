function login(usuario, senha) {

    if (usuario === "teste@email.com" && senha === "123456") {
        return {
            email: usuario,
            nome: "Aluno"
        };
    }

    return null;
}
