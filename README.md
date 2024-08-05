## Aula 10
### useState na prática

- O useState (usado para manipulação de dados) é um hook do React

- Com ele conseguimos manusear o estado de um componente de forma simples

- Este hook funciona muito bem com eventos

- Podemos atrelar um evento a mudança de state

Para utilizar o state basta importar o mesmo por meio da linha de código abaixo:
```bash
import { useState } from "react" //useState é o nosso hook para este caso
```

Vamos trabalhar com constantes, duas para cada campo, como alteramos o usuário para ter nome e senha vai ficar da seguinte maneira essa parte da declaração de constantes:
```bash
const [name, setName] =
const [password, setPassword] =
```


A primeira do "nome" do campo, ou seja, o nome do que eu quero tratar e o segundo seria o que vai ser alterado.


name - o que vai ser resgatado

setName - o que vai ser alterado, o que eu vou atribuir para poder alterar o valor que está em name


#### Como alterar o valor baseado na mudança de valor do input?

Vamos colocar um evento de ```onChange``` e nesse próprio método fazer uma função para capturar o valor do ```input```


```bash
onChange={(e) => setName(e.target.value)}
```

Isso vai fazer com que a cada letra digitada dentro desse campo seja modificado o valor no state


Fazemos a mesma coisa para o campo de password e no final interpolamos tudo em um único print no console:
```bash
console.log(`Usuário ${name} foi cadastrado com a senha: ${password}`)
```