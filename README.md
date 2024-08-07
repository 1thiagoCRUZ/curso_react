## Aula 11
### Métodos por props
- Os métodos também podem ser passados por props
- Ou seja, um componente filho pode ativar o método do seu ancestral
- Vamos acessar o método por meio de um evento
- A sintaxe é a mesma de uma props de dados: props.meuEvento

Um ponto importante sobre eventos é que se passarmos eles com o () o programa entende que ele será executado assim que o componente é criado e quando passamos sem o parênteses o componente entende que estamos mandando uma função para ele executar depois, sendo o que a gente quer para esse caso.


#### Como passar métodos por props?

Dentro do nosso arquivo 🟨***Evento.js*** a gente vai passar o nosso componente de botão da seguinte forma:
```bash
return (
        <div>
            <p>Clique para disparar um evento: </p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />
        </div>
    )
}
```

Feito isso temos que criar o componente Botão em questão, uma dica muito valiosa é a de que devemos sempre organizar direitinho a estrutura do nosso projeto, separando os componentes por suas respectivas páginas.

No arquivo 🟨***Button.js*** criamos nosso componente:
```bash
function Button(props) {
    return <button onClick={props.event}>{props.text}</button>
}

export default Button
```

Então na função do nosso componente a gente passa que ele vai ter/receber ```props``` e no ```return``` nós retornamos um botão com o método ```onClick``` nele e passando as ```props.event```

Retornando para o 🟨***Evento.js*** dentro da função ```Evento``` vamos criar as duas funções que vamos passar como ```props```
```bash
    function meuEvento() {
        console.log(`Ativando primeiro evento`)
    }

    function segundoEvento() {
        console.log("Ativando o segundo evento")
    }
```

E agora passamos essas duas funções por meio da propriedade ```event```que criamos lá no arquivo do componente botão
```bash
return (
        <div>
            <p>Clique para disparar um evento: </p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />
        </div>
    )
```


