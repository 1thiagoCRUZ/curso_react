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

