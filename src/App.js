import './App.css';

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
    </div>
  );
}

export default App;
