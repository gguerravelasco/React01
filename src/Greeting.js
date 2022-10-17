//Este componente lo sacamos del archivo index.js para que éste último no crezca desmedidamente
//así creamos un archivo para cada componente (que sería lo lógico para mejor lectura y mantenimiento)
//Como regla en React, todo componente de React debe comenzar con una letra mayúscula, así se diferenciará
//de los tags en HTML
/*export function Greeting(props) {   //props es un parametro que pasamos a la funcion
  console.log(props);
  return (
    <div>
      <h1>{props.title}</h1>
      <p>lorem 123</p>
    </div>
  );
}
*/

//Aqui no pasamos el objeto props, sino el valor, ver en la consola del navegador la diferencia
export function Greeting({ title, name = "Persona" }) {
  //props es un parametro que pasamos a la funcion
  console.log(title, name);
  return (
    <div>
      <h1>
        {title}, dice {name}
      </h1>
      <p>lorem 123</p>
    </div>
  );
}

//Pero acá también podríamos sacar otro componente de index.js, dijimos que lo lógico sería tener un archivo para
//cada componente, pero esto es dependiendo del contexto, y de como vayamos estructurando la lógica de la aplicación

export function Greeting4() {
  let user = {
    firstName: "Galo",
    lastName: "Guerra",
  };
  //return <h1>{ user }</h1>  //pero eso no es posible interpretar en HTML, así que hay que pasarlo a texto
  //return <h1>{JSON.stringify(user)}</h1> //esto mostrará así: {"firstName":"Galo","lastName":"Guerra"}

  //Para mejor tratamiento, se hace algo como esto
  return (
    <div>
      <h1>{user.firstName}</h1>
      <h3>{user.lastName}</h3>
    </div>
  );
}

//usamos un unicode emoticons de dolar, es omo un icono
//y aquí usamos props, el argumento
/*export function UserCard(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <p>💵{props.amount}</p>
      <p>{props.married ? "married" : "single"}</p>
      <ul>
        <li>City: {props.address.city}</li>
        <li>Street: {props.address.street}</li>
      </ul>
    </div>
  );
}*/

//Aqui usamos los parametros individuales, ya no directamente con props como nombre de argumento
export function UserCard({name, amount, married, address, greet}) {  
  console.log(name,amount,married,address,greet)
  return (
    <div>
      <h1>{name}</h1>
      <p>💵{amount}</p>
      <p>{married ? "married" : "single"}</p>
      <ul>
        <li>City: {address.city}</li>
        <li>Street: {address.street}</li>
      </ul>
    </div>
  );
}
