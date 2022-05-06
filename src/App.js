import logo from './logo.svg';
import './App.css';


function Search(){
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

function Loading(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Carregando Resultados...</p>
        <button> Cancelar </button>
      </header>
    </div>
  )
}

function Result(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Resultado para o CEP 91520-110</p>
        <span><b> Rua:</b> Teste </span>
        <span><b> Cidade:</b> Porto Alegre </span>
        <button> Nova Consulta </button>
      </header>
    </div>
  )
}

function Errorr(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Erro na consulta</p>
        <p> Servidor indisponiveis</p>
        <button> Nova Consulta </button>
      </header>
    </div>
  )
}




function App() {
  
  return Result()
  
}

export default App;
