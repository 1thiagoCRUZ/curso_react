# Curso de React - Hora de Codar

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



