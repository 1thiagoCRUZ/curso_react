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