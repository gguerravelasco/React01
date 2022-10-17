function FuncionesAnidadas() {
    function sumar(x, y) {
      return x + y;
    }
  
    return <h1>{sumar(5, 4)}</h1>;
  }
  //esta es la otra forma de otro componete
  export function NavBar(){
    return <nav>
        navigation
    </nav>
  }

  //Esta es otra forma de exportar, en este caso se exporta un componente particular por default
  export default FuncionesAnidadas; 