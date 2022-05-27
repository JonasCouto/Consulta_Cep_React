// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Errorr from './componentes/Errorr';
import Loading from './componentes/Loading';
import Result from './componentes/Result';
import Search from './componentes/Search';




<<<<<<< HEAD
function App() {

  var [nomeTela, setNomeTela] = useState('Search');

  function goTo(nomeTela){
        console.log('o Nome da tela é ' + nomeTela);
        setNomeTela(nomeTela);
  }
  

  return(<div>

        <div className="App">
          <header className="App-header">
            {nomeTela == 'Search' ? <Search navegar={goTo} /> : null}
            {nomeTela == 'Result' ? <Result navegar={goTo} result={{"Rua" : "Bento Gonçalves"}}/> : null}
            {nomeTela == 'Error' ? <Errorr navegar={goTo} textoTopo=" Não foi possivel localizar CEP"/> : null}
            {nomeTela == 'Loading' ? <Loading navegar={goTo} /> : null}
          </header>  
        </div>
      </div>
  );
=======
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
>>>>>>> 32ea5b0a2a64e222aee02e36076c876aff6d4cfb
  
}

export default App;
