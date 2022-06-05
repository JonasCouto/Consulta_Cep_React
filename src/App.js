// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Errorr from './componentes/Errorr';
import Loading from './componentes/Loading';
import Result from './componentes/Result';
import Search from './componentes/Search';




function App() {
// teste
  var [nomeTela, setNomeTela] = useState('Search');
  var [resultado, setResultado] = useState({});
  var [erroMsg, setErroMsg] = useState('');
  

  function goTo(nomeTela){
        console.log('o Nome da tela é ' + nomeTela);
        setNomeTela(nomeTela);
  }
  

  return(<div>

        <div className="App">
          <header className="App-header">
            {nomeTela == 'Search' ? <Search navegar={goTo} setResultado={setResultado} setErroMsg={setErroMsg}/> : null}
            {nomeTela == 'Result' ? <Result navegar={goTo} result={resultado}/> : null}
            {nomeTela == 'Error' ? <Errorr navegar={goTo} erroMsg={erroMsg}/> : null}
            {nomeTela == 'Loading' ? <Loading navegar={goTo} /> : null}
          </header>  
        </div>
      </div>
  );
  
}

export default App;
