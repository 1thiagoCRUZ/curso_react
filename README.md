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

🟨***Evento.js***
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

Dentro do 🟨***App.js*** nós importamos o componente e declaramos ele no return:
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

Dessa forma o 🟨***App.js*** ficaria da seguinte forma:
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

🟨***Form.js***
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

Lá no 🟨***App.js*** importamos o componente Form e colocamos ele abaixo dos componentes de Evento:
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
