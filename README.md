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

### Aprendendo e entendendo o JSX⚛️
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

## Aula 4
### Criando Componentes
- Permitem dividir a aplicação em partes, podendo ser reutilizados em vários locais.
- Os componentes renderizam **JSX**, assim como  🟨***App.js*** (que é um componente).
- Precisamos criar um arquivo de componente.
- E importá-lo onde precisamos utilizar, usando ```export``` que é uma função que me permite disponibilizar o conteúdo de um arquivo para o outro.
- Normalmente ficam em uma pasta chamada 📁***components***, porém poderemos criar mais pastas dependendo da organização e foco do nosso projeto.

📂**src** - Utilizaremos bastante para criação de novos arquivos e pastas.

### Criação do Componente
Quando a gente cria um componente, seja ele o que for a gente sempre vai ter que trabalhar com a seguinte case/convenção: **letras maiúsculas as iniciais e as que separam as outras palavram também**.

**Exemplo -** Consigo separar HelloWorld em duas palavras (Hello World), então o nome do seu arquivo vai ser HelloWorld.


**Algumas Observações** 🧐
- No react declarar função é basicamente a mesma coisa que criar um componente.
- Além disso, o return no React é diferente do que return nas outras linguagens, como estamos encapsulando o **JSX** teremos um ```()``` abre e fecha parênteses e dentro desses parênteses a gente coloca o nosso **HTML**.
- Sempre bom lembrar que precisamos de um wrapper, que é algo que vai envolver todo o nosso componente que pode ser uma div, nem sempre é, mas geralmente é.

### Primeiro componente criado
```bash
function HelloWorld() {

    return (
        <div>
            <h1>Meu primeiro Componente</h1>
        </div>
    )
}
export default HelloWorld
```

Para estarmos conseguindo utilizar esse componente em outro arquivo, para que assim o mesmo seja exibido na nossa página, temos que importar o componente e informar arquivo em que esse componente está por meio do ```import``` no 🟨***App.js***.

```bash
import HelloWorld from './components/HelloWorld';
```

Porém apenas importar não é o suficiente, para que o componente apareça no site precisamos "chamar" o mesmo no nosso código, por enquanto só importamos, para estarmos conseguindo chamar esse componente basta abrir e fechar tag e digitar o nome do componente:

```
<HelloWorld/>
```

Outro conceito fundamental dos componentes é que os mesmos tem que ser reutilizáveis, ou seja, temos que poder utilizar o componente em qualquer lugar da minha aplicação e poder renderizar coisas diferentes com esse componente.

### Importando componentes dentro de componentes
Um ponto legal é que não precisamos necessariamente importar os componentes lá no 🟨***App.js***, podemos importar em outros componentes e assim fazer uma "escadinha", onde um puxa o outro.

#### Exemplo:
Criamos outro componente chamado Frase em um arquivo diferente e importamos esse componente no arquivo do componente HelloWord.

🟨**Frase.js**
```bash
function Frase() {
    return (
        <div>
            <p>Este é um componente com uma frase!</p>
        </div>
    )
}
export default Frase
```

🟨***HelloWorld.js***
```bash
import Frase from "./Frase"

function HelloWorld() {
    return (
        <div>
            <Frase/>
            <h1>Meu primeiro Componente</h1>
        </div>
    )
}
export default HelloWorld
```

Nesse caso importamos o componente **Frase** no componente **HelloWorld** e dessa maneira passamos apenas o HelloWorld, com o componente Frase dentro dele, para o 🟨***App.js***:
```bash
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const name = 'Thiago'
  const newName = name.toUpperCase()

  function sum(a, b) {
    return a + b
  }

  const url = "https://via.placeholder.com/150"
  return (
    <div className="App">
     <h2>Alterando o JSX</h2>
     <p>Olá, {newName}</p>
     <p>Soma: {sum(1,2)}</p> {/*Executando algumas funções do próprio JavaScript */}
    <img src={url} alt='Minha Imagem'/>
    <HelloWorld/>
    </div>
  );
}

export default App;
```

