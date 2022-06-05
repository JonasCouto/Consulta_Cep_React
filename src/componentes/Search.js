import { useState } from 'react';
import consultarCep from 'cep-promise';


function Search(props){
  var navegar = props.navegar;
  var setResultado = props.setResultado;
  var setErroMsg = props.setErroMsg;

  var [cepNumber,  setCepNumber] = useState('');
   
  function handleChange(event){
    var value = event.target.value;
    setCepNumber(value);
  }
  function clear(){
    setCepNumber('');
  }

  function handleSearch(){
    navegar("Loading")
    // API de CEP 
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
    var erroMsg = error.message;
    console.log(erroMsg);
    setErroMsg(erroMsg);
    navegar("Error");
  }
    return (
      <>
          <p>Qual CEP você deseja pesquisar?</p>
          <p>{cepNumber}</p>
          <input value={cepNumber} onChange={handleChange}/>
          <button onClick={clear}> Limpar</button>
          <button onClick={handleSearch} > Consultar </button>
      </>
    )
  }
  export default Search;