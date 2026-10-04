import { alunos } from "../dados/listagem-alunos.js";

function cadastrarAluno(aluno) {

    return new Promise((resolve, reject) => {

        try {

            // Gera um novo ID
            const novoId = alunos.length > 0
                ? Math.max(...alunos.map(item => item.id)) + 1
                : 1;

            aluno.id = novoId;

            // Adiciona o aluno na lista
            alunos.push(aluno);

            resolve("Aluno cadastrado com sucesso!");

        } catch (erro) {

            reject("Erro ao cadastrar o aluno");

        }

    });

}

export { cadastrarAluno };