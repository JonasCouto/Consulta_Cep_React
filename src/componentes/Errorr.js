function Errorr(props) {
  var navegar = props.navegar;
    return (
          <>  
            <p>Erro na consulta</p>
            <p>{props.errorMessage}</p>
            <button onClick={()=> navegar('Search')}> Nova Consulta </button>
          </>
    )
  }
  
export default Errorr;