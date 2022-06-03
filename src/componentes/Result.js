function Result(props){
  var navegar = props.navegar;
  var resultado = props.result;

  // guardar o resultado do objeto props
  const results = props.result;

  const keys = Object.keys(results);
  const element = keys.map(key => (
    <span key={key}><b>{key}: </b>{results[key]}</span>
  ))

  // console.log(resultado);
    return (
          <>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <p>Resultado para o CEP {resultado.cep}</p>
            {element}
            <button onClick={()=> navegar('Search')}> Nova Consulta </button>
          </>
    )
  }

  // <span><b> Rua:</b> Teste </span>
  // <span><b> Cidade:</b> Porto Alegre </span>
  export default Result;