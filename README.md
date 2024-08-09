## Aula 14
### State Lift
- State Lift é uma técnica utilizada para compartilhar o state
- É normal vários componentes dependerem do mesmo estado, porém, se um componente X está manipulando esse state como vamos passar isso para um componente Y, essa é a problemática que o State Lift resolve
- Então precisamos elevar o nível do mesmo a um componente pai, ou seja, ao invés de eu manipular o state no input eu vou manipular esse state no pai do input e aí eu consigo passar esse state em dois componentes distintos, assim fazendo lógicas diferentes em cada componente
- Então centralizamos o state no pai, e definimos quem usa e quem define (setState)


Para isso criamos um novo componente chamado ***🟨SeuNome.js*** que basicamente recebe um input do tipo texto para a pessoa informar o nome e esse input vai ter um método ```onChange``` nele para que assim que o nome for setado estar alterando o conteúdo do input.


Dentro do ***🟨App.js*** que é o componente pai nesse caso, a gente vai estar importando o ```useState``` e estar declarando a nossa constando para utilizar o método
```bash
  const [nome, setNome] = useState()
```

Dentro do nosso componente ```SeuNome``` vamos retornar a propriedade setNome como sendo o ```setNome``` definido acima
***🟨SeuNome.js***
```bash
function SeuNome({ setNome })
```

***🟨App.js***
```bash
<SeuNome setNome={setNome}/>
```

Com o nome setado agora vamos exibir ele, criamos outro componente chamado ***🟨Saudacao.js*** e nele vamos passar o nome como propriedade e criar uma função chamada ```gerarSaudacao``` para armazenar ```algumNome```

```bash
function Saudacao({nome}) {

    function gerarSaudacao(algumNome) {
        return `Olá, ${algumNome}, tudo bem?`
    }
```

Feito isso vamos retornar uma renderização condicional, onde se o conteúdo de nome for vazio não será retornado nada e se não for vazio vai ser retornado a saudação
```bash
function Saudacao({nome}) {

    function gerarSaudacao(algumNome) {
        return `Olá, ${algumNome}, tudo bem?`
    }

    return (
    <>
    {nome  &&<p>{ gerarSaudacao(nome)}</p>}
    </>
    )
}
```

Agora no ***🟨App.js*** nós vamos utilizar da mesma lógica utilizada pelo componente SeuNome e importamos o componente Saudacao, onde será passado o nome definido como ```const``` no ```useState``` mais acima como propriedade do componente
```bash
const [nome, setNome] = useState()

  <Saudacao nome={nome}/>
```

Dessa forma o site vai capturar cada letra que digitarmos e já exibir na tela.
É uma funcionalidade bem legal.

