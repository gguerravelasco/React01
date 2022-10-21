import React from "react";
import ReactDom from "react-dom/client";
//import { Greeting, Greeting4 } from "./Greeting"; //importamos un componente que en esta sección antes lo creamos, y ahora lo sacamos
import { UserCard } from "./Greeting";
//import FuncionesAnidadas, { NavBar } from "./FuncionesAnidadas"; //se importa un único componente, arriba entre llaves se accede a más componentes si fuera el caso
//import { Greeting2, Greeting3 } from "./Greeting2";
import { Button } from "./Button";
import { TaskCard } from "./Task"; //El componente y el archivo JS no se llaman igual, se mantiene que los 2 empiecen en mayuscula
import { Saludar } from "./Saludar";

//una forma, con la creacion de una variable
//const rootElement = document.getElementById('root')
//ReactDom.createRoot(rootElement)

//Sin creacion de variable
const root = ReactDom.createRoot(document.getElementById("root"));

//Creacion de un componente
//Todo componente es una funcion
//Esta funcion retorna una porcion de HTML, ojo, esto no es un string, en JS no podemos retornar HTML
//sino una string, pero acá usamos un lenguaje llamado JSX que es una mezcla de JS + HTML, es por eso
//que podemos retornar html en esta funcion, que si la observamos tiene la estructura de una funcion en JS
/*function Greeting() {
  return (
    <div>
      <h1>This is a component</h1>
      <p>lorem 123</p>
    </div>
  );
}
*/
//comentamos este componente porque lo sacamos en un archivo aparte, es separar la lógica de la aplicación

//Este es otro componente en donde se muestra el poder de JSX, aquí estamos usando una constante
//la misma que se pasa como parametro a una etiqueta HTML y entre las llaves { variable/constante } se evalua
//dentro de las llaves se interpreta código, como sumar o restar
/*function Greeting2() {
  const name = "Galo";
  return <h1>{name}</h1>;
  //return <h1>{ 10 + 30 }</h1>
}
*/

//function Greeting3() {
//  const val = true;
/*
    if (val){
        return <h1>Texto que se muestra porque una condición fue verdadera</h1>
    }else {
        return <h1>Texto que se muestra porque una condición fue falsa</h1>
    }
    */

//Para hacer un código más elegante que usar IF-ELSE, vamos con un operador ternario
//ojo con las cadenas para manejo de strings, en JS se usa la comilla simple o la comilla doble
//  return <h1>{val ? "Es verdadero" : "Es falso"}</h1>;
//}

//comentamos este componete, porque lo sacamos por fuera
/*
function Greeting4() {
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
*/
//comentamos porque sacamos a otro archivo
/*
function FuncionesAnidadas() {
  function sumar(x, y) {
    return x + y;
  }

  return <h1>{sumar(5, 4)}</h1>;
}
*/

//root.render(<h1>Hello React!!!</h1>)
//root.render(Greeting())
/*
root.render(<div>
    { Greeting() }
    { Greeting() }
    { Greeting() }
    { Greeting() }
</div>)
*/

//los componente se llaman con tags, es mejor que el codigo comentado de arriba
/*root.render(<div>
    <Greeting></Greeting>
    <Greeting></Greeting>
    <Greeting></Greeting>
    <Greeting></Greeting>
</div>)
*/

//Y como no vamos a escrbir nada dentro de estos tags, es suficiente así: (Self Closing Tags)
//Aqui vemos como reutilizamos 4 veces el componente llamado Greeting
//Recordar que todo debe estar contenido dentro de un componente padre (etiqueta), en este caso, el componente
//Greeting esta contenido dentro de un <div>, o podria ser un <p>, etc
/*root.render(
  <div>
    <Greeting />
    <Greeting />
    <Greeting />
    <Greeting2 />
    <Greeting3 />
    <Greeting4 />
    <FuncionesAnidadas />
  </div>
);*/

//React dice como regla que se debe usar un contenedor único, usaremos fragment <></> o un contenedor vacio
/*
root.render(
  <>
    <Greeting title="Parametro pasado"/>
    <Greeting x="adios"/>
    <Greeting y={2022}/>
    <Greeting a={true}/>
    <Greeting b={[1,2,3]}/>
    <Greeting2 />
    <Greeting3 />
    <Greeting4 />
    <FuncionesAnidadas />
    <NavBar />
  </>
);
*/
/*
root.render(
  <>
    <Greeting title="Hola Mundo" name="Galo" />
    <Greeting title="Hola React" name="Ernesto" />
    <Greeting title="Hola JSX" />
    <Greeting title="Hola JS" />
    <Greeting title="Hola Programación" />
  </>
);
*/
//Aqui usamos el mismo componente (UserCard), al cual le usamos 2 veces con diferentes parámetros de datos
/*
root.render(
  <>
    <UserCard
      name="Galo Guerra"
      amount={5000}
      married={true}
      points={[50, 22.3, 45, 38.9]}
      address={{ street: "123 Main Street", city: "New York" }}
      greet={function () {
        alert("Hello");
      }}
    />

    <UserCard
      name="Ernesto Velasco"
      amount={1000}
      married={false}
      points={[500, 20]}
      address={{
        street: "Av. Patria 123",
        city: "Quito",
      }}
    />
  </>
);
*/

//en JSX se comenta englobando al componente entre llaves, y dentro de eso usamos los comentarios para JS
//Uso o funcionamiento de Prop-Types
//{/*HelloMundo*/}  asi se comenta dentro de html y JSX
//{/*<Button text={{text: "hola"}}/>*/} {/*esto da un error, se espera un string, pero pasamos un objeto*/}
//{/*<Button />*/} {/*no pasamos nada, para eso marcamos como requerido*/}
/*
root.render(
  <>
    <Button text="Click me" />
    <Button text="Pay"/>
    <Button text="Go to"/>    
    <Button text=""/>
    <Button text="Hola" name="Adam"/>
  </>
);
*/

/*
root.render(
  <>
    <TaskCard ready={false} />
  </>
);
*/

//Aqui hacemos uso de un componente creado como clase, es otra forma, pero para este tipo de componentes
//se escribe más código, entonces creo que lo mejor es hacer uso de componentes creados como funciones
/*
root.render(
  <>
    <Saludar />
  </>
);
*/

//vemos manejadores de eventos (event handler)
root.render(
  <>
    <Button text="Saludar" />
  </>
);
