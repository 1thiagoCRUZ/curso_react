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

## Aula 3

### Aprendendo e entendendo o JSX
- O JSX é como um HTML (teremos tags, fechamento e abertura, poder colocar atributos, classes e ids, basicamente poderemos fazer tudo que fazemos no HTML no JSX com leves diferenças, pois é possível executar códigos JS no JSX), porém dentro do código JavaScript - vai estar encapsulado no JavaScript como se fosse um template de HTML dentro do JS.
- É a principal maneira de escrever HTML com o React, estaremos sempre criando novas tags, novos elementos com JSX para poder mostrar pro usuário na página.
- Podemos interpolar variáveis (parte da execução do JavaScript, onde a gente tem um valor dinâmico como por exemplo nome, salário ou idade de uma pessoa e a gente consegue jogar essas informações na tela de forma simples), inserindo ela entre {}.
- É possível também executar funções em JSX, a gente vai ter quase que o JavaScript completo com todas as funções dentro do JSX, porém, com algumas limitações.
- Inserir valores em atributos de tags, é importante pois por exemplo se eu quero colocar uma classe, id, atributo dinâmico baseado em uma vavariável minha com o JSX isso é possível.

❗**Basicamente é o que a gente precisa para mostrar dados diferentes para usuários diferentes ou os mesmos usuários, vai depender do sistema que estamos criando.**

❗**Temos que "respeitar" mais o JSX do que o HTML normal.**

Quando criamos uma variável dentro do React geralmente vamos estar trabalhando dentro da função ```App()``` no 🟨 ***App.js***

```bash
function App()
```
É como se fosse o nosso elemento completo, a gente nunca vai trabalhar fora dela, a gente vai usar as partes externas de cima para importar coisas e as de baixo para exportar coisas. Dentro da função vamos estar criando nosso código, nossa lógica.

Podemos executar algumas funcionalidades do próprio JavaScript:
```bash
<p>Soma: {2 + 2}</p>
```
A saída para isso no site seria - **Soma: 4**

Podemos colocar estruturas condicionais como IF e ELSE também - Algo que será feito mais para frente no projeto.

Podemos criar funções dentro da função ```App()```

***Exemplo:***

Dentro da função ```App```
```bash
App() {
function sum(a, b) {
    return a + b
  }
}
```
Dentro do ```return```
```bash
<p>Soma: {sum(1,2)}</p>
```
A saída disso no site seria - **Soma: 3**

### Alteração de atributos no JSX
Outra coisa que pode ser feita é a alteração de atributos no JSX.

Vamos supor que eu tenho uma imagem, que vem de outro site, ou seja, ela vem de uma URL:
```bash
const url = "https://via.placeholder.com/150"
```

Para colocar essa imagem no código fazemos o seguinte:
```bash
<img src={url} alt='Minha Imagem'/>
```

A saída disso seria a imagem de 150x150 lá no site:
![image](https://github.com/1thiagoCRUZ/curso_react/assets/86666413/6b8fe3a9-cb4b-4bad-9d92-128c1bd0e428)

### Elemento pai
Outra legal do JSX é que eu preciso estar entregando apenas um elemento pai, eu não posso ter diversos elementos no mesmo nível no retorno.
Exemplo se eu tirar a div que envolve tudo daria erro.

**Saída**
```bash
<h2>Alterando o JSX</h2>
<p>Olá, {newName}</p>
<p>Soma: {sum(1,2)}</p> {/*Executando algumas funções do próprio JavaScript */}
<img src={url} alt='Minha Imagem'/>
```

**Erro** 
```bash
ERROR in [eslint]
src\App.js
  Line 16:5:  Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (16:5)

webpack compiled with 2 errors
```

O erro basicamente diz que todos os elementos JSX precisam estar "wrapped" em algum elemento, então, eu sou obrigado a colocar eles, por exemplo, numa div ou em algum outro elemento.

### Classe nos elementos
Ao contrário do HTML comum onde podemos colocar ```class=""``` nos elementos no React 
utilizaremos ```className=""```, se colocar ```class=""``` vai funcionar também, porém, dá um erro no console aonde pergunta se você quis dizer "className=".

```className=""``` seria a maneira correta de declarar o atributo **class** no React.



