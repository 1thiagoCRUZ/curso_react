## Aula 13
### Renderização de listas
- Para renderizar uma lista vamos primeiramente precisar de um array (que é um tipo de dado que representa listas no JavaScript e essa lista pode contem qualquer tipo de dado, podem ser números, strings mas geralmente quando estivermos trabalhando com uma aplicação real vai ser um array de objetos, por exemplo, um array com usuários do sistema).
- Depois utilizamos a função map, para percorrer cada um dos itens.
- Podendo assim renderizar algo na tela.
- É possível unir operadores condicionais com a renderização de listas. Exemplo: Se tiver itens na lista faz a impressão da mesma, se não tiver retorna uma mensagem/aviso.


Criamos um novo arquivo chamado 🟨***OutraLista.js*** onde criamos o nosso componente de lista e passamos os itens como ```props```
```bash
function OutraLista({ itens  })
```

Feito isso vamos estar utilizando o ```map``` para percorrer todos os itens que criamos na nossa lista dentro do arquivo 🟨***App.js***
```bash
const meusItens = ['React', 'Vue', 'Angular']
```

Agora no 🟨***OutraLista.js**** a gente coloca o ```map``` para percorrer os itens da nossa lista da seguinte forma abaixo
```bash
<>
        <h3>Lista de coisas boas:</h3>
        {
            itens.map((item) => (
                <p>{item}</p>
            ))
        }
</>
```

Com isso feito basta no 🟨***App.js*** importar o componente da lista e passar a lista como propriedade para o componente
```bash
 <h1>Renderização de Listas</h1>
      <OutraLista itens={meusItens}/>
```


❗ Isso vai imprimir os itens da lista, porém, tem algo para se notar no console que é um erro do próprio React, quando a gente faz um ```map```, por exemplo, a gente precisa que cada um dos itens tenha um ID único na propriedade key.


❓ Como arrumar isso?

Nesse caso vamos utilizar o índice dos elementos da lista como chave, não é o mais recomendado, porém, como é um exemplo vai servir por enquanto. O ideal seria utilizar de fato o id que vem do banco de dados.

```bash
<>
        <h3>Lista de coisas boas:</h3>
        {
            itens.map((item, index) => (
                <p key ={index} >{item}</p>
            ))
        }
</>
```

#### O que fazer em caso de listas vazias? 
Nesse caso podemos criar condições de ```IF``` e ```ELSE``` para caso o tamanho da lista seja maior que um o código imprimir a lista e caso seja menor que um deixar um aviso de que a lista não possui itens.

Fazemos isso por meio de um IF ternário
```bash
<>
        <h3>Lista de coisas boas:</h3>
        { itens.length > 0 ? (
                itens.map((item, index) => (
                    <p key ={index}>{item}</p>
                ))
            )
            : (
                <p>Não há itens na lista!</p>
            )
        }
        </>
```

É importante mencionar que nesse caso de ```IF``` e ```ELSE``` é necessário deixar o conteúdo que quer exibir/executar envolto por parênteses. 

