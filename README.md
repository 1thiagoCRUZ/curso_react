## Aula 12
### Renderização por condição
- Podemos atrelar a exibição de algum elemento a um ```IF```
- Esta ação é chamada de ***renderização condicional***
- Envolvemos as tags em chaves {}
- Como as chaves executam JavaScript, criamos nossa condição
- É possível usar o state para cirar as condições

Foi criado o arquivo 🟨***Condicional.js***


Nele declaramos as constantes para fazer um formulário condicional
```bash
const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()
```

Função responsável por enviar o e-mail do formulário
```bash
function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }
```

#### Exemplo do IF no formulário onde se o formulário estiver preenchido vai aparecer uma div com um botão, se o formulário estiver vazio a div não será apresentada:

```bash
return (
        <div><h2>Cadastre seu e-mail: </h2>
        <form>
            <input 
            type="email" 
            placeholder="Digite o seu e-mail..."
            onChange={(e) => setEmail(e.target.value)}></input>
            <button onClick={enviarEmail}>Enviar e-mail</button>
        {userEmail && (
            <div>
                <p>O e-mail do usuário é: {userEmail}</p>
                <button onClick={limparEmail}>Limpar</button>
            </div>
        )}
        </form>
        </div>
    )
```

Nesse caso o ```IF``` é feito dentro das chaves e também a condição é representada por dois E's comerciais, a função de limpar o e-mail é só uma forma de colocar a prova que se o e-mail não estiver preenchido a ```div``` não será retornada.