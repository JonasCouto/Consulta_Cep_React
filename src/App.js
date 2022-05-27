// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Errorr from './componentes/Errorr';
import Loading from './componentes/Loading';
import Result from './componentes/Result';
import Search from './componentes/Search';




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
  
}

export default App;
