const form = document.getElementById("loginForm");
const feedback = document.getElementById("feedback");
const resetSenha = document.getElementById("resetSenha");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    // Verifica se os campos foram preenchidos
    if (!email || !senha) {
        feedback.textContent = "Preencha o email e a senha.";
        feedback.style.color = "#dc2626";
        return;
    }

    // Valida o usuário através da função login
    const usuario = login(email, senha);

    // Login inválido
    if (!usuario) {
        feedback.textContent = "Email ou senha inválidos.";
        feedback.style.color = "#dc2626";
        return;
    }

    // Salva o usuário na sessão
    sessionStorage.setItem(
        "usuarioLogado",
        JSON.stringify(usuario)
    );

    // Redireciona para o Dashboard
    window.location.href = "../dashboard/dashboard.html";
});

// Recuperação de senha
resetSenha.addEventListener("click", function (event) {
    event.preventDefault();

    window.alert(
        "A funcionalidade de recuperação de senha está em construção."
    );
});
