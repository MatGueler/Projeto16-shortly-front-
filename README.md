# <p align = "center"> Shortly </p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-Mateus Gueler-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/MatGueler/Projeto16-shortly-front-?color=4dae71&style=flat-square" />
</p>

## :clipboard: Descrição

O **Shortly** é um projeto para o usuário criar links curtos para compartilhar com mais facilidade com os amigos, evitando aquele link enorme que ocupa várias linhas na hora de enviar para os amigos. O usuário pode criar um link encurtado e gerenciar a quantidade de acessos que aquele link obteve.

## :computer: Tecnologias e Conceitos

- REST APIs
- Node.js (v16.17.0)
- JavaScript
- React
- Vercel

---

## :rocket: Rotas

```yml
Endpoint: '/'
    - Rota para o usuário fazer login com sua conta
```

```yml
Endpoint: '/cadastro'
    - Rota para o usuário criar sua conta
```

```yml
Endpoint: '/menu (autenticada)'
    - Rota onde o usuário pode controlar todos os links criados e criar novos links encurtados
```

```yml
Endpoint: '/acessar (autenticada)'
    - Rota para o usuário acessar links encurtados
```

```yml
Endpoint: '/ranking/geral (autenticada)'
    - Rota para o analisar o ranking de usuários com maior número de acessos
```

---

## 🏁 Rodando a aplicação

-Deploy

A aplicação front-end está disponível em deploy na plataforma [VERCEL](https://vercel.com), basta acessar o link abaixo:

[Shortly](https://projeto16-shortly-front-chi.vercel.app/)

- Local

Este projeto foi inicializado com [Create React App](https://github.com/facebook/create-react-app), portanto, certifique-se de ter a última versão estável do [Node.js](https://nodejs.org/en/download/) e [npm](https://www.npmjs.com/) rodando localmente.

Primeiro, clone este repositório em sua máquina:

```
git clone git@github.com:MatGueler/Projeto16-shortly-front-.git
```

Em seguida, dentro da pasta, execute o seguinte comando para instalar as dependências.

```
npm install
```

Preencha o arquivo **.env** com a url do back-end rodando na sua máquina.

Terminado o processo, basta iniciar a aplicação:

```
npm run start
```

:stop_sign: Não se esqueça de executar a inicialização do servidor de aplicativos, disponível no repositório back-end, para testar totalmente o projeto.
