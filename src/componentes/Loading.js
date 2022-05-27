function Loading(props){
  var navegar = props.navegar;
    return (<>     
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
              <p>Carregando Resultados...</p>
              <button onClick={() => navegar('Search')}> Cancelar </button>
            </>

    )
  }
  export default Loading;