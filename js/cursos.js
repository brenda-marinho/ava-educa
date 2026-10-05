import { cursos } from "../dados/listagem-cursos.js";

function listarCursos(usuario) {

    return new Promise((resolve, reject) => {

        const cursosDoUsuario = cursos.filter(
            curso => curso.emailProfessor === usuario.email
        );

        if (cursosDoUsuario.length > 0) {

            resolve(cursosDoUsuario);

        } else {

            reject("Não há cursos cadastrados para esse usuário");

        }

    });
}

export { listarCursos };