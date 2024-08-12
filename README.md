## Aula 15
### React Router
- O React Router é um pacote para mudança de URLs da aplicação
- Podemos assim acessar outras views, sem o page reload
- Trocando apenas uma parte do layout da aplicação, ou seja, o que meda de view para view
- Precisamos instalar este pacote no projeto
- E também realizar algumas mudanças em como o App é estruturado


Para a instalação do pacote executar o seguinte comando abaixo no terminal do editor
```bash
npm install react-router-dom
```

Feita a instalação vamos importar alguns pacotes dessa biblioteca que são os seguintes
```bash
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
```

E aí vamos colocar o código de forma que alguns elementos fiquem como base e não alterem independente da rota e outros sejam alterados

```bash
function App() {
  return (
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/empresa">Empresas</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresas />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;
```

#### Ponto importante, no ```LinK``` usamos o ```to``` para passar a rota mesmo que ele seja um elemento semelhante ao ```href```


#### Explicação das Principais Partes
```Router``` - Envolve toda a aplicação e fornece o contexto para o gerenciamento das rotas.


```Links``` - São os botões que permitem navegar entre as páginas. Eles usam o componente Link do ```react-router-dom```.


```Routes``` - Substitui o Switch do react-router-dom v6. Ele é responsável por renderizar a primeira rota ```(<Route>)``` que corresponde ao caminho da URL atual.


```Route``` - Define uma rota específica, mapeando uma URL para um componente (por exemplo, ```path="/"``` renderiza o componente ```Home```).


#### Atualização do Switch para Routes

No ```react-router-dom``` v6, o componente ```Switch``` foi substituído por ```Routes```. Agora, ```Routes``` é usado para renderizar o primeiro ```<Route>``` que combina com a URL atual. A ```prop element``` é usada para definir o componente que será renderizado para uma determinada rota.

```bash
 <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresas />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
```

