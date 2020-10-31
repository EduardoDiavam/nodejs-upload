# API para Uplaod de arquivos em NodeJS

Esta é uma API de upload de arquivos em NodeJS usando as bibliotecas express, mongoose, multer.
\
\
As rotas disponíves e seus respectivos exemplos para uso:\
\
`/posts`: Rota método GET que lista todos os posts existentes.\
\
<img src="https://user-images.githubusercontent.com/43859382/97782417-30909180-1b70-11eb-8cdd-766c5f1ec857.png">
\
\
\
`/posts`: Rota método POST que cria uma postagem com um upload de imagem.


<img src="https://user-images.githubusercontent.com/43859382/97782347-c677ec80-1b6f-11eb-9e5b-9f108e0ed163.png">


<img src="https://user-images.githubusercontent.com/43859382/97782348-c7108300-1b6f-11eb-99b1-85d80113d64b.png">



`/posts/:id`: Rota método DELETE que deleta o post pelo id:

<img src="https://user-images.githubusercontent.com/43859382/97782533-c75d4e00-1b70-11eb-993e-3aa205988c98.png">


\
Comandos para executar o projeto:\
1.`git clone https://github.com/EduardoDiavam/nodejs-upload.git`\
2.`cd nodejs-upload`\
3.`npm install`\
Basta configurar a URL do seu banco de dados MongoDB no arquivo index.js e rodar o comando `npm start` e testar as rotas.
