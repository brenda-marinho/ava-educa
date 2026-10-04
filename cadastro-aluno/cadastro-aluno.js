import { Aluno } from "../js/aluno.js";
import { cadastrarAluno } from "../js/alunos.js";

const dadosUsuario = sessionStorage.getItem("usuarioLogado");

if (!dadosUsuario) {

    window.location.href = "../login/login.html";

} else {

    const usuario = JSON.parse(dadosUsuario);

    // RF02 - Exibe o usuário no cabeçalho
    document.getElementById("usuarioLogado").textContent = usuario.nome;


    // RF03 - Navegação do menu

    document.getElementById("btnDashboard").addEventListener("click", function () {

        window.location.href = "../dashboard/dashboard.html";

    });


    document.getElementById("btnCadastro").addEventListener("click", function () {

        window.location.href = "cadastro-aluno.html";

    });


    document.getElementById("btnSair").addEventListener("click", function () {

        sessionStorage.removeItem("usuarioLogado");

        window.location.href = "../login/login.html";

    });


    // Elementos do formulário

    const form = document.getElementById("formCadastro");
    const feedback = document.getElementById("feedback");

    const cep = document.getElementById("cep");

    const dataNascimentoCampo = document.getElementById("dataNascimento");

dataNascimentoCampo.addEventListener("input", function () {

    let valor = dataNascimentoCampo.value.replace(/\D/g, "");

    if (valor.length > 2) {
        valor = valor.substring(0, 2) + "/" + valor.substring(2);
    }

    if (valor.length > 5) {
        valor = valor.substring(0, 5) + "/" + valor.substring(5, 9);
    }

    dataNascimentoCampo.value = valor;

});


    // RF05 - Busca endereço através do CEP

    // RF05 - Busca endereço através do CEP

cep.addEventListener("blur", function () {

    const cepValue = cep.value.replace(/\D/g, "");

    if (cepValue.length !== 8) {
        return;
    }

    fetch(`https://viacep.com.br/ws/${cepValue}/json/`)
        .then(function (response) {

            if (!response.ok) {
                throw new Error("Erro na consulta do CEP");
            }

            return response.json();

        })
        .then(function (dados) {

            if (dados.erro) {

                feedback.textContent = "CEP não encontrado.";
                feedback.style.color = "#dc2626";

                return;
            }

            document.getElementById("cidade").value = dados.localidade || "";
            document.getElementById("estado").value = dados.uf || "";
            document.getElementById("logradouro").value = dados.logradouro || "";
            document.getElementById("bairro").value = dados.bairro || "";

            feedback.textContent = "";

        })
        .catch(function (erro) {

            console.error(erro);

            feedback.textContent = "Erro ao consultar o CEP.";
            feedback.style.color = "#dc2626";

        });

});

    // RF05 - Cadastro

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        feedback.textContent = "";
        feedback.style.color = "#dc2626";


        // Valores dos campos

        const nome = document.getElementById("nome").value.trim();
        const genero = document.getElementById("genero").value;
        const dataNascimento = document.getElementById("dataNascimento").value.trim();
        const cpf = document.getElementById("cpf").value.replace(/\D/g, "");
        const telefone = document.getElementById("telefone").value.replace(/\D/g, "");
        const email = document.getElementById("email").value.trim();

        const cepValue = document.getElementById("cep").value.replace(/\D/g, "");
        const cidade = document.getElementById("cidade").value.trim();
        const estado = document.getElementById("estado").value.trim();
        const logradouro = document.getElementById("logradouro").value.trim();
        const numero = document.getElementById("numero").value.trim();
        const complemento = document.getElementById("complemento").value.trim();
        const bairro = document.getElementById("bairro").value.trim();


        // Validação do nome

        if (nome.length < 4 || nome.length > 80) {

            feedback.textContent =
                "O nome deve possuir entre 4 e 80 caracteres.";

            return;
        }


        // Validação da data

        if (!moment(dataNascimento, "DD/MM/YYYY", true).isValid()) {

            feedback.textContent =
                "Informe uma data de nascimento válida no formato DD/MM/AAAA.";

            return;
        }


        const dataNascimentoMoment = moment(
            dataNascimento,
            "DD/MM/YYYY",
            true
        );

        const dataMinima = moment("01/01/1900", "DD/MM/YYYY");

        const dataAtual = moment();


        if (!dataNascimentoMoment.isAfter(dataMinima)) {

            feedback.textContent =
                "A data de nascimento deve ser posterior a 01/01/1900.";

            return;
        }


        if (!dataNascimentoMoment.isBefore(dataAtual)) {

            feedback.textContent =
                "A data de nascimento deve ser anterior à data atual.";

            return;
        }


        // Validação do CPF

        if (!cpf || cpf.length !== 11) {

            feedback.textContent =
                "Informe um CPF válido.";

            return;
        }


        // Validação do telefone

        if (!telefone) {

            feedback.textContent =
                "Informe o telefone.";

            return;
        }


        // Validação do CEP

        if (!cepValue || cepValue.length !== 8) {

            feedback.textContent =
                "Informe um CEP válido.";

            return;
        }


        // Validação dos demais campos obrigatórios

        if (
            !genero ||
            !email ||
            !cidade ||
            !estado ||
            !logradouro ||
            !numero ||
            !bairro
        ) {

            feedback.textContent =
                "Preencha todos os campos obrigatórios.";

            return;
        }


        // RF11 - Instancia a classe Aluno

        const aluno = new Aluno(
            nome,
            genero,
            dataNascimentoMoment.format("YYYY-MM-DD"),
            cpf,
            telefone,
            email,
            cepValue,
            cidade,
            estado,
            logradouro,
            numero,
            complemento,
            bairro
        );


        cadastrarAluno(aluno)
    .then(function (mensagem) {

        console.log("Aluno cadastrado:", aluno);

        feedback.textContent = mensagem;
        feedback.style.color = "#16a34a";

        form.reset();

    })
    .catch(function (erro) {

        feedback.textContent = erro;
        feedback.style.color = "#dc2626";

    });
    });

}