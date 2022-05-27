function Result(props){
  var navegar = props.navegar;

  // guardar o resultado do objeto props
  const results = props.result;

  const keys = Object.keys(results);
  const element = keys.map(key => (
    <span key={key}><b>{key}: </b>{results[key]}</span>
  ))
    return (
          <>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <p>Resultado para o CEP 91520-110</p>
            {element}
            <button onClick={()=> navegar('Search')}> Nova Consulta </button>
          </>
    )
  }

  // <span><b> Rua:</b> Teste </span>
  // <span><b> Cidade:</b> Porto Alegre </span>
  export default Result;