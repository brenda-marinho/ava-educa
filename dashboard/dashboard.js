import { listarCursos } from "../js/cursos.js";

const dadosUsuario = sessionStorage.getItem("usuarioLogado");

if (!dadosUsuario) {

    window.location.href = "../login/login.html";

} else {

    const usuario = JSON.parse(dadosUsuario);

    // RF02 - Exibe o nome do usuário no cabeçalho
    const usuarioLogado = document.getElementById("usuarioLogado");

    usuarioLogado.textContent = usuario.nome;

    // Mensagem de boas-vindas
    const boasVindas = document.getElementById("boasVindas");

    boasVindas.textContent = `Bem-vindo, ${usuario.nome}!`;


    /* RF03 - Navegação do menu */

    // Dashboard
    document.getElementById("btnDashboard").addEventListener("click", function () {

        window.location.href = "dashboard.html";

    });


    // Cadastro de alunos
    document.getElementById("btnCadastro").addEventListener("click", function () {

        window.location.href = "../cadastro-aluno/cadastro-aluno.html";

    });


    // Sair
    document.getElementById("btnSair").addEventListener("click", function () {

        sessionStorage.removeItem("usuarioLogado");

        window.location.href = "../login/login.html";

    });


    /* RF04 - Lista os cursos do usuário */

    const listaCursos = document.getElementById("listaCursos");

    listarCursos(usuario)
        .then(function (cursos) {

            cursos.forEach(function (curso) {

                const card = document.createElement("div");

                card.classList.add("card-curso");

                card.innerHTML = `
                    <h3>${curso.nomeCurso}</h3>
                    <p><strong>Data de início:</strong> ${curso.dataInicio}</p>
                    <p><strong>Data de término:</strong> ${curso.dataFim}</p>
                `;

                listaCursos.appendChild(card);

            });

        })
        .catch(function (erro) {

            listaCursos.textContent = erro;

        });

}