A saída disso no site:
![image](https://github.com/1thiagoCRUZ/curso_react/assets/86666413/529e96a7-f7c6-40e2-a6fb-e94b8018a06d)

#### Reutilização de um mesmo componente
Exemplo simples de reutilização de um componente:

🟨***HelloWorld.js***
```bash
        <div>
            <Frase/>
            <h1>Meu primeiro Componente</h1>
            {/* Exemplo de reutilização */}
            <Frase/> 
            <Frase/>
        </div>
export default HelloWorld
```

Saída disso no site:
![image](https://github.com/1thiagoCRUZ/curso_react/assets/86666413/f6b6d569-dd8a-42e6-bab6-0f3efdcafdd5)


## Aula 5

### Props

- As props são valores passados para componentes, de cima para baixo, ou seja, um componente filho vai receber uma propriedade de um componente pai que pode ser por exemplo: nome (Thiago), idade (18) e por aí vai, qualquer tipo de dado que pode ser passado para um componente.
- Podemos deixá-los dinâmicos.
- Ou seja, mudando a execução por causa do valor da prop.
- O valor é passado como um atributo na chamada do componente.
- E precisa ser resgatado dentro de uma propriedade/argumento chamada props na função de definição do componente.
- As props são somente de leitura!

### Onde as props são colocadas?

```bash
function SayMyName(props) {
    return ();
}

export default SayMyName;
```

Passamos ela como argumento para a função. Esse argumento é onde o nome que a gente vai passar (nesse caso um só, porém, poderia ser mais, não tem limite) vai condensar na propriedade uma ou mais, nesse cara aqui, e posteriormente eu vou poder acessar `props.nome` na propriedade como se fosse um objeto JavaScript para poder imprimir ela no HTML.

### Fazendo o componente dinâmico:
```bash
function SayMyName(props) {
    return (
        <div>
            <p>Fala aí {props.nome}, suave?</p>
        </div

```

Lá dentro do 🟨***App.js*** vamos fazer todo aquele procedimento de importar o componente, porém, para exibir tem uma diferença.
Como esse componente precisa de um argumento do tipo nome, a gente chama ele dentro do 🟨***App.js*** da maneira que chamamos os outros componentes `<Componente/>`, só que passando o valor do atributo para ele, dessa forma aqui:
```bash
<SayMyName nome="Thiago"/>
```

### Reaproveitamento de componentes de forma dinâmica:
```bash
return (
    <div className="App">
      <HelloWorld/>
      <SayMyName nome="Thiago"/>
      <SayMyName nome="Neymar"/>
    </div>
);
```

### Agora passando via variável ficaria assim:
```bash
const name = "Messi"
  return (
    <div className="App">
      <HelloWorld/>
      <SayMyName nome="Thiago"/>
      <SayMyName nome="Neymar"/>
      <SayMyName nome={name}/>
    </div>
```

### Agora, partindo para um componente um pouco mais estruturado:
```bash
function Pessoa(props){
    return(
        <div>
            <img src={props.foto} alt={props.nome} />
            <h2>Nome: {props.nome}</h2>
            <p>Idade: {props.idade}</p>
            <p>Profissão: {props.profissao}</p>
        </div>
    )
}

export default Pessoa
```


A gente preencheria ele da mesma forma que o anterior:
```bash
<Pessoa 
      nome="Thiago" 
      idade="18" 
      profissao="Analista" 
      foto="https://via.placeholder.com/150"/>
```

### Utilizando Destructuring para simplificar
Para evitar ficar repetindo o `props` a todo momento, podemos utilizar um recurso do JavaScript chamado Destructuring. Podemos transformar esse objeto `props` já no nome da propriedade, sem precisar ficar chamando sempre esse mesmo objeto, o que acaba deixando o componente muito mais simples.


### Como fazer isso❓

Podemos dizer que o objeto que recebemos na função vai virar alguns valores que seriam o nome, idade, profissão e a foto. Ficaria assim basicamente:
```bash
function Pessoa({ nome, idade, profissao, foto }){
    return(
        <div>
            <img src={foto} alt={nome} />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa
```

Dessa forma o componente ficou muito mais simples e a gente tem o mesmo resultado dentro do site.




## Aula 6
### Adicionando CSS

- O CSS pode ser adicionado de forma global na aplicação, por meio do arquivo 🟦***index.css*** por exemplo;
- Porém, é possível estilizar a nível de componentes;
- Utilizamos o CSS modules para isso;
- Basta criar um arquivo com o seguinte nome: 📁 -> ```Componente.module.css``` - (NomeDoComponente.module.css);
- E chamar este CSS no componente em questão.


Nos arquivos de CSS dos componentes temos que nos atentar a nomenclatura, pois, não podemos criar classes com o hífen pois não vai reconhecer.


❌ ***Exemplo errado***
```bash
frase-container
```


✅ ***Exemplos corretos***
```bash
.fraseContainer
```
```bash
.frase_container
```

### Importando CSS modules no arquivo do componente
Para importar o processo é bem semelhante a todos os outros, a única diferença é que para esse tipo de arquivo 🟦***CSS*** precisamos colocar o ```styles``` após o ```import```.

O ```styles``` é semelhante a ```props```, é um cara que condensou todo o conteúdo presente no seu arquivo em propriedades.


Passamos tudo isso por meio de um ```className``` na tag em questão.
Desse jeito aqui
```bash
<div className={styles.fraseContainer}>
```

Basicamente o arquivo de 🟦***index.css*** vai servir para definir o 🟦***CSS*** geral do projeto, margins, padding e etc.
Enquanto o CSS modules é para uma estilização mais específica.

## Aula 7 
### Utilizando React Fragments

- Os ***React Fragments*** permitem a criação de um componente sem elemento pai;
Ou seja não é preciso colocar mais aquela DIV que era "obrigatória" nas aulas anteriores, vamos simplesmente utilizar de um ```placeholder``` e aí podemos entregar diversos componentes filhos a partir disso.

Basicamente é algo que retorna um elemento só, que é um requisito do React, mas ele não entrega um tag assim não sendo obrigatória a DIV. 


- O propósito é descomplicar os nós de DOM;


- A sintaxe é ```<>``` e ```</>```, não há um nome para a tag;


- Criamos no próprio ***JSX***.


Criamos um novo arquivo chamado  🟨***List.js*** para mostrar na prática como funcionaria o fragments.
E seria da seguinte forma:

```bash
function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </>
    )
}

export default List
```

Temos o conteúdo da lista envolto por tags vazias e não mais aquela DIV que anteriormente era "obrigatória".


Uma outra forma de reaproveitar componentes seria a de criar um arquivo para os itens e passar eles por meio de ```props``` para a Lista.
Dessa forma aqui

🟨 ***Item.js***
```bash
function Item(props) {
    return(
        <>
            <li>
                {props.marca}
            </li>
            <p>Teste</p>
        </>
    )
}

export default Item
```

🟨 ***List.js***
```bash
import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
               <Item marca="Ferrari"/>
               <Item marca="Fiat"/>
               <Item marca="Renault"/>
            </ul>
        </>
    )
}

export default List
```


## Aula 8
### Avançando em props
- Podemos definir tipos para as ```props```, ou seja string, number e por ai vai, realizando uma espécie de validação;
Isso melhora o desenvolvimento do projeto como um todo.
- Definimos em um objeto chamado ```propTypes``` no próprio componente;
- E ainda há a possibilidade de definir um valor padrão;
- Neste caso utilizamos o objeto ```defaultProps```;


#### Como utilizar o propTypes?
Vamos importar o pacote por meio da linha de código abaixo:
```bash
import PropTypes from 'prop-types'
```

E dessa outra forma nós conseguimos definir os tipos do nosso componente Item:
```bash
Item.propTypes = {
    marca: PropTypes.string,
    ano_lancamento: PropTypes.number
}
```

É importante que o código acima seja declarado dentro do componente em questão.



Podemos falar também que o tipo é requerido/obrigatório, definindo do seguinte jeito:
```bash
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number.isRequired
}
```


Caso não coloquemos o conteúdo do componente de maneira adequada ainda assim o conteúdo será imprimido na web, porém, vai ocorrer um erro que é possível ver no console do navegador.


#### DeafultProps
Podemos também utilizar o ```defaultProps``` que coloca um valor default pro nosso Item, ele é declarado da seguinte maneira:
```bash
Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0,
}
```

Dessa maneira o ```required``` cai por terra, pois estamos passando um valor default para os itens (é como se o default preenchesse o valor que é requerido).

Então se o nosso Item estiver dessa forma aqui:
```bash 
<Item />
```


No site ele aparecerá com o conteúdo que preenchemos no ```defaultProps```:

Faltou a marca - 0


É algo bem legal de se utilizar se levarmos em conta requisições de informações no backend também, pois se o usuário não informar um valor a gente consegue utilizar esse ```defaultProps``` como conteúdo.


## Aula 9
### Eventos no React (onClick, onChange e onSubmit)

#### Eventos
- Os eventos de React são os mesmos eventos do DOM
- Ou seja, temos eventos para responder a um click
- O evento é atrelado a uma tag que irá executá-lo
- Geralmente um método é atribuído ao evento
- Este método deve ser criado no componente 


#### Como funciona o onClick na prática?

Definimos no arquivo do nosso componente a função do mesmo normalmente

🟨 ***Evento.js***
```bash
function Evento() {

    return (
 	//Conteúdo
    )
}

export default Evento
```

A diferença é que no conteúdo vamos colocar o método dentro da tag, pode ser dentro do ```button```, como no exemplo abaixo:
```bash
return (
        <div>
            <p>Clique para disparar um evento: </p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
```


Feito isso temos que criar a função ```meuEvento``` para que esse método tenha alguma ação para ser executada, então mais acima do ```return``` nós criamos a função ```meuEvento``` e colocamos um ```console.log``` nela para printar algo no console:
```bash
function meuEvento() {
        console.log(`Opa, fui ativado!`)
    }
```

Dentro do 🟨 ***App.js*** nós importamos o componente e declaramos ele no return:
```bash
import './App.css';
import Evento from './components/Evento';

function App() {

  return (
    <div className="App">
      <h1>Testando Evento</h1>
      <Evento/>

    </div>
  );
}

export default App;
```


O resultado ao clicar no botão é a mensagem "Opa, fui ativado!" lá no console.



Podemos utilizar isso com ```props``` também, moldando para usar as ```props``` ficaria assim:
```bash
function Evento({ numero }) {

    function meuEvento() {
        console.log(`Opa, fui ativado! ${numero}`)
    }

    return (
        <div>
            <p>Clique para disparar um evento: </p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento
```

Dessa forma o 🟨 ***App.js*** ficaria da seguinte forma:
```bash
import './App.css';
import Evento from './components/Evento';

function App() {

  return (
    <div className="App">
      <h1>Testando Evento</h1>
      <Evento numero="1"/> // As props aqui
      <Evento numero="2"/> // As props aqui

    </div>
  );
}

export default App;
```

No site não mudaria muita coisa, a única diferença é que ao clicar no primeiro botão seria printado "Opa, fui ativado! 1" e clicando no segundo botão seria printado "Opa, fui ativado! 2".



#### Como funciona o onSubmit na prática?
É um método muito utilizado em formulários e vai ser bastante importante para nós ao decorrer do projeto

Definimos no arquivo do nosso componente a função do mesmo normalmente, como o anterior:
🟨 ***Form.js***
```bash
function Form () {

    return (
    )
}

export default Form
``` 

Vamos preencher o ```return``` com um formulário bem simples:
```bash
	<div>
            <h1>Cadastro: </h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
```

A diferença é que o método dessa vez não vai no botão e sim no formulário, até porque temos que esperar que o mesmo seja enviado.

Feito isso vamos criar a nossa função ```cadastrarUsuario``` e colocar um ```console.log``` nela para printar algo no console
```bash
function cadastrarUsuario() {
        console.log("Usuário cadastrado!")
    }
```

Lá no 🟨 ***App.js*** importamos o componente Form e colocamos ele abaixo dos componentes de Evento:
```bash
import './App.css';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {

  return (
    <div className="App">
      <h1>Testando Evento</h1>
      <Evento numero="1"/>
      <Evento numero="2"/>

      <Form />
    </div>
  );
}

export default App;
```

Indo para o site, dessa forma que está não vai funcionar. Isso porque o formulário sempre busca enviar as informações preenchidas nele para o backend e, geralmente, para uma outra rota, assim ao clicar no input vai ser enviada a requisição, porém, não será printado o nosso conteúdo no console nessa nova rota.
Teria que ser feito um envio de forma assíncrona.

#### ❓ Como resolver isso?
Vamos utilizar o ```preventDefault``` que permite que a gente consiga "congelar" o processo padrão do formulário que é o de enviar as informações para uma nova rota e não exibir o conteúdo naquela mesma página em que estávamos.

Fica assim a função então:
```bash
function cadastrarUsuario(e) // Esse e é de "event" {
        e.preventDefault()
        console.log("Usuário cadastrado!")
    }
```

Dessa forma, é printado no console o conteúdo após o botão ser acionado.

O ```preventDefault``` é muito útil para fazer a requisição, ou enviar as informações para o backend e ainda mostrar para o usuário algumas informações na mesma página onde a requisição está sendo feita.
Provavelmente será muito utilizado mais para a frente no projeto.

