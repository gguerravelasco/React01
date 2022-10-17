//En este caso este archivo tiene la extensión jsx, para indicar que exporta componentes en JSX, 
//es decir, JS y HTML
export function Greeting2() {
  const name = "Galo";
  return <h1>{name}</h1>;
  //return <h1>{ 10 + 30 }</h1>
}

export function Greeting3() {
  const val = true;
  /*
      if (val){
          return <h1>Texto que se muestra porque una condición fue verdadera</h1>
      }else {
          return <h1>Texto que se muestra porque una condición fue falsa</h1>
      }
      */

  //Para hacer un código más elegante que usar IF-ELSE, vamos con un operador ternario
  //ojo con las cadenas para manejo de strings, en JS se usa la comilla simple o la comilla doble
  return <h1>{val ? "Es verdadero" : "Es falso"}</h1>;
}
