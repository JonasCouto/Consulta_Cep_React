import { useState } from 'react';

function Search(props){
  var navegar = props.navegar;
  var [cepNumber,  setCepNumber] = useState('');
   
  function handleChange(event){
    var value = event.target.value;
    setCepNumber(value);
  }
  function clear(){
    setCepNumber('');
  }

    return (
      <>
          <p>Qual CEP você deseja pesquisar?</p>
          <p>Teste de valor input: {cepNumber}</p>
          <input value={cepNumber} onChange={handleChange}/>
          <button onClick={clear}> Limpar</button>
          <button onClick={()=> navegar('Result')} > Consultar </button>
      </>
    )
  }
  export default Search;