const dadosUsuario = sessionStorage.getItem("usuarioLogado");

if (!dadosUsuario) {
    window.location.href = "../login/login.html";
} else {
    const usuario = JSON.parse(dadosUsuario);

    const boasVindas = document.getElementById("boasVindas");

    boasVindas.textContent = `Bem-vindo, ${usuario.nome}!`;
}
