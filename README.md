# Curso de React - Hora de Codar

## Aula 1

### O que é React?

- Uma biblioteca JavaScript para criação de interfaces.
- Utilizado para construir SPAs (Single Page Application) - um arquivo só de index e rodar toda a aplicação.
- Baseado em componentes - questão de arquitetura onde o React vai subdividir (como um quebra-cabeça) o nosso site e ai a gente pode estar reaproveitando essas peças do quebra-cabeça em diversos lugares.
- Utiliza o JSX para renderizar HTML - basicamente o que vamos escrever: o HTML no React no JS.
- E aplica o Virtual DOM para realizar as alterações de DOM.
- Podemos adicionar a um projeto ou criar um projeto com ele.

## Aula 2

### Como instalar o React?

- Para instalar o React vamos utilizar uma ferramenta chamada Create React App.
- Recebemos todos os arquivos da biblioteca e temos como executá-la.
- Para utilizar precisamos do Node e também npm.
- Esta ferramenta também otimiza o app gerado para produção.
- É possível iniciar a aplicação com `npm start`.

#### Create React App
  
```bash
npx create-react-app nome-do-projeto
```
`npm start` - inicializa o servidor de desenvolvimento.

`npm build` - constrói o aplicativo para produção.

#### Explicação de alguns arquivos do projeto
🟥 ***index.html***
- Ponto de partida: o navegador abrirá este arquivo quando rodarmos a aplicação.
- A partir deste elemento `<div id="root"></div>`, o React é executado.

🟦 ***index.css***
- Gera um CSS para aplicação toda, é basicamente um estilo global da aplicação.

🟨 ***index.js***
- Arquivo base, que vai fazer o bootstrap de fato, importa o componente: `./App` que é de onde vai partir a aplicação e vai abrir/inserir esse app no root que seria aquele do HTML (a div no caso).

🟨 ***App.js***
- Arquivo que inicializa o projeto - o que alterar aqui reflete na nossa página.

🟧 ***App.test.js***
- Arquivo de teste, serve para testar a aplicação (nome autoexplicativo).


## Fluxo do React
O fluxo do React começa com o arquivo ***index.js***. Neste arquivo, o ReactDOM é utilizado para renderizar o componente principal da aplicação na página HTML. Geralmente, é a linha de código abaixo:
```bash
ReactDOM.render(<App />, document.getElementById('root'));
```
Isso significa que o componente App será renderizado dentro de um elemento com o id "root" no arquivo HTML.

Agora, no arquivo ***App.js***. Este é o componente principal da aplicação. Aqui, você define a estrutura geral da sua aplicação e pode incluir outros componentes React conforme necessário. Exemplo:
```bash
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div>
            {/* Conteúdo da aplicação */}
        </div>
    );
}

export default App;
```

Dentro do componente App, você define a estrutura da sua aplicação, como cabeçalhos, barras de navegação, e outras partes da interface do usuário.

Finalmente, temos a `<div id="root">` no arquivo HTML. Esta é a div onde o React irá renderizar sua aplicação. É geralmente a única coisa dentro do corpo `<body>` do arquivo index.html. Exemplo:
```bash
<div id="root"></div>
```

Quando você executa sua aplicação React, o ReactDOM pega o componente App e o renderiza dentro da div com id "root". Isso marca o início da sua aplicação React, e a partir daí, o React cuida da atualização da interface do usuário conforme necessário.
