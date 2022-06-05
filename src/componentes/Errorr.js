function Errorr(props) {
  var navegar = props.navegar;
  var erroMsg = props.erroMsg;
    return (
          <>  
            <p>Erro na consulta </p>
            <p>{erroMsg}</p>
            <button onClick={()=> navegar('Search')}> Nova Consulta </button>
          </>
    )
  }
  
export default Errorr;