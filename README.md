# Aula 7 
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
