import { useState } from 'react';
import consultarCep from 'cep-promise';


function Search(props){
  var navegar = props.navegar;
  var setResultado = props.setResultado;
  var setErrorMessage = props.errorMessage;

  var [cepNumber,  setCepNumber] = useState('');
   
  function handleChange(event){
    var value = event.target.value;
    setCepNumber(value);
  }
  function clear(){
    setCepNumber('');
  }

  function handleSearch(){
    consultarCep(cepNumber)
      .then(handleSuccess)
      .catch(handleError)
  }

  function handleSuccess(dadosCep){
    // alterar os nomes do objeto
    var objeto = {
      'ESTADO': dadosCep.state,
      'CIDADE': dadosCep.city,
      'BAIRRO': dadosCep.neighborhood,
      'RUA': dadosCep.street
    }
    setResultado(objeto);
    navegar('Result')
        
  }

  function handleError(error){
    var errorMessage = error.message
    setErrorMessage(errorMessage);
    navegar('Error')  
  }

    return (
      <>
          <p>Qual CEP você deseja pesquisar?</p>
          <p>Teste de valor input: {cepNumber}</p>
          <input value={cepNumber} onChange={handleChange}/>
          <button onClick={clear}> Limpar</button>
          <button onClick={handleSearch} > Consultar </button>
      </>
    )
  }
  export default Search;