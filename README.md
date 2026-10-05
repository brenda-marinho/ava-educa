1. Nome do projeto
AVA EDUCA

2. Descrição do projeto
O AVA EDUCA é uma aplicação web desenvolvida para auxiliar no gerenciamento de alunos e cursos em um ambiente virtual de aprendizagem.
O projeto permite que usuários autenticados acessem um dashboard com seus cursos e realizem o cadastro de novos alunos, incluindo informações pessoais e de endereço.
A solução busca facilitar a organização e o gerenciamento das informações acadêmicas, centralizando os dados em uma aplicação web simples, responsiva e de fácil utilização.

3. Problema que o projeto resolve

O projeto busca solucionar a necessidade de organizar e facilitar o acesso às informações relacionadas a alunos e cursos.
Por meio do sistema, é possível:

* realizar a autenticação de usuários;
* visualizar os cursos associados ao usuário;
* cadastrar alunos;
* validar os dados informados no cadastro;
* consultar automaticamente informações de endereço por meio do CEP;
* manter uma estrutura organizada para manipulação dos dados.

4. Técnicas e tecnologias utilizadas

* HTML: estrutura das páginas;
* CSS: estilização e criação do layout responsivo;
* JavaScript: implementação das funcionalidades e regras de negócio;
* ES Modules: organização e reutilização dos códigos JavaScript;
* Moment.js: validação e manipulação de datas;
* ViaCEP API: consulta automática de dados de endereço através do CEP;
* GitHub: armazenamento do código e gerenciamento das branches e Pull Requests;
* Live Server: execução local da aplicação.

* Manipulação do DOM;
* Eventos JavaScript;
* Promises;
* sessionStorage para armazenamento da sessão do usuário;
* Consumo de API utilizando fetch;
* Validação de formulários;
* JavaScript modular com import e export;
* Layout responsivo utilizando Flexbox, Grid e Media Queries;
* Organização do desenvolvimento utilizando branches e Pull Requests;
* Metodologia Kanban para acompanhamento das tarefas.

5. Estrutura do projeto

ava-educa/
├── cadastro-aluno/
│   ├── cadastro-aluno.css
│   ├── cadastro-aluno.html
│   └── cadastro-aluno.js
├── css/
│   └── style.css
├── dados/
│   ├── listagem-alunos.js
│   ├── listagem-cursos.js
│   └── listagem-usuarios.js
├── dashboard/
│   ├── dashboard.css
│   ├── dashboard.html
│   └── dashboard.js
├── js/
│   ├── aluno.js
│   ├── alunos.js
│   ├── app.js
│   ├── auth.js
│   └── cursos.js
├── login/
│   ├── login.css
│   ├── login.html
│   └── login.js
├── index.html
├── package.json
└── README.md

6. Como executar o projeto

Pré-requisitos

* Visual Studio Code;
* Extensão Live Server;
* Navegador web atualizado.

Execução

1. Clone ou baixe o repositório do projeto.
2. Abra a pasta ava-educa no Visual Studio Code.
3. Abra o arquivo index.html.
4. Clique com o botão direito no arquivo e selecione Open with Live Server.
5. O sistema será aberto no navegador.
6. Realize o login utilizando um dos usuários cadastrados.

Usuários para teste

Ana Carolina Silva

* E-mail: ana.silva@edutech.com
* Senha: 123456

Carlos Eduardo Santos

* E-mail: carlos.santos@edutech.com
* Senha: 654321

Mariana Oliveira Costa

* E-mail: mariana.costa@edutech.com
* Senha: edu2026

7. Melhorias futuras

Como possíveis melhorias para versões futuras, podem ser implementadas:

* Cadastro e gerenciamento de cursos;
* Edição e exclusão de alunos;
* Recuperação real de senha;
* Integração com uma API ou backend;
* Melhorias na segurança e autenticação;
* Paginação e filtros para grandes quantidades de alunos;
* Melhorias de acessibilidade.
