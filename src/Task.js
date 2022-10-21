//Vamos a usar estilos en este componente

import "./task.css";

/*
export function TaskCard() {
  //así podemos estilizar nuestro componente, con el uso de variables o directamente poner en style, es igual
  const cardStyles = { background: "#202020", color: "#fff", padding: "20px" };
  const titleStyle = { fontWeight: "lighter" };
  return (
    <div style={cardStyles}>
      <h1 style={titleStyle}>Mi 1era tarea</h1>
      <p>Tarea realizada con éxito!</p>
    </div>
  );
}
*/

//ahora hacemos uso de lo definido en nuestro archivo de estilos, task.css
/*
export function TaskCard({ ready }) {
  return (
    <div className="card">
      <h1>Mi 1era tarea</h1>
      <span style={ready ? { background: "green" } : { background: "red" }}>
        {ready ? "Tarea realizada" : "Tarea pendiente"}
      </span>
    </div>
  );
}
*/

//igual hacemos uso de clasesName para los estilos
export function TaskCard({ ready }) {
  return (
    <div className="card">
      <h1>Mi 1era tarea</h1>
      <span className={ready ? 'bg-green' : 'bg-red'}>
        {ready ? "Tarea realizada" : "Tarea pendiente"}
      </span>
    </div>
  );
}
