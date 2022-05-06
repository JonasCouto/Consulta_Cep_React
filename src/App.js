import logo from './logo.svg';
import './App.css';


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Qual CEP você deseja pesquisar?</p>
        <input/>
        <button> Consultar </button>
      </header>
    </div>
  )
  
}

export default App;
