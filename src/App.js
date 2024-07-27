import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

  const name = "Messi"
  return (
    <div className="App">
      <Frase />
      <Frase />
      <SayMyName nome="Thiago"/>
      <SayMyName nome="Neymar"/>
      <SayMyName nome={name}/>
      <Pessoa 
      nome="Thiago" 
      idade="18" 
      profissao="Analista" 
      foto="https://via.placeholder.com/150"/>
      <List />
    </div>
  );
}

export default App;
