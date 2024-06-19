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
