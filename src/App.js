
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProjetct from './components/pages/NewProject';

function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/newproject">Novo Projeto</Link>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>

      <Routes>
        <Route path="/company" element={<Company />} />
      </Routes>

      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Routes>
        <Route path="/newproject" element={<NewProjetct />} />
      </Routes>
      <p>Footer</p>
    </Router>
  );
}

export default App;